import type { ServiceFormValues } from '@/schema/forms/service-form-schema';
import type { ServiceRequest } from '@/types/interfaces/service';

export function toServiceRequest(values: ServiceFormValues): ServiceRequest {
  const description = values.description?.trim();

  return {
    name: values.name.trim(),
    price: values.price,
    ...(description ? { description } : {}),
  };
}
