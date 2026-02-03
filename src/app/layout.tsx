import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "@/context/CartContext";
import { SearchProvider } from "@/context/SearchContext";

export const metadata: Metadata = {
  title: "Espaço Gourmet",
  description: "Cardápio digital do Espaço Gourmet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <SearchProvider>
          <CartProvider>{children}</CartProvider>
        </SearchProvider>
      </body>
    </html>
  );
}
