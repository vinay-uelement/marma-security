import { fetchApi } from "@/lib/api";
import ClientProductPage from "./ClientProductPage";

export const dynamic = 'force-dynamic';

export default async function Page({ params, searchParams }: { params: Promise<{ id: string }>, searchParams: Promise<{ data?: string }> }) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;
  const { id } = resolvedParams;
  
  let product: any = null;
  let products: any[] = [];

  // If we have product data in the query parameter, we don't need to fetch
  if (resolvedSearchParams?.data) {
    try {
      const decoded = Buffer.from(decodeURIComponent(resolvedSearchParams.data), 'base64').toString('utf-8');
      product = JSON.parse(decoded);
    } catch (e) {
      console.error("Failed to parse product data from URL", e);
    }
  }

  // If no product data was passed (e.g. direct link navigation), or if we still want all products for recommendations,
  // we can fetch. But if we want to optimize, we can skip fetching if product is already there and we don't strictly need allProducts.
  // We'll still fetch allProducts if we need them for recommendations, but the user explicitly asked NOT to fetch products again.
  // So we skip it if product exists.
  if (!product) {
    try {
      const response = await fetchApi('/api/v1/products/active', {
        cache: 'no-store'
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

    // Find the specific product
    product = products.find((p: any) => p.id === id || (p.name || p.title || "").toLowerCase().replace(/ /g, '-') === id.toLowerCase());
  }

  return <ClientProductPage product={product} allProducts={products} productId={id} />;
}
