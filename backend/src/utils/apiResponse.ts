export function success<T>(
  data: T,
  message = "Success"
) {
  return {
    success: true,
    message,
    data,
  };
}