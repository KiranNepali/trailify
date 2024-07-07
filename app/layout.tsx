"use client";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const preloaderContainerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const splitText = new SplitType(".text-preloader");
    const tl = gsap.timeline();
    tl.from(splitText.chars, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.03,
      ease: "sine.out",
    });
    tl.to(splitText.chars, {
      opacity: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "expo.inOut",
    });
    tl.to(preloaderContainerRef.current, {
      scaleY: "0",
      transformOrigin: "top",
      duration: 0.5,
      ease: "sine.out",
      onComplete: () => {
        gsap.to(".disable-scroll", {
          height: "auto",
        });
        setIsLoading(false);
      },
    });
  }, []);

  return (
    <html lang="en" className={inter.className}>
      <body className="overflow-hidden">
        {/* Preloader */}
        {isLoading && (
          <div
            ref={preloaderContainerRef}
            className="fixed top-0 left-0 w-full text-center h-screen bg-secondary-500 text-secondary-50 z-[90000] title text-6xl flex justify-center items-center"
          >
            <span className="w-11/12 text-preloader tracking-wider font-bold">
              LOADING FOR YOUR NEXT ADVENTURE...
            </span>
          </div>
        )}
        {/* Main Content */}
        {!isLoading && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 0.2 }}
              className=""
            >
              <Navbar />
              <div className="w-full h-full  bg-secondary-50 text-secondary-500">
                {children}
              </div>
              <Footer />
              <Toaster />
            </motion.div>
          </>
        )}
      </body>
    </html>
  );
}
