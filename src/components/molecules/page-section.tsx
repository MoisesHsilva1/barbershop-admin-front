import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface PageSectionProps {
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function PageSection({
  title,
  description,
  children,
  className,
}: PageSectionProps) {
  return (
    <section className={cn('flex flex-col gap-6', className)}>
      {title || description ? (
        <div className="space-y-1">
          {title ? <h2 className="text-2xl font-medium">{title}</h2> : null}
          {description ? (
            <p className="text-sm text-neutral-500">{description}</p>
          ) : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}
