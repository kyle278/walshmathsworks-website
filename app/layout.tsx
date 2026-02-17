import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PortalEditorBridge from "@/components/layout/PortalEditorBridge";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Walsh Maths Works - Leaving Cert Maths Tuition in Carlow",
  description:
    "Expert Leaving Cert Maths tuition with Tom Walsh. 25+ years experience, 100% success rate. Saturday sessions at the Talbot Hotel, Carlow.",
  openGraph: {
    title: "Walsh Maths Works - Leaving Cert Maths Tuition in Carlow",
    description:
      "Expert Leaving Cert Maths tuition with Tom Walsh. 25+ years experience, 100% success rate. Saturday sessions at the Talbot Hotel, Carlow.",
    type: "website",
    locale: "en_IE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <Suspense fallback={null}>
          <PortalEditorBridge />
        </Suspense>
      </body>
    </html>
  );
}
