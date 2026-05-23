import { useMutation, useQueryClient } from '@tanstack/react-query';

import { servicesQueryKey } from '@/hooks/use-services';
import { createService } from '@/services/service-service';
import type { ServiceRequest } from '@/types/interfaces/service';

export function useCreateService() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (payload: ServiceRequest) => createService(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: servicesQueryKey });
    },
  });
}
