import type { Metadata } from "next";
import { Poppins } from "next/font/google"; // Import Poppins font
import "./globals.css";
import ProtectedRoute from "@/components/ProtectedRoute";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] }); // Initialize Poppins font

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={poppins.className}> {/* Use Poppins font */}
        <div className="h-screen hidden md:flex items-center justify-center text-xl">
          <p>For seamless transaction, Kindly view this page on a mobile device. Thanks</p>
        </div>
        <ProtectedRoute>
          <div className="block md:hidden">{children}</div>
        </ProtectedRoute>
      </body>
    </html>
  );
}
