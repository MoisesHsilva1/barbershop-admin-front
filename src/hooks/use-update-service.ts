import { useMutation, useQueryClient } from '@tanstack/react-query';

import { servicesQueryKey } from '@/hooks/use-services';
import { updateService } from '@/services/service-service';
import type { ServiceRequest } from '@/types/interfaces/service';

interface UpdateServiceVariables {
  id: string;
  payload: ServiceRequest;
}

export function useUpdateService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: UpdateServiceVariables) =>
      updateService(id, payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: servicesQueryKey });
    },
  });
}
