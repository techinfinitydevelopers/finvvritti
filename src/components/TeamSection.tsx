"use client";
import { useState } from "react";
import Image from "next/image";
import { team, type TeamMember } from "@/lib/team";
import TeamModal from "./TeamModal";

export default function TeamSection() {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  return (
    <>
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {team.map((m) => (
          <div
            key={m.slug}
            onClick={() => setSelected(m)}
            className="group rounded-2xl bg-white border border-[var(--color-line)] overflow-hidden hover:shadow-elev-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          >
            {/* Portrait photo — no padding so image fills edge-to-edge */}
            <div className="relative w-full aspect-[3/4] overflow-hidden">
              <Image
                src={m.avatar}
                alt={m.name}
                fill
                sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 220px"
                className="object-cover object-[center_12%] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text block */}
            <div className="px-4 py-4">
              <h4 className="font-semibold text-[var(--color-primary)] leading-snug">
                {m.name}
              </h4>
              <p className="mt-0.5 text-xs text-[var(--color-muted)]">{m.role}</p>
              <span className="mt-3 inline-block text-xs font-semibold text-[var(--color-secondary-dark)] group-hover:underline">
                read more →
              </span>
            </div>
          </div>
        ))}
      </div>

      <TeamModal member={selected} onClose={() => setSelected(null)} />
    </>
  );
}
