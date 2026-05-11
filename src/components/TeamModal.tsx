"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import type { TeamMember } from "@/lib/team";

interface Props {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamModal({ member, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!member) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [member, onClose]);

  if (!member) return null;

  const displayName =
    member.role === "Chartered Accountant"
      ? `CA ${member.name}`
      : member.name;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/*
        Key layout rules:
        - Outer: max-h-[90vh] + overflow-hidden (clips image corners via border-radius)
        - Right column: min-h-0 allows flex children to shrink below content size
        - Bio div: flex-1 + overflow-y-auto + min-h-0 → scrolls within available space
        - Button div: shrink-0 → never compressed, always visible
      */}
      <div
        className="relative bg-[#F5F2EC] rounded-2xl w-full max-w-3xl shadow-2xl
                   flex flex-col md:flex-row overflow-hidden"
        style={{ maxHeight: "90vh" }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-black/15
                     hover:bg-black/25 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X size={16} className="text-[var(--color-primary)]" />
        </button>

        {/* LEFT — Photo */}
        <div className="relative w-full md:w-[40%] shrink-0 h-60 md:h-auto md:self-stretch">
          <Image
            src={member.avatar}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover object-top"
            priority
          />
        </div>

        {/* RIGHT — flex column, min-h-0 is critical */}
        <div className="flex-1 flex flex-col min-h-0">

          {/* Name / role — fixed, never scrolls */}
          <div className="px-7 pt-6 pb-3 shrink-0">
            <h3 className="font-display text-2xl md:text-[1.75rem] text-[var(--color-primary)] leading-tight">
              {displayName}
            </h3>
            <p className="mt-1 text-sm font-semibold text-[var(--color-secondary-dark)]">
              {member.role}
            </p>
          </div>

          {/* Bio — scrolls, no scrollbar visible */}
          <div
            className="flex-1 min-h-0 overflow-y-auto px-7"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="space-y-3 pb-3">
              {member.bio?.map((para, i) => (
                <p key={i} className="text-sm text-[var(--color-ink)]/80 leading-relaxed">
                  {para}
                </p>
              ))}
              {!member.bio && (
                <p className="text-sm text-[var(--color-ink)]/50 italic">Bio coming soon.</p>
              )}
            </div>
          </div>

          {/* LinkedIn button — shrink-0, always visible */}
          <div className="px-7 py-5 shrink-0 border-t border-black/8">
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl
                           bg-[var(--color-primary)] text-white font-semibold text-sm
                           hover:bg-[var(--color-primary-light)] transition-colors"
              >
                <ExternalLink size={15} />
                View LinkedIn Profile
              </a>
            ) : (
              <button
                disabled
                className="w-full py-3 rounded-xl bg-[var(--color-primary)]/15
                           text-[var(--color-primary)]/40 font-semibold text-sm cursor-not-allowed"
              >
                LinkedIn Coming Soon
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
