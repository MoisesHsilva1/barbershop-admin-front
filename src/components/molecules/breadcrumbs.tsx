import { cn } from '@/lib/utils';

export interface BreadcrumbItem {
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={cn(className)}>
      <ol className="flex flex-wrap items-center gap-2 text-sm text-neutral-500">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {index > 0 ? (
                <span className="text-neutral-400" aria-hidden>
                  /
                </span>
              ) : null}
              <span
                className={cn(
                  isLast ? 'font-medium text-neutral-600' : 'text-neutral-500',
                )}
                aria-current={isLast ? 'page' : undefined}
              >
                {item.label}
              </span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
