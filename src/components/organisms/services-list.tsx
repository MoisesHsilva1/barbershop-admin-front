import { Search } from 'lucide-react';

import { ServicesTableToolbar } from '@/components/molecules/services-table-toolbar';
import { ServicesTable } from '@/components/organisms/services-table';
import { EmptyState } from '@/components/organisms/empty-state';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useServicesTable } from '@/hooks/use-services-table';
import type { Service } from '@/types/interfaces/service';

interface ServicesListProps {
  services: Service[] | undefined;
  isLoading: boolean;
  isError: boolean;
  deletingServiceId: string | null;
  onAddService: () => void;
  onEditService: (service: Service) => void;
  onDeleteService: (service: Service) => void;
  onRetry: () => void;
}

function ServicesListSkeleton() {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
      aria-busy="true"
      aria-label="Loading services"
    >
      <div className="border-b border-neutral-200 px-6 py-4">
        <Skeleton className="h-5 w-32" />
      </div>
      <div className="space-y-0 p-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-14 w-full rounded-none border-b border-neutral-100 last:border-b-0"
          />
        ))}
      </div>
    </div>
  );
}

function ServicesSearchEmptyState({ onClearSearch }: { onClearSearch: () => void }) {
  return (
    <div className="flex flex-col items-center gap-4 px-6 py-12 text-center">
      <Search className="h-8 w-8 text-neutral-300" aria-hidden />
      <div className="max-w-sm space-y-2">
        <h3 className="text-lg font-medium text-neutral-900">No matching services</h3>
        <p className="text-sm text-neutral-500">
          Try a different search term or clear the filter to see all services.
        </p>
      </div>
      <Button type="button" variant="outline" onClick={onClearSearch}>
        Clear search
      </Button>
    </div>
  );
}

export function ServicesList({
  services,
  isLoading,
  isError,
  deletingServiceId,
  onAddService,
  onEditService,
  onDeleteService,
  onRetry,
}: ServicesListProps) {
  const {
    search,
    setSearch,
    sortField,
    sortDirection,
    toggleSort,
    page,
    setPage,
    pageSize,
    setPageSize,
    paginatedServices,
    totalResults,
    totalPages,
    showingFrom,
    showingTo,
  } = useServicesTable(services);

  if (isLoading) {
    return <ServicesListSkeleton />;
  }

  if (isError) {
    return (
      <div
        role="alert"
        className="flex flex-col items-center gap-4 rounded-2xl border border-destructive/20 bg-white p-8 text-center shadow-sm"
      >
        <p className="text-sm font-medium text-destructive">
          Unable to load services
        </p>
        <p className="max-w-sm text-sm text-neutral-500">
          Check your connection and try again.
        </p>
        <Button type="button" variant="outline" onClick={onRetry}>
          Try again
        </Button>
      </div>
    );
  }

  if (!services?.length) {
    return (
      <EmptyState
        title="No services yet"
        description="Create your first service to start building your catalog."
        action={
          <Button type="button" onClick={onAddService}>
            Create service
          </Button>
        }
      />
    );
  }

  const startIndex = (page - 1) * pageSize;

  if (totalResults === 0) {
    return (
      <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <ServicesTableToolbar
          search={search}
          onSearchChange={setSearch}
          sortField={sortField}
          sortDirection={sortDirection}
          onSortToggle={toggleSort}
        />
        <ServicesSearchEmptyState onClearSearch={() => setSearch('')} />
      </div>
    );
  }

  return (
    <ServicesTable
      services={paginatedServices}
      startIndex={startIndex}
      search={search}
      onSearchChange={setSearch}
      sortField={sortField}
      sortDirection={sortDirection}
      onSortToggle={toggleSort}
      page={page}
      pageSize={pageSize}
      totalPages={totalPages}
      totalResults={totalResults}
      showingFrom={showingFrom}
      showingTo={showingTo}
      onPageChange={setPage}
      onPageSizeChange={setPageSize}
      deletingServiceId={deletingServiceId}
      onEditService={onEditService}
      onDeleteService={onDeleteService}
    />
  );
}
