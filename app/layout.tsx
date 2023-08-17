import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import Navbar from "./layouts/Navbar";

export const metadata: Metadata = {
  title: "Ricky & Morty",
  description: "A Ricky & Morty frontend generated with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="[&>div]:grid [&>div]:min-h-screen [&>div]:grid-rows-[80px,1fr]">
        <Providers>
          <Navbar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
