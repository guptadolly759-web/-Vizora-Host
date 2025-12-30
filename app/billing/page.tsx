"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function BillingPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Abhi QR page pe redirect karenge (placeholder)
    router.push("/payment/123"); // 123 = dummy orderId
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Billing Information</h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/10 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/10 text-white"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password (panel access)"
          value={form.password}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/10 text-white"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/10 text-white"
          required
        />
        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-white/10 text-white"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-black py-3 rounded-lg font-semibold"
        >
          Submit Order
        </button>
      </form>
    </main>
  );
}
