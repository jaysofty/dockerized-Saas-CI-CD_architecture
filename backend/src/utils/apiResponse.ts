interface ApiSuccessResponse<T> {
  success: true;
  message: string;
  data: T;
  count?: number;
}

interface ApiErrorResponse {
  success: false;
  message: string;
  errors?: unknown;
}

export function successResponse<T>(
  message: string,
  data: T,
  count?: number
): ApiSuccessResponse<T> {
  return {
    success: true,
    message,
    data,
    ...(count !== undefined && { count }),
  };
}

export function errorResponse(
  message: string,
  errors?: unknown
): ApiErrorResponse {
  return {
    success: false,
    message,
    errors,
  };
}