import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safe Space",
  description: "A mental health platform for teenagers",
};

export default function RootLayout({
children,}: Readonly<{children: React.ReactNode;}>) 
{
  return (
    <html lang="en">
      <body className={inter.className}>
      <Link href="/api/auth/signout">Sign Out</Link>
        {children}
      </body>
    </html>
  );
}
