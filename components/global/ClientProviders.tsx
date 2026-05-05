"use client";

import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/store/CartSidebar";
import FloatingCartButton from "@/components/store/FloatingCartButton";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      {children}
      <CartSidebar />
      <FloatingCartButton />
    </CartProvider>
  );
}

