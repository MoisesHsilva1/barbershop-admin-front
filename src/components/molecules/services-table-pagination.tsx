import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getTablePageSizeOptions } from '@/constants/options/table-page-size-options';
import { cn } from '@/lib/utils';

interface ServicesTablePaginationProps {
  page: number;
  pageSize: number;
  totalPages: number;
  totalResults: number;
  showingFrom: number;
  showingTo: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  className?: string;
}

function getVisiblePages(current: number, total: number): number[] {
  if (total <= 5) {
    return Array.from({ length: total }, (_, index) => index + 1);
  }

  const start = Math.max(1, Math.min(current - 2, total - 4));
  return Array.from({ length: 5 }, (_, index) => start + index);
}

export function ServicesTablePagination({
  page,
  pageSize,
  totalPages,
  totalResults,
  showingFrom,
  showingTo,
  onPageChange,
  onPageSizeChange,
  className,
}: ServicesTablePaginationProps) {
  const visiblePages = getVisiblePages(page, totalPages);

  return (
    <div
      className={cn(
        'flex flex-col gap-4 border-t border-neutral-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6',
        className,
      )}
    >
      <p className="text-sm text-neutral-500">
        {totalResults === 0
          ? 'Nenhum resultado'
          : `Exibindo ${showingFrom} a ${showingTo} de ${totalResults} resultados`}
      </p>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
        <label className="flex items-center gap-2 text-sm text-neutral-600">
          <span>Por página</span>
          <select
            value={pageSize}
            onChange={(event) => onPageSizeChange(Number(event.target.value))}
            className="h-9 rounded-xl border border-neutral-200 bg-white px-3 text-sm text-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Linhas por página"
          >
            {getTablePageSizeOptions().map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <nav aria-label="Paginação da tabela" className="flex items-center gap-1">
          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-9 w-9"
            aria-label="Página anterior"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {visiblePages.map((pageNumber) => (
            <Button
              key={pageNumber}
              type="button"
              variant={pageNumber === page ? 'default' : 'outline'}
              size="icon"
              className="h-9 w-9"
              aria-label={`Página ${pageNumber}`}
              aria-current={pageNumber === page ? 'page' : undefined}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </Button>
          ))}

          <Button
            type="button"
            variant="outline"
            size="icon"
            className="h-9 w-9"
            aria-label="Próxima página"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </nav>
      </div>
    </div>
  );
}
