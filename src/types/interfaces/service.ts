export interface ServiceRequest {
  name: string;
  description?: string;
  price: number;
}

export interface Service {
  id: string;
  name: string;
  description?: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}
