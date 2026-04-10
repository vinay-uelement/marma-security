type FetchOptions = RequestInit & {
  // You can add custom options here later if needed
};

/**
 * A wrapper around the native fetch API to automatically prepend the base API URL
 * and append common required headers (e.g., x-tenant-slug).
 * 
 * @param endpoint The API endpoint (e.g., `/api/v1/products/active`) or full URL
 * @param options Native fetch options (headers, method, cache, etc.)
 * @returns Promise<Response>
 */
export async function fetchApi(endpoint: string, options: FetchOptions = {}) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || '';
  const tenantSlug = process.env.NEXT_PUBLIC_TENANT_SLUG || '';

  // If the endpoint is already a full URL, use it. Otherwise, construct it from the base.
  const isFullUrl = endpoint.startsWith('http://') || endpoint.startsWith('https://');
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  const url = isFullUrl ? endpoint : `${apiUrl}${normalizedEndpoint}`;

  // Initialize Headers object with any provided headers
  const headers = new Headers(options.headers || {});
  
  // Auto-inject tenant slug if not explicitly passed
  if (!headers.has('x-tenant-slug') && tenantSlug) {
    headers.set('x-tenant-slug', tenantSlug);
  }
  
  // Auto-inject JSON Content-Type if not explicitly provided
  if (!headers.has('Content-Type')) {
    headers.set('Content-Type', 'application/json');
  }

  const mergedOptions: RequestInit = {
    ...options,
    headers,
  };

  const response = await fetch(url, mergedOptions);
  
  // Additional central logging or error throwing logic can be added here
  
  return response;
}
