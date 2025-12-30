"use client";

import { useParams } from "next/navigation";

const serviceData: any = {
  "budget-mc": {
    title: "Budget MC Plans",
    desc: "Affordable Minecraft hosting for smooth gameplay at low cost.",
    plans: [
      {
        name: "MC Basic",
        price: "₹99 / month",
        specs: ["2GB RAM", "10GB SSD", "1 vCore"]
      },
      {
        name: "MC Starter",
        price: "₹149 / month",
        specs: ["3GB RAM", "15GB SSD", "2 vCore"]
      }
    ]
  },
  "budget-vps": {
    title: "Budget VPS Plans",
    desc: "Low-cost VPS for bots, websites, and small applications.",
    plans: [
      {
        name: "VPS Lite",
        price: "₹199 / month",
        specs: ["2GB RAM", "20GB SSD", "1 vCore"]
      }
    ]
  },
  "powerful-mc": {
    title: "Powerful MC Plans",
    desc: "High performance Minecraft servers for big communities.",
    plans: [
      {
        name: "MC Pro",
        price: "₹299 / month",
        specs: ["6GB RAM", "40GB SSD", "3 vCore"]
      }
    ]
  },
  "powerful-vps": {
    title: "Powerful VPS Plans",
    desc: "Enterprise-level VPS for heavy workloads.",
    plans: [
      {
        name: "VPS Pro",
        price: "₹499 / month",
        specs: ["8GB RAM", "80GB SSD", "4 vCore"]
      }
    ]
  }
};

export default function PlansPage() {
  const params = useParams();
  const serviceKey = params.service as string;

  const service = serviceData[serviceKey];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Service not found
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">

      {/* TITLE */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">{service.title}</h1>
        <p className="text-gray-400 text-sm">{service.desc}</p>
      </div>

      {/* PLANS */}
      <div className="grid gap-6 max-w-xl mx-auto">
        {service.plans.map((plan: any, index: number) => (
          <div
            key={index}
            className="border border-white/10 rounded-xl p-5 bg-white/5"
          >
            <h2 className="text-xl font-semibold mb-2">
              {plan.name}
            </h2>

            <p className="text-green-400 font-bold mb-3">
              {plan.price}
            </p>

            <ul className="text-sm text-gray-300 mb-4 list-disc list-inside">
              {plan.specs.map((spec: string, i: number) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>

            <button
              className="w-full bg-blue-500 text-black py-2 rounded-lg font-semibold"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}
