"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { navLinks } from "@/mocks/NavMock";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
        className="grid size-10 cursor-pointer place-items-center rounded-lg">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full z-50 border-b border-line bg-cream px-6 py-6 shadow-lg">
          <ul className="flex flex-col gap-4 text-base font-medium text-ink">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <button className="cursor-pointer rounded-lg border border-line bg-white px-5 py-3 text-sm font-medium">Log in</button>
            <button className="cursor-pointer rounded-lg bg-brand px-5 py-3 text-sm font-bold text-white">Start learning</button>
          </div>
        </nav>
      )}
    </div>
  );
}
