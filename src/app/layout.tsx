import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import WAButton from "@/components/WAButton";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Dealova Beauty Care Salon | Hair, Facial & Spa di Kediri",
  description:
    "Salon kecantikan terpercaya di Kediri. Layanan hair treatment, skincare facial, dan body spa dengan harga terjangkau. Booking via WhatsApp.",
  keywords: [
    "salon kecantikan",
    "hair salon kediri",
    "facial kediri",
    "spa kediri",
    "dealova beauty care",
    "perawatan rambut",
  ],
  openGraph: {
    title: "Dealova Beauty Care Salon",
    description:
      "Salon kecantikan terpercaya di Kediri. Layanan hair treatment, skincare facial, dan body spa.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WAButton />
      </body>
    </html>
  );
}
