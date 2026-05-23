import { ServicesTablePagination } from '@/components/molecules/services-table-pagination';
import { ServicesTableToolbar } from '@/components/molecules/services-table-toolbar';
import { ServiceRowActions } from '@/components/molecules/service-row-actions';
import type {
  ServiceSortDirection,
  ServiceSortField,
} from '@/hooks/use-services-table';
import { cn } from '@/lib/utils';
import type { Service } from '@/types/interfaces/service';
import { formatPrice } from '@/utils/format-price';

interface ServicesTableProps {
  services: Service[];
  startIndex: number;
  search: string;
  onSearchChange: (value: string) => void;
  sortField: ServiceSortField;
  sortDirection: ServiceSortDirection;
  onSortToggle: (field: ServiceSortField) => void;
  page: number;
  pageSize: number;
  totalPages: number;
  totalResults: number;
  showingFrom: number;
  showingTo: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (pageSize: number) => void;
  deletingServiceId: string | null;
  onEditService: (service: Service) => void;
  onDeleteService: (service: Service) => void;
  className?: string;
}

function truncateDescription(description: string | undefined, maxLength = 80) {
  if (!description) {
    return '—';
  }

  if (description.length <= maxLength) {
    return description;
  }

  return `${description.slice(0, maxLength).trimEnd()}…`;
}

export function ServicesTable({
  services,
  startIndex,
  search,
  onSearchChange,
  sortField,
  sortDirection,
  onSortToggle,
  page,
  pageSize,
  totalPages,
  totalResults,
  showingFrom,
  showingTo,
  onPageChange,
  onPageSizeChange,
  deletingServiceId,
  onEditService,
  onDeleteService,
  className,
}: ServicesTableProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm',
        className,
      )}
    >
      <ServicesTableToolbar
        search={search}
        onSearchChange={onSearchChange}
        sortField={sortField}
        sortDirection={sortDirection}
        onSortToggle={onSortToggle}
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-200 bg-neutral-50">
              <th
                scope="col"
                className="w-16 px-4 py-3 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:px-6"
              >
                Nº
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:px-6"
              >
                Nome do serviço
              </th>
              <th
                scope="col"
                className="hidden px-4 py-3 text-xs font-medium uppercase tracking-wide text-neutral-500 md:table-cell md:px-6"
              >
                Descrição
              </th>
              <th
                scope="col"
                className="px-4 py-3 text-xs font-medium uppercase tracking-wide text-neutral-500 sm:px-6"
              >
                Preço
              </th>
              <th
                scope="col"
                className="w-16 px-4 py-3 text-right text-xs font-medium uppercase tracking-wide text-neutral-500 sm:px-6"
              >
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {services.map((service, index) => (
              <tr
                key={service.id}
                className="border-b border-neutral-100 transition-colors duration-200 last:border-b-0 hover:bg-neutral-50/80"
              >
                <td className="px-4 py-4 tabular-nums text-neutral-500 sm:px-6">
                  {startIndex + index + 1}
                </td>
                <td className="px-4 py-4 font-medium text-neutral-900 sm:px-6">
                  {service.name}
                </td>
                <td className="hidden max-w-xs px-4 py-4 text-neutral-600 md:table-cell md:px-6">
                  <span className="line-clamp-2 leading-relaxed">
                    {truncateDescription(service.description)}
                  </span>
                </td>
                <td className="px-4 py-4 font-medium tabular-nums text-neutral-800 sm:px-6">
                  {formatPrice(service.price)}
                </td>
                <td className="px-4 py-4 sm:px-6">
                  <ServiceRowActions
                    serviceName={service.name}
                    isDeleting={deletingServiceId === service.id}
                    onEdit={() => onEditService(service)}
                    onDelete={() => onDeleteService(service)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ServicesTablePagination
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
        totalResults={totalResults}
        showingFrom={showingFrom}
        showingTo={showingTo}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
}
