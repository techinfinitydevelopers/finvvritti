"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Verify by calling a protected API
    const res = await fetch("/api/admin/case-studies", {
      headers: { "x-admin-token": password },
    });
    if (res.ok) {
      sessionStorage.setItem("admin_token", password);
      router.push("/admin/dashboard");
    } else {
      setError("Incorrect password.");
    }
  }

  return (
    <div className="min-h-screen gradient-primary flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-elev-lg p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="h-14 w-14 rounded-2xl gradient-gold flex items-center justify-center mb-3">
            <Lock size={24} className="text-[var(--color-primary)]" />
          </div>
          <h1 className="font-display text-2xl text-[var(--color-primary)]">Admin Login</h1>
          <p className="text-sm text-[var(--color-muted)] mt-1">Finvvritti Dashboard</p>
        </div>
        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-xl border border-[var(--color-line)] bg-[var(--color-tertiary)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)]/40"
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
