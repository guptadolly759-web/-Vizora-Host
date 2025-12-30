import Link from "next/link";

const services = [
  {
    name: "Budget MC Plans",
    slug: "budget-mc",
    desc: "Affordable Minecraft hosting solutions for beginners and small communities."
  },
  {
    name: "Budget VPS Plans",
    slug: "budget-vps",
    desc: "Cost-effective VPS servers for basic hosting, bots, and lightweight projects."
  },
  {
    name: "Powerful MC Plans",
    slug: "powerful-mc",
    desc: "High-performance Minecraft servers designed for large networks."
  },
  {
    name: "Powerful VPS Plans",
    slug: "powerful-vps",
    desc: "Enterprise-grade VPS solutions for demanding workloads."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-4 py-8">

      {/* PAGE TITLE */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2">We Offer These Services</h1>
        <p className="text-gray-400 text-sm">
          Select a service category to explore available plans.
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="grid gap-6 max-w-xl mx-auto">
        {services.map((service) => (
          <div
            key={service.slug}
            className="border border-white/10 rounded-xl p-5 bg-white/5"
          >
            <h2 className="text-xl font-semibold mb-2">
              {service.name}
            </h2>

            <p className="text-gray-400 text-sm mb-4">
              {service.desc}
            </p>

            <Link
              href={`/services/${service.slug}`}
              className="block text-center bg-green-500 text-black py-2 rounded-lg font-semibold"
            >
              Check All Plans of {service.name}
            </Link>
          </div>
        ))}
      </div>

    </main>
  );
}
