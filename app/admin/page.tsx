"use client";
import { useEffect, useState } from "react";

interface Order {
  name: string;
  email: string;
  password: string;
  phone: string;
  address: string;
  transactionId: string;
  screenshot: string;
  ip: string;
}

export default function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);

  // Admin access IPs or token
  const adminIPs = ["YOUR_ADMIN_IP_1", "YOUR_ADMIN_IP_2"]; 

  useEffect(() => {
    // Replace this with real authentication check
    fetch("/api/get-my-ip") // ya koi backend endpoint
      .then((res) => res.json())
      .then((data) => {
        if (adminIPs.includes(data.ip)) {
          setIsAdmin(true);
        }
      });

    // Fetch all orders from backend
    fetch("/api/get-orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Access Denied
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      <div className="space-y-4 max-w-xl mx-auto">
        {orders.map((order, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl p-4 bg-white/5"
          >
            <h2 className="font-semibold mb-1">{order.name}</h2>
            <p className="text-gray-400 text-sm">{order.email}</p>
            <p className="text-gray-400 text-sm">Password: {order.password}</p>
            <p className="text-gray-400 text-sm">{order.phone}</p>
            <p className="text-gray-400 text-sm">{order.address}</p>
            <p className="text-green-400 font-bold mt-2">
              Transaction ID: {order.transactionId}
            </p>
            {order.screenshot && (
              <div className="mt-2">
                <img
                  src={order.screenshot}
                  alt="Payment Screenshot"
                  className="w-full rounded-lg"
                />
              </div>
            )}
            <p className="text-gray-400 text-xs mt-2">IP: {order.ip}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
