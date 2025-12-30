"use client";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-black/70 sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-green-400">VizoraHost</h1>
      <nav className="space-x-4">
        <a href="/" className="hover:text-green-500">Home</a>
        <a href="/services" className="hover:text-green-500">Services</a>
        <a href="/cart" className="hover:text-green-500">Cart</a>
        <a href="/admin" className="hover:text-green-500">Admin</a>
      </nav>
    </header>
  );
}
