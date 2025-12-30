"use client";
import { useCart } from "../../components/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-2xl font-bold mb-2">Your cart is empty</h1>
        <p className="text-gray-400 mb-4">Add some plans to continue.</p>
        <Link href="/services" className="bg-green-500 text-black px-4 py-2 rounded-lg">
          Browse Services
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

      <div className="space-y-4 max-w-xl mx-auto">
        {cart.map((item, index) => (
          <div key={index} className="border border-white/10 rounded-xl p-4 bg-white/5 flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-gray-400 text-sm">{item.service}</p>
              <p className="text-green-400 font-bold">{item.price}</p>
            </div>
            <button
              onClick={() => removeFromCart(index)}
              className="bg-red-500 text-black px-3 py-1 rounded-lg font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/billing"
          className="bg-green-500 text-black px-6 py-3 rounded-full font-semibold"
        >
          Proceed to Billing
        </Link>
      </div>
    </main>
  );
}
