import { isAxiosError } from 'axios';
import { useState } from 'react';
import { toast } from 'sonner';

import { useCreateService } from '@/hooks/use-create-service';
import { useDeleteService } from '@/hooks/use-delete-service';
import { useServices } from '@/hooks/use-services';
import { useUpdateService } from '@/hooks/use-update-service';
import type { Service, ServiceRequest } from '@/types/interfaces/service';

function getErrorMessage(error: unknown, fallback: string): string {
  if (isAxiosError(error)) {
    const message = error.response?.data;

    if (typeof message === 'string') {
      return message;
    }

    if (
      message &&
      typeof message === 'object' &&
      'message' in message &&
      typeof message.message === 'string'
    ) {
      return message.message;
    }
  }

  return fallback;
}

export function useServicesPage() {
  const { data: services, isLoading, isError, refetch } = useServices();
  const createService = useCreateService();
  const updateService = useUpdateService();
  const deleteService = useDeleteService();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Service | null>(null);

  const openCreateForm = () => {
    setEditingService(null);
    setIsFormOpen(true);
  };

  const openEditForm = (service: Service) => {
    setEditingService(service);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingService(null);
  };

  const handleFormOpenChange = (open: boolean) => {
    setIsFormOpen(open);

    if (!open) {
      setEditingService(null);
    }
  };

  const handleFormSubmit = (payload: ServiceRequest) => {
    if (editingService) {
      updateService.mutate(
        { id: editingService.id, payload },
        {
          onSuccess: () => {
            toast.success('Service updated successfully');
            closeForm();
          },
          onError: (error) => {
            toast.error(getErrorMessage(error, 'Failed to update service'));
          },
        },
      );
      return;
    }

    createService.mutate(payload, {
      onSuccess: () => {
        toast.success('Service created successfully');
        closeForm();
      },
      onError: (error) => {
        toast.error(getErrorMessage(error, 'Failed to create service'));
      },
    });
  };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) {
      return;
    }

    const serviceId = deleteTarget.id;

    deleteService.mutate(serviceId, {
      onSuccess: () => {
        toast.success('Service deleted successfully');
        setDeleteTarget(null);
      },
      onError: (error) => {
        toast.error(getErrorMessage(error, 'Failed to delete service'));
      },
    });
  };

  return {
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
    closeForm,
    handleFormSubmit,
    handleDeleteConfirm,
    isFormSubmitting: createService.isPending || updateService.isPending,
    isDeleting: deleteService.isPending,
    deletingServiceId: deleteService.isPending && deleteTarget ? deleteTarget.id : null,
  };
}
