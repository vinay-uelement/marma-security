"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useCurrency } from "@/context/CurrencyContext";

export default function OrderReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const orderId = resolvedParams.id;
  const { items, totalPrice, clearCart } = useCart();
  const { formatPrice } = useCurrency();

  const taxRate = 0.08; // 8% tax rate
  const taxAmount = totalPrice * taxRate;
  const finalTotal = totalPrice + taxAmount;

  return (
    <main className="flex flex-col bg-[#F9F9F9] min-h-screen overflow-x-hidden pt-24 lg:pt-32 pb-20">
      <div className="max-w-[1000px] mx-auto px-6 w-full">
        <h1 className="text-3xl font-bold text-black mb-8">Order Review</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Order Details */}
          <div className="flex-1 bg-white p-6 lg:p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
              <h2 className="text-xl font-semibold text-black">Order ID: {orderId}</h2>
              <span className="text-sm text-gray-500 font-medium px-3 py-1 bg-gray-100 rounded-full">Pending</span>
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
                  className="w-full py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded-xl transition-all shadow-[0_4px_14px_rgba(239,68,68,0.3)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)]"
                  onClick={() => {
                    alert("Order placed successfully!");
                    clearCart();
                    window.location.href = "/store";
                  }}
                >
                  Place Order
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
