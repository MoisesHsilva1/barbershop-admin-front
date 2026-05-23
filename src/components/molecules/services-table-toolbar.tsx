import { ArrowDownUp, Search } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type {
  ServiceSortDirection,
  ServiceSortField,
} from '@/hooks/use-services-table';
import { cn } from '@/lib/utils';

interface ServicesTableToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  sortField: ServiceSortField;
  sortDirection: ServiceSortDirection;
  onSortToggle: (field: ServiceSortField) => void;
  className?: string;
}

const SORT_LABELS: Record<ServiceSortField, string> = {
  name: 'Nome',
  price: 'Preço',
};

export function ServicesTableToolbar({
  search,
  onSearchChange,
  sortField,
  sortDirection,
  onSortToggle,
  className,
}: ServicesTableToolbarProps) {
  const nextSortField: ServiceSortField = sortField === 'name' ? 'price' : 'name';

  return (
    <div
      className={cn(
        'flex flex-col gap-4 border-b border-neutral-200 px-4 py-4 sm:px-6',
        className,
      )}
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-base font-semibold text-neutral-900">Lista de serviços</h2>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <div className="relative w-full sm:w-56 lg:w-64">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400"
              aria-hidden
            />
            <Input
              type="search"
              value={search}
              onChange={(event) => onSearchChange(event.target.value)}
              placeholder="Buscar"
              aria-label="Buscar serviços"
              className="h-9 bg-neutral-50 pl-9"
            />
          </div>

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="h-9 shrink-0"
            onClick={() => onSortToggle(nextSortField)}
            aria-label={`Ordenar por ${SORT_LABELS[nextSortField]}, ${sortDirection === 'asc' ? 'crescente' : 'decrescente'}`}
          >
            <ArrowDownUp className="h-4 w-4" aria-hidden />
            Ordenar por {SORT_LABELS[sortField]}
          </Button>
        </div>
      </div>
    </div>
  );
}
