"use client";
import { useState, useEffect } from "react";
import { useCart } from "../../components/CartContext";
import { useRouter } from "next/navigation";

export default function BillingPage() {
  const router = useRouter();
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [userIP, setUserIP] = useState("");

  useEffect(() => {
    fetch("/api/get-my-ip")
      .then((res) => res.json())
      .then((data) => setUserIP(data.ip));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const order = { ...form, cart, ip: userIP };
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    clearCart();
    router.push("/payment/123"); // placeholder orderId
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Billing Information</h1>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 text-white" required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 text-white" required />
        <input name="password" type="password" placeholder="Password (panel access)" value={form.password} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 text-white" required />
        <input name="phone" type="tel" placeholder="Phone Number" value={form.phone} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 text-white" required />
        <textarea name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full p-3 rounded-lg bg-white/10 text-white" required />
        <button type="submit" className="w-full bg-green-500 text-black py-3 rounded-lg font-semibold">Submit Order</button>
      </form>
    </main>
  );
}
