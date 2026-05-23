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
      aria-label="Carregando serviços"
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
        <h3 className="text-lg font-medium text-neutral-900">Nenhum serviço encontrado</h3>
        <p className="text-sm text-neutral-500">
          Tente outro termo de busca ou limpe o filtro para ver todos os serviços.
        </p>
      </div>
      <Button type="button" variant="outline" onClick={onClearSearch}>
        Limpar busca
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
          Não foi possível carregar os serviços
        </p>
        <p className="max-w-sm text-sm text-neutral-500">
          Verifique sua conexão e tente novamente.
        </p>
        <Button type="button" variant="outline" onClick={onRetry}>
          Tentar novamente
        </Button>
      </div>
    );
  }

  if (!services?.length) {
    return (
      <EmptyState
        title="Nenhum serviço cadastrado"
        description="Crie seu primeiro serviço para começar a montar o catálogo."
        action={
          <Button type="button" onClick={onAddService}>
            Criar serviço
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
