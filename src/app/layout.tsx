import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LoginProvider } from "./context/LoginContext"; // Import your provider
import TopNavBar from "@/app/component/header/TopNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HRM App",
  description: "Human Resource Management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoginProvider> {/* Wrap your application with the provider */}
          <TopNavBar /> {/* Include the TopNavBar component */}
          {children}
        </LoginProvider>
      </body>
    </html>
  );
}