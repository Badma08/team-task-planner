"use client";

import { usePathname } from "next/navigation";
import { getNavigationTitle } from "@/lib/navigation";

export function Header() {
  const pathname = usePathname();
  const title = getNavigationTitle(pathname);

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6 lg:px-8">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Текущий раздел</p>
          <p className="text-lg font-bold text-slate-950">{title}</p>
        </div>
        <div className="hidden rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600 md:block">
          Каркас MVP без базы данных и авторизации
        </div>
      </div>
    </header>
  );
}
