import { fetchApi } from "./api";

export interface CartItemResponse {
  id: string; // The cart item ID
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface CartResponse {
  id: string;
  userId: string;
  items: CartItemResponse[];
  totalPrice: number;
}

export async function fetchCart(token: string): Promise<CartResponse> {
  return fetchApi("/api/v1/cart", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function addToCart(
  token: string,
  productId: string,
  quantity: number = 1
): Promise<CartResponse> {
  return fetchApi("/api/v1/cart", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId, quantity }),
  });
}

export async function updateCartItemQuantity(
  token: string,
  productId: string,
  quantity: number
): Promise<CartResponse> {
  return fetchApi("/api/v1/cart", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId, quantity }),
  });
}

export async function removeCartItem(
  token: string,
  productId: string
): Promise<CartResponse> {
  return fetchApi(`/api/v1/cart/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function clearCart(token: string): Promise<void> {
  return fetchApi("/api/v1/cart", {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}
