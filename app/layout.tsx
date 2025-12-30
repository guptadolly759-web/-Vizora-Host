import "./globals.css";
import { CartProvider } from "../components/CartContext";
import CheckoutStrip from "../components/CheckoutStrip";

export const metadata = {
  title: "VizoraHost",
  description: "Minecraft & VPS Hosting",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CartProvider>
          {children}
          <CheckoutStrip />
        </CartProvider>
      </body>
    </html>
  );
}
