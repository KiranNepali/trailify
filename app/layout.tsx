"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const preloaderContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useGSAP(() => {
    const splitText = new SplitType(".text-preloader");
    const tl = gsap.timeline();

    tl.from(splitText.chars, {
      opacity: 0,
      duration: 2,
      stagger: 0.05,
      ease: "back.inOut",
    });
    tl.to(splitText.chars, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "expo.inOut",
      onComplete: () => setIsLoading(false),
    });
  });

  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* Preloader */}
        {isLoading && (
          <div
            ref={preloaderContainerRef}
            className="fixed top-0 left-0 w-full text-center h-screen bg-secondary-50 z-[90000] title text-5xl flex justify-center items-center"
          >
            <span className="w-full text-preloader tracking-wider font-semibold text-primary-700">
              LOADING FOR YOUR NEXT ADVENTURE...
            </span>
          </div>
        )}
        {/* Main Content */}
        {!isLoading && (
          <>
            <div className="">
              <Navbar />
              <div className="w-full h-full bg-secondary-50 text-secondary-500">
                {children}
              </div>
              <Footer />
            </div>
          </>
        )}
      </body>
    </html>
  );
}
