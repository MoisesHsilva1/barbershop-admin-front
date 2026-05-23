import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  description?: string;
  belowTitle?: ReactNode;
  meta?: ReactNode;
  actions?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  belowTitle,
  meta,
  actions,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'flex flex-col gap-6 border-b border-neutral-200 pb-8',
        className,
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              {title}
            </h1>
            {meta}
          </div>
          {belowTitle}
          {description ? (
            <p className="max-w-2xl text-sm text-neutral-500">{description}</p>
          ) : null}
        </div>

        {actions ? (
          <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
            {actions}
          </div>
        ) : null}
      </div>
    </header>
  );
}
