export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col">
      
      {/* HEADER */}
      <header className="flex items-center justify-between px-5 py-4 border-b border-white/10">
        <h1 className="text-xl font-bold">VizoraHost</h1>
        <div className="relative">
          <span className="text-xl">🛒</span>
          <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs px-1 rounded">
            0
          </span>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl font-extrabold mb-3">VizoraHost</h2>
        <p className="text-gray-400 mb-4">
          Reliable Minecraft & VPS Hosting Solutions
        </p>
        <p className="text-sm text-gray-500">
          Fast Servers • Secure Infrastructure • Affordable Pricing
        </p>
      </section>

      {/* GET STARTED BUTTON */}
      <a
        href="/services"
        className="fixed bottom-5 right-5 bg-green-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg"
      >
        Get Started
      </a>

      {/* FOOTER */}
      <footer className="text-center text-gray-600 text-xs py-4">
        © 2025 VizoraHost. All rights reserved.
      </footer>

    </main>
  );
}
