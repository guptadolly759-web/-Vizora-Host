"use client";
import Link from "next/link";
import { useCart } from "./CartContext";

export default function CheckoutStrip() {
  const { cart } = useCart();
  if (cart.length === 0) return null;

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-black flex items-center px-6 py-3 rounded-full shadow-lg z-50">
      <span className="font-semibold mr-3">Check Out</span>
      <Link href="/cart">
        <span className="cursor-pointer text-xl">✅</span>
      </Link>
    </div>
  );
}
