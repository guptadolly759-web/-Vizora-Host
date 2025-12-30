"use client";
import Link from "next/link";
import { useCart } from "../../components/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();
  const router = useRouter();

  if (cart.length === 0)
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Your cart is empty
      </div>
    );

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      <div className="space-y-4 max-w-xl mx-auto">
        {cart.map((item, index) => (
          <div key={index} className="border border-white/10 rounded-xl p-4 bg-white/5">
            <h2 className="font-semibold">{item.name}</h2>
            <p className="text-gray-400">{item.service}</p>
            <p className="text-green-400 font-bold">{item.price}</p>
            <button
              onClick={() => removeFromCart(index)}
              className="mt-2 bg-red-500 text-black py-1 px-3 rounded"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 max-w-xl mx-auto">
        <button
          onClick={() => router.push("/billing")}
          className="w-full bg-green-500 text-black py-3 rounded-lg font-semibold"
        >
          Proceed to Billing
        </button>
      </div>
    </main>
  );
}
