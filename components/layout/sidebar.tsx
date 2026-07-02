"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/lib/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-slate-200 bg-white px-4 py-6 lg:block">
      <div className="mb-8 rounded-2xl bg-slate-950 px-4 py-5 text-white">
        <p className="text-sm font-medium text-slate-300">MVP workspace</p>
        <p className="mt-1 text-xl font-bold">Team Task Planner</p>
      </div>
      <nav className="space-y-1" aria-label="Основная навигация">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-blue-50 text-blue-700 ring-1 ring-blue-100"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-950"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
