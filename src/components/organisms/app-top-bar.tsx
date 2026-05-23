import { Bell, Menu, Scissors } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { ROUTE_PATHS } from '@/routes/paths';

interface AppTopBarProps {
  onOpenMobileNav?: () => void;
}

export function AppTopBar({ onOpenMobileNav }: AppTopBarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3 lg:hidden">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Open navigation"
            onClick={onOpenMobileNav}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <NavLink
            to={ROUTE_PATHS.services}
            className="flex min-w-0 items-center gap-2"
          >
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary-500 text-neutral-900"
              aria-hidden
            >
              <Scissors className="h-4 w-4" />
            </div>
            <span className="truncate text-sm font-semibold text-neutral-900">
              Nasck Hair  
            </span>
          </NavLink>
        </div>

        <div className="hidden flex-1 lg:block" />

        <div className="flex items-center gap-3 sm:gap-4">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Notifications"
            className="text-neutral-600"
          >
            <Bell className="h-5 w-5" />
          </Button>

          <div className="flex items-center gap-3 border-l border-neutral-200 pl-3 sm:pl-4">
            <div
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-semibold text-primary-800"
              aria-hidden
            >
              RJ
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-medium text-neutral-900">
                Robert Johnson
              </p>
              <p className="truncate text-xs text-neutral-500">Super admin</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
