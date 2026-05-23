import { Headphones, LogOut, Scissors, Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { Input } from '@/components/ui/input';
import { APP_NAV_SECTIONS } from '@/constants/options/app-nav-options';
import { cn } from '@/lib/utils';

interface AppSidebarProps {
  className?: string;
}

export function AppSidebar({ className }: AppSidebarProps) {
  return (
    <aside
      className={cn(
        'flex w-64 shrink-0 flex-col border-r border-neutral-800 bg-neutral-900',
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-neutral-800 px-5 py-5">
        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-neutral-900"
          aria-hidden
        >
          <Scissors className="h-5 w-5" />
        </div>
        <span className="text-lg font-semibold text-neutral-50">Nasck Hair</span>
      </div>

      <div className="px-4 py-4">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500"
            aria-hidden
          />
          <Input
            type="search"
            placeholder="Buscar"
            aria-label="Buscar na navegação"
            className="h-9 border-neutral-700 bg-neutral-800 pl-9 text-neutral-100 placeholder:text-neutral-500 focus-visible:ring-primary-400"
          />
        </div>
      </div>

      <nav className="flex-1 space-y-6 overflow-y-auto px-3 pb-4" aria-label="Main">
        {APP_NAV_SECTIONS.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-3 text-xs font-medium uppercase tracking-wide text-neutral-500">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isAvailable = Boolean(item.to);

                if (!isAvailable) {
                  return (
                    <li key={item.label}>
                      <span
                        className="flex cursor-not-allowed items-center gap-3 rounded-xl px-3 py-2 text-sm text-neutral-500"
                        aria-disabled="true"
                      >
                        <Icon className="h-4 w-4 shrink-0" aria-hidden />
                        {item.label}
                      </span>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <NavLink
                      to={item.to!}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors duration-200',
                          isActive
                            ? 'bg-primary-500 text-neutral-900'
                            : 'text-neutral-300 hover:bg-neutral-800 hover:text-neutral-50',
                        )
                      }
                    >
                      <Icon className="h-4 w-4 shrink-0" aria-hidden />
                      {item.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="space-y-0.5 border-t border-neutral-800 px-3 py-4">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-destructive transition-colors duration-200 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900"
        >
          <LogOut className="h-4 w-4 shrink-0" aria-hidden />
          Logout
        </button>
      </div>
    </aside>
  );
}
