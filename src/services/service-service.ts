import { api } from '@/api/api';
import type { ApiListResponse, ApiResponse } from '@/types/interfaces/api-response';
import type { Service, ServiceRequest } from '@/types/interfaces/service';

export async function fetchServices(): Promise<Service[]> {
  const response = await api.get<ApiListResponse<Service>>('/services');

  return response.data.rows;
}

export async function createService(payload: ServiceRequest): Promise<Service> {
  const response = await api.post<Service>(
    '/services',
    payload,
  );

  return response.data.data;
}

export async function updateService(
  id: string,
  payload: ServiceRequest,
): Promise<Service> {
  const response = await api.put<ApiResponse<Service>>(
    `/services/${id}`,
    payload,
  );

  return response.data.data;
}

export async function deleteService(id: string): Promise<void> {
  return await api.delete(`/services/${id}`);
}
