export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface ApiListResponse<T> {
  success: boolean;
  limit: number;
  offset: number;
  total: number;
  rows: T[];
}
