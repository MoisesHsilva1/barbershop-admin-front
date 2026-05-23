import { useMutation, useQueryClient } from '@tanstack/react-query';

import { servicesQueryKey } from '@/hooks/use-services';
import { deleteService } from '@/services/service-service';

export function useDeleteService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteService(id),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: servicesQueryKey });
    },
  });
}
