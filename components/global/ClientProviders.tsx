"use client";

import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/store/CartSidebar";
import FloatingCartButton from "@/components/store/FloatingCartButton";

import { CurrencyProvider } from "@/context/CurrencyContext";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CurrencyProvider>
      <CartProvider>
        {children}
        <CartSidebar />
        <FloatingCartButton />
      </CartProvider>
    </CurrencyProvider>
  );
}

