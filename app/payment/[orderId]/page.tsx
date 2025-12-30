
"use client";
import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function PaymentPage() {
  const params = useParams();
  const router = useRouter();
  const [transactionId, setTransactionId] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderId: params.orderId,
        transactionId,
        screenshot: screenshot ? URL.createObjectURL(screenshot) : "",
      }),
    });
    router.push("/admin");
  };

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Payment</h1>
      <div className="max-w-xl mx-auto space-y-6">
        <div className="text-center mb-4">
          <p className="mb-2">Scan QR to Pay</p>
          <div className="w-40 h-40 bg-white/10 mx-auto flex items-center justify-center">QR</div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Transaction ID" value={transactionId} onChange={e => setTransactionId(e.target.value)} className="w-full p-3 rounded-lg bg-white/10 text-white" required />
          <input type="file" accept="image/*" onChange={e => e.target.files && setScreenshot(e.target.files[0])} className="w-full text-white" required />
          <button type="submit" className="w-full bg-green-500 text-black py-3 rounded-lg font-semibold">Submit Payment</button>
        </form>
      </div>
    </main>
  );
}
