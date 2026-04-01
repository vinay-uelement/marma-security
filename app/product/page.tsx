import ClientPage from './ClientPage';
import { fetchApi } from '@/lib/api';

export const dynamic = 'force-dynamic';

export default async function Page() {
  let products: any[] = [];
  try {
    // Example: Fetching all active products via SSR
    // fetchApi automatically adds the NEXT_PUBLIC_API_URL and x-tenant-slug header
    const response = await fetchApi('/api/v1/products/active', {
      cache: 'no-store' // ensures data is fetched dynamically on the server
    });

    if (response.ok) {
      const data = await response.json();
      products = Array.isArray(data) ? data : (data?.data || []);
    } else {
      console.error('Failed to fetch products. Status:', response.status);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }

  return <ClientPage products={products} />;
}
