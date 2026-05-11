"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PlusCircle, Trash2, LogOut, BookOpen, Pencil, X, Check } from "lucide-react";

const CATEGORIES = ["Personal Finance", "Freelancer", "Retirement", "SME"];

type Study = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  content: string;
  createdAt?: string;
};

const EMPTY: Omit<Study, "createdAt"> = {
  slug: "", title: "", subtitle: "", category: "SME", image: "", content: "",
};

export default function AdminDashboard() {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [studies, setStudies] = useState<Study[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({ ...EMPTY });
  const [showForm, setShowForm] = useState(false);
  const [editingSlug, setEditingSlug] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Study | null>(null);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const t = sessionStorage.getItem("admin_token") || "";
    if (!t) { router.push("/admin"); return; }
    setToken(t);
    fetchStudies(t);
  }, [router]);

  async function fetchStudies(t: string) {
    setLoading(true);
    const res = await fetch("/api/admin/case-studies", { headers: { "x-admin-token": t } });
    if (!res.ok) { router.push("/admin"); return; }
    const data = await res.json();
    // Newest first
    setStudies([...data].sort((a, b) => new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()));
    setLoading(false);
  }

  function autoSlug(title: string) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  }

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg("");
    const payload = { ...form, slug: form.slug || autoSlug(form.title) };
    const res = await fetch("/api/admin/case-studies", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-admin-token": token },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok) {
      setMsg("Case study published successfully!");
      setForm({ ...EMPTY });
      setShowForm(false);
      fetchStudies(token);
    } else {
      setMsg(data.error || "Something went wrong");
    }
    setSaving(false);
  }

  async function handleEdit(e: React.FormEvent) {
    e.preventDefault();
    if (!editForm) return;
    setSaving(true);
    setMsg("");
    const res = await fetch("/api/admin/case-studies", {
      method: "PUT",
      headers: { "Content-Type": "application/json", "x-admin-token": token },
      body: JSON.stringify(editForm),
    });
    const data = await res.json();
    if (res.ok) {
      setEditingSlug(null);
      setEditForm(null);
      setMsg("Changes saved successfully!");
      fetchStudies(token);
    } else {
      setMsg(data.error || "Edit failed");
    }
    setSaving(false);
  }

  async function handleDelete(slug: string) {
    if (!confirm("Are you sure you want to delete this case study?")) return;
    setMsg("");
    const res = await fetch("/api/admin/case-studies", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", "x-admin-token": token },
      body: JSON.stringify({ slug }),
    });
    if (res.ok) {
      setMsg("Deleted successfully!");
      fetchStudies(token);
    } else {
      const data = await res.json().catch(() => ({}));
      setMsg(data.error || "Delete failed");
    }
  }

  function startEdit(s: Study) {
    setEditingSlug(s.slug);
    setEditForm({ ...s });
    setShowForm(false);
  }

  function cancelEdit() {
    setEditingSlug(null);
    setEditForm(null);
  }

  function logout() {
    sessionStorage.removeItem("admin_token");
    router.push("/admin");
  }

  return (
    <div className="min-h-screen bg-[var(--color-tertiary)]">
      {/* Header */}
      <header className="bg-[var(--color-primary)] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl gradient-gold flex items-center justify-center">
            <span className="font-display text-[var(--color-primary)] font-bold">F</span>
          </div>
          <div>
            <p className="font-display text-lg font-semibold">Finvvritti</p>
            <p className="text-xs text-white/60">Admin Dashboard</p>
          </div>
        </div>
        <button onClick={logout} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
          <LogOut size={16} /> Logout
        </button>
      </header>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {CATEGORIES.map((cat) => (
            <div key={cat} className="bg-white rounded-2xl border border-[var(--color-line)] p-4">
              <p className="text-xs text-[var(--color-muted)] uppercase tracking-wider">{cat}</p>
              <p className="font-display text-2xl text-[var(--color-primary)] mt-1">
                {studies.filter((s) => s.category === cat).length}
              </p>
            </div>
          ))}
        </div>

        {/* Header row */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display text-xl text-[var(--color-primary)]">
            Case Studies <span className="text-[var(--color-muted)] text-base font-sans font-normal">({studies.length} total)</span>
          </h2>
          <button
            onClick={() => { setShowForm(!showForm); cancelEdit(); }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
          >
            <PlusCircle size={16} />
            {showForm ? "Cancel" : "Add New"}
          </button>
        </div>

        {msg && (
          <div className={`mb-4 px-4 py-3 rounded-xl text-sm ${msg.includes("success") ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
            {msg}
          </div>
        )}

        {/* Add form */}
        {showForm && (
          <form onSubmit={handleAdd} className="bg-white rounded-3xl border border-[var(--color-line)] shadow-elev p-6 md:p-8 mb-8 space-y-4">
            <h3 className="font-display text-lg text-[var(--color-primary)]">New Case Study</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <FormField label="Title *" value={form.title} onChange={(v) => setForm({ ...form, title: v, slug: autoSlug(v) })} placeholder="Client Name — Result achieved" />
              <FormField label="Slug (auto)" value={form.slug} onChange={(v) => setForm({ ...form, slug: v })} placeholder="auto-generated-from-title" />
              <div>
                <label className="block text-xs font-semibold tracking-wide text-[var(--color-muted)] uppercase mb-1.5">Category *</label>
                <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-tertiary)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/40">
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <FormField label="Image URL" value={form.image} onChange={(v) => setForm({ ...form, image: v })} placeholder="https://images.unsplash.com/..." />
            </div>
            <FormField label="Subtitle / Short Description" value={form.subtitle} onChange={(v) => setForm({ ...form, subtitle: v })} placeholder="One-line result summary..." />
            <div>
              <label className="block text-xs font-semibold tracking-wide text-[var(--color-muted)] uppercase mb-1.5">Full Content</label>
              <textarea rows={8} value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })}
                placeholder="Write the full case study content here..."
                className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-tertiary)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/40" />
            </div>
            <div className="flex gap-3 pt-2">
              <button type="submit" disabled={saving}
                className="px-6 py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold text-sm hover:bg-[var(--color-primary-light)] disabled:opacity-60 transition-colors">
                {saving ? "Saving..." : "Publish Case Study"}
              </button>
              <button type="button" onClick={() => setShowForm(false)}
                className="px-6 py-3 rounded-full border border-[var(--color-line)] text-sm font-semibold text-[var(--color-primary)] hover:bg-[var(--color-tertiary)] transition-colors">
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* List */}
        {loading ? (
          <p className="text-center text-[var(--color-muted)] py-16">Loading...</p>
        ) : studies.length === 0 ? (
          <div className="bg-white rounded-3xl border border-[var(--color-line)] p-12 text-center">
            <BookOpen size={40} className="mx-auto text-[var(--color-muted)] mb-3" />
            <p className="text-[var(--color-muted)]">No case studies yet. Add your first one above.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {studies.map((s) => (
              <div key={s.slug} className="bg-white rounded-2xl border border-[var(--color-line)] overflow-hidden">
                {editingSlug === s.slug && editForm ? (
                  /* ── EDIT FORM ── */
                  <form onSubmit={handleEdit} className="p-6 space-y-4">
                    <h3 className="font-semibold text-[var(--color-primary)] mb-2">Editing: {s.title}</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <FormField label="Title *" value={editForm.title} onChange={(v) => setEditForm({ ...editForm, title: v })} />
                      <div>
                        <label className="block text-xs font-semibold tracking-wide text-[var(--color-muted)] uppercase mb-1.5">Category</label>
                        <select value={editForm.category} onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                          className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-tertiary)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/40">
                          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                        </select>
                      </div>
                      <FormField label="Image URL" value={editForm.image} onChange={(v) => setEditForm({ ...editForm, image: v })} />
                      <FormField label="Subtitle" value={editForm.subtitle} onChange={(v) => setEditForm({ ...editForm, subtitle: v })} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold tracking-wide text-[var(--color-muted)] uppercase mb-1.5">Full Content</label>
                      <textarea rows={6} value={editForm.content} onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
                        className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-tertiary)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/40" />
                    </div>
                    <div className="flex gap-3">
                      <button type="submit" disabled={saving}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-primary)] text-white text-sm font-semibold disabled:opacity-60">
                        <Check size={15} /> {saving ? "Saving..." : "Save Changes"}
                      </button>
                      <button type="button" onClick={cancelEdit}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--color-line)] text-sm font-semibold text-[var(--color-primary)]">
                        <X size={15} /> Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  /* ── ROW VIEW ── */
                  <div className="p-5 flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded-full bg-[var(--color-secondary)]/15 text-[var(--color-secondary-dark)] text-[10px] font-semibold uppercase tracking-wider">
                          {s.category}
                        </span>
                        {s.createdAt && (
                          <span className="text-[10px] text-[var(--color-muted)]">
                            {new Date(s.createdAt).toLocaleDateString("en-IN")}
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-[var(--color-primary)] truncate">{s.title}</p>
                      <p className="text-xs text-[var(--color-muted)] mt-0.5 truncate">{s.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button onClick={() => startEdit(s)}
                        className="p-2 rounded-xl text-[var(--color-primary)] hover:bg-[var(--color-tertiary)] transition-colors" title="Edit">
                        <Pencil size={15} />
                      </button>
                      <button onClick={() => handleDelete(s.slug)}
                        className="p-2 rounded-xl text-red-500 hover:bg-red-50 transition-colors" title="Delete">
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FormField({ label, value, onChange, placeholder }: {
  label: string; value: string; onChange: (v: string) => void; placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold tracking-wide text-[var(--color-muted)] uppercase mb-1.5">{label}</label>
      <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-tertiary)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/40" />
    </div>
  );
}
