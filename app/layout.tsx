// app/layout.tsx
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <div className="w-full h-full bg-secondary-50 text-secondary-500">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
