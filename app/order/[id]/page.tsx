"use client";

import React, { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";
import { useAuth } from "@/context/AuthContext";
import {
  createOrder,
  type CreateOrderResponse,
  type OrderApiError,
} from "@/lib/orderApi";

type Step = "review" | "shipping";

export default function OrderReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const orderId = resolvedParams.id;
  const { items, totalPrice, clearCart } = useCart();
  const { formatPrice } = useCurrency();
  const { user } = useAuth();

  const taxRate = 0.08;
  const taxAmount = totalPrice * taxRate;
  const finalTotal = totalPrice + taxAmount;

  // ─── Multi-step state ────────────────────────────────────────────────
  const [step, setStep] = useState<Step>("review");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [orderResponse, setOrderResponse] = useState<CreateOrderResponse | null>(null);

  // ─── Shipping form state ─────────────────────────────────────────────
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState(user?.address?.city || "");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("India");
  const [postalCode, setPostalCode] = useState("");
  const [isRedirecting, setIsRedirecting] = useState(false);

  // ─── Place Order → call create order API ─────────────────────────────
  const handlePlaceOrder = async () => {
    if (isPlacingOrder) return;
    setErrorMessage("");
    setIsPlacingOrder(true);

    try {
      const token = localStorage.getItem("marma_access_token");
      if (!token) {
        setErrorMessage("You must be logged in to place an order.");
        setIsPlacingOrder(false);
        return;
      }

      const customerInfo = {
        name: user ? `${user.first_name || ""} ${user.last_name || ""}`.trim() || user.email : "",
        email: user?.email || "",
        phone: user?.phone || "",
      };

      const response = await createOrder(token, {
        customerInfo,
        shippingAddress: {
          addressLine1: "",
          city: "",
          state: "",
          country: "India",
          postalCode: "",
        },
      });

      setOrderResponse(response);
      setStep("shipping");
    } catch (err: unknown) {
      if (err instanceof TypeError && err.message === "Failed to fetch") {
        setErrorMessage(
          "Unable to connect to the order service. The backend may not be running or the route is not configured. Please check your backend server."
        );
      } else {
        const apiError = err as OrderApiError;
        setErrorMessage(apiError?.message || "Failed to create order. Please try again.");
      }
    } finally {
      setIsPlacingOrder(false);
    }
  };

  // ─── Submit shipping → redirect to Stripe ────────────────────────────
  const isShippingValid =
    addressLine1.trim() !== "" &&
    city.trim() !== "" &&
    state.trim() !== "" &&
    country.trim() !== "" &&
    postalCode.trim() !== "";

  const handleShippingSubmit = () => {
    if (!isShippingValid || !orderResponse) return;
    setIsRedirecting(true);

    if (orderResponse.payment?.url) {
      window.location.href = orderResponse.payment.url;
    } else {
      setErrorMessage("Payment session not available. Please try again.");
      setIsRedirecting(false);
    }
  };

  // ─── STEP 2: Shipping Address ────────────────────────────────────────
  if (step === "shipping") {
    return (
      <main className="flex flex-col bg-[#F9F9F9] min-h-screen overflow-x-hidden pt-24 lg:pt-32 pb-20">
        <div className="max-w-[1000px] mx-auto px-6 w-full">
          {/* Success banner */}
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <div>
              <p className="text-sm font-semibold text-green-700">Order Created Successfully!</p>
              <p className="text-xs text-green-600 mt-0.5">
                Order ID: <span className="font-bold">{orderResponse?.order?.id}</span> — Please add your shipping address to continue.
              </p>
            </div>
          </div>

          <h1 className="text-3xl font-bold text-black mb-8">Shipping Address</h1>

          {/* Error Banner */}
          {errorMessage && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v4M12 16h.01" />
              </svg>
              <p className="text-sm text-red-600">{errorMessage}</p>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Shipping Form */}
            <div className="flex-1 bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Address Line 1 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                    placeholder="123 Tech Park"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Address Line 2 <span className="text-gray-300 text-xs">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                    placeholder="Floor 4, Suite 200"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    City <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Mumbai"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    State <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    placeholder="Maharashtra"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Country <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="India"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Postal Code <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="400001"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-black placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Order Summary Sidebar */}
            <div className="w-full lg:w-[360px] flex flex-col gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-black mb-6">Order Summary</h3>

                {/* Order items preview */}
                <div className="space-y-3 mb-5 max-h-[200px] overflow-y-auto">
                  {orderResponse?.order?.items?.map((item) => (
                    <div key={item.productId} className="flex justify-between text-sm">
                      <span className="text-gray-600 truncate mr-2">{item.name} × {item.quantity}</span>
                      <span className="font-medium text-black flex-shrink-0">
                        ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-100 pt-4 space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Order ID</span>
                    <span className="font-bold text-black">{orderResponse?.order?.id}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Status</span>
                    <span className="font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full text-xs">
                      {orderResponse?.order?.status}
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-gray-100 pt-3 mt-2">
                    <span className="font-bold text-black text-base">Total</span>
                    <span className="font-bold text-red-500 text-lg">
                      ₹{orderResponse?.order?.totalAmount?.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <button
                  className={`w-full py-3.5 mt-6 font-bold rounded-xl transition-all text-sm flex items-center justify-center gap-2 ${
                    isShippingValid && !isRedirecting
                      ? "bg-red-500 hover:bg-red-600 text-white shadow-[0_4px_14px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)] cursor-pointer"
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
                  onClick={handleShippingSubmit}
                  disabled={!isShippingValid || isRedirecting}
                >
                  {isRedirecting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Redirecting to Payment...
                    </>
                  ) : (
                    "Continue to Payment"
                  )}
                </button>

                <p className="text-[11px] text-gray-400 text-center mt-3">
                  You will be redirected to Stripe for secure payment
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-black mb-3">Secure Checkout</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Your information is encrypted and secure. We use industry-standard protocols to protect your data.
                </p>
                <div className="flex gap-2">
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">VISA</div>
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">MC</div>
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">AMEX</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  // ─── STEP 1: Order Review (Original UI) ──────────────────────────────
  return (
    <main className="flex flex-col bg-[#F9F9F9] min-h-screen overflow-x-hidden pt-24 lg:pt-32 pb-20">
      <div className="max-w-[1000px] mx-auto px-6 w-full">
        <h1 className="text-3xl font-bold text-black mb-8">Order Review</h1>

        {/* Error Banner */}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            <p className="text-sm text-red-600">{errorMessage}</p>
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Order Details */}
          <div className="flex-1 bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-black">Your Items</h2>
              <span className="text-sm text-gray-500 font-medium px-3 py-1 bg-gray-100 rounded-full">
                {items.length} {items.length === 1 ? "item" : "items"}
              </span>
            </div>

            <div className="space-y-6">
              {items.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-gray-500 mb-4">No items found for this order.</p>
                  <Link href="/store" className="text-red-500 font-medium hover:underline">
                    Return to Store
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                    <div className="w-20 h-20 bg-[#F6F6F6] rounded-lg relative overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-contain p-2"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-black">{item.name}</h3>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-bold text-black">
                      {formatPrice(item.price * item.quantity)}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right: Summary */}
          {items.length > 0 && (
            <div className="w-full lg:w-[360px] flex flex-col gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-bold text-black mb-6">Order Summary</h3>
                
                <div className="space-y-4 mb-6 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span className="font-medium text-black">{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Tax (8%)</span>
                    <span className="font-medium text-black">{formatPrice(taxAmount)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600 border-t border-gray-100 pt-4 mt-2">
                    <span className="font-bold text-black text-base">Total</span>
                    <span className="font-bold text-red-500 text-lg">{formatPrice(finalTotal)}</span>
                  </div>
                </div>

                <button 
                  className={`w-full py-3.5 font-bold rounded-xl transition-all shadow-[0_4px_14px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)] flex items-center justify-center gap-2 ${
                    isPlacingOrder
                      ? "bg-red-400 text-white cursor-wait"
                      : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
                  onClick={handlePlaceOrder}
                  disabled={isPlacingOrder}
                >
                  {isPlacingOrder ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Creating Order...
                    </>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-semibold text-black mb-3">Secure Checkout</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Your information is encrypted and secure. We use industry-standard protocols to protect your data.
                </p>
                <div className="flex gap-2">
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">VISA</div>
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">MC</div>
                  <div className="w-10 h-6 bg-gray-100 rounded flex items-center justify-center text-[10px] font-bold text-gray-400">AMEX</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
