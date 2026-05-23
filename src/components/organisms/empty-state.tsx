import type { ReactNode } from 'react';

import { Scissors } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-2xl border border-dashed border-neutral-200 bg-white px-6 py-12 text-center shadow-sm">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700">
        <Scissors className="h-7 w-7" aria-hidden />
      </div>
      <div className="max-w-sm space-y-2">
        <h3 className="text-2xl font-medium text-neutral-900">{title}</h3>
        <p className="text-sm leading-relaxed text-neutral-500">{description}</p>
      </div>
      {action}
    </div>
  );
}
