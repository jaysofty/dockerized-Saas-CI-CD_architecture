export interface HealthData {
  status: string;
  application: string;
  version: string;
  uptime: number;
  timestamp: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
  count?: number;
}