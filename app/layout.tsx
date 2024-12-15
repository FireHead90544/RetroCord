import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RetroCord",
  description: "Discord, redesigned in 90s retro-style for Codedex Mini Holiday Hackathon 2024.",
  authors: {
    name: "Rudransh Joshi",
    url: "https://w3rudra.vercel.app/",
  },
  creator: "Rudransh Joshi",
  openGraph: {
    type: "website",
    title: "RetroCord",
    description: "Discord, redesigned in 90s retro-style for Codedex Mini Holiday Hackathon 2024.",
    images: "/og.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="layout-container">
        <main className="main-content">{children}</main>
        <Footer text="Is it a bird? Is it a plane? Nope, it's your favorite Discord 🌐" />
      </body>
    </html>
  );
}
