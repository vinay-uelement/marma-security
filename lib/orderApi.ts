import { fetchApi } from "./api";

const ORDERS_BASE = "/api/v1/orders";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
}

export interface ShippingAddress {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
}

export interface CreateOrderPayload {
  customerInfo: CustomerInfo;
  shippingAddress: ShippingAddress;
}

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Order {
  id: string;
  totalAmount: number;
  status: string;
  items: OrderItem[];
  customerInfo: CustomerInfo;
  shippingAddress: ShippingAddress;
  stripeSessionId: string;
}

export interface PaymentInfo {
  sessionId: string;
  url: string;
}

export interface CreateOrderResponse {
  order: Order;
  payment: PaymentInfo;
}

export interface VerifyPaymentPayload {
  sessionId: string;
}

export interface VerifyPaymentResponse {
  order: Order;
  message: string;
}

export interface OrderApiError {
  message: string;
  statusCode: number;
  errors?: Record<string, string[]>;
}

// ─── Helper ──────────────────────────────────────────────────────────────────

async function handleResponse<T>(response: Response): Promise<T> {
  const data = await response.json();
  if (!response.ok) {
    const error: OrderApiError = {
      message: data.message || data.error || "Something went wrong",
      statusCode: response.status,
      errors: data.errors,
    };
    throw error;
  }
  return data as T;
}

function authHeaders(token: string): HeadersInit {
  return {
    Authorization: `Bearer ${token}`,
  };
}

// ─── API Functions ───────────────────────────────────────────────────────────

/**
 * Create a new order with PENDING status and get a Stripe checkout session.
 * The server reads cart items from the server-side cart associated with the user's token.
 */
export async function createOrder(
  token: string,
  payload: CreateOrderPayload
): Promise<CreateOrderResponse> {
  const response = await fetchApi(ORDERS_BASE, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
  return handleResponse<CreateOrderResponse>(response);
}

/**
 * Verify a Stripe payment session after the user is redirected back.
 * On success, the server confirms the order and clears the server-side cart.
 */
export async function verifyPayment(
  token: string,
  payload: VerifyPaymentPayload
): Promise<VerifyPaymentResponse> {
  const response = await fetchApi(`${ORDERS_BASE}/verify-payment`, {
    method: "POST",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
  return handleResponse<VerifyPaymentResponse>(response);
}
