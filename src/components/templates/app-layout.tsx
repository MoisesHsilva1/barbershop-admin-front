import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppSidebar } from '@/components/organisms/app-sidebar';
import { AppTopBar } from '@/components/organisms/app-top-bar';
import { cn } from '@/lib/utils';

export function AppLayout() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="flex min-h-svh bg-neutral-50">
      <AppSidebar className="hidden lg:flex" />

      {isMobileNavOpen ? (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          aria-label="Close navigation"
          onClick={() => setIsMobileNavOpen(false)}
        />
      ) : null}

      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 lg:hidden',
          isMobileNavOpen ? 'translate-x-0' : '-translate-x-full',
        )}
        aria-hidden={!isMobileNavOpen}
      >
        <AppSidebar className="h-full shadow-md" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <AppTopBar onOpenMobileNav={() => setIsMobileNavOpen(true)} />
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
