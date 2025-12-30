import "./globals.css";
import { CartProvider } from "../components/CartContext";
import CheckoutStrip from "../components/CheckoutStrip";
import Header from "../components/Header"; // Add header import

export const metadata = {
  title: "VizoraHost",
  description: "Minecraft & VPS Hosting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CartProvider>
          <Header /> {/* Add header here */}
          {children}
          <CheckoutStrip />
        </CartProvider>
      </body>
    </html>
  );
}
