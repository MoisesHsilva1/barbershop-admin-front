import { useQuery } from '@tanstack/react-query';

import { fetchServices } from '@/services/service-service';

export const servicesQueryKey = ['services'] as const;

export function useServices() {
  return useQuery({
    queryKey: servicesQueryKey,
    queryFn: fetchServices,
  });
}
