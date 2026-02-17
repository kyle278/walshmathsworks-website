"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data/site-config";

const links = [
  { href: "/", label: "Home" },
  { href: "/itinerary", label: "Itinerary" },
  { href: "/book/group-a", label: "Group A - Deep Dive" },
  { href: "/book/group-b", label: "Group B - Targeted Revision" },
  { href: "/contact", label: "Contact" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-50 transform transition-transform duration-300 lg:hidden shadow-2xl",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <span className="font-bold text-navy text-lg">Menu</span>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                "block px-4 py-3 rounded-lg text-base font-medium transition-colors",
                pathname === link.href
                  ? "bg-green-light text-green"
                  : "text-slate-700 hover:bg-slate-100"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
          <Link
            href="/book/group-a"
            onClick={onClose}
            className="block w-full text-center px-5 py-3 bg-green text-white font-semibold rounded-xl hover:bg-green-dark transition-all"
          >
            Book Now
          </Link>
          <div className="mt-3 text-center text-sm text-slate-400">
            <a href={siteConfig.tutor.phoneHref} className="hover:text-green">
              {siteConfig.tutor.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
