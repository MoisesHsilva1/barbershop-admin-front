import { Plus } from 'lucide-react';

import { Breadcrumbs } from '@/components/molecules/breadcrumbs';
import { PageHeader } from '@/components/molecules/page-header';
import { DeleteServiceDialog } from '@/components/organisms/delete-service-dialog';
import { ServiceFormDialog } from '@/components/organisms/service-form-dialog';
import { ServicesList } from '@/components/organisms/services-list';
import { Button } from '@/components/ui/button';
import { PageLayout } from '@/components/templates/page-layout';
import { useServicesPage } from '@/hooks/use-services-page';

export default function ServicesPage() {
  const {
    services,
    isLoading,
    isError,
    refetch,
    isFormOpen,
    handleFormOpenChange,
    editingService,
    deleteTarget,
    setDeleteTarget,
    openCreateForm,
    openEditForm,
    handleFormSubmit,
    handleDeleteConfirm,
    isFormSubmitting,
    isDeleting,
    deletingServiceId,
  } = useServicesPage();

  return (
    <PageLayout className="gap-6">
      <PageHeader
        title="Serviços"
        belowTitle={
          <Breadcrumbs
            items={[
              { label: 'Gestão' },
              { label: 'Serviços' },
            ]}
          />
        }
        className="border-b-0 pb-0"
        actions={
          <Button
            type="button"
            className="w-full sm:w-auto"
            onClick={openCreateForm}
          >
            <Plus className="h-4 w-4" aria-hidden />
            Criar Serviço
          </Button>
        }
      />

      <ServicesList
        services={services}
        isLoading={isLoading}
        isError={isError}
        deletingServiceId={deletingServiceId}
        onAddService={openCreateForm}
        onEditService={openEditForm}
        onDeleteService={setDeleteTarget}
        onRetry={() => void refetch()}
      />

      <ServiceFormDialog
        open={isFormOpen}
        onOpenChange={handleFormOpenChange}
        service={editingService}
        isSubmitting={isFormSubmitting}
        onSubmit={handleFormSubmit}
      />

      <DeleteServiceDialog
        service={deleteTarget}
        open={Boolean(deleteTarget)}
        onOpenChange={(open) => {
          if (!open) {
            setDeleteTarget(null);
          }
        }}
        isDeleting={isDeleting}
        onConfirm={handleDeleteConfirm}
      />
    </PageLayout>
  );
}
