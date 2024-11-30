import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Form Builder",
  description: "Easily create forms for surveys, feedback, and more with a simple drag-and-drop interface. Try it now!",
};

export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-700">
        {children}
      </body>
    </html>
  );
}
