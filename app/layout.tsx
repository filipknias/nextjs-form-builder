import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';

const inter = Inter({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Form Builder",
  description: "Easily create forms for surveys, feedback, and more with a simple drag-and-drop interface. Try it now!",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${inter.className}`}>
      <body className="antialiased bg-gray-700 h-full">
        {children}
      </body>
    </html>
  );
}
