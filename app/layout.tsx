import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"), // Replace with your real domain

  title: {
    default: "Anmol | Portfolio",
    template: "%s | Anmol Chauhan",
  },

  description:
    "Official portfolio of Anmol Chauhan, an IIT Madras Electronics student and Full Stack Developer. Explore my projects, technical skills, experience, and resume.",
   verification: {

    google: "S7idXu7wQS4R-8KDhun3uxE3mGJl9H68eyz4R5VpYYg",

  },
  keywords: [
    "Anmol Chauhan",
    "Anmol Portfolio",
    "IIT Madras",
    "Electronics Engineering",
    "Full Stack Developer",
    "Next.js",
    "React",
    "JavaScript",
    "Portfolio Website",
    "Web Developer",
    "Software Engineer",
  ],

  authors: [{ name: "Anmol Chauhan" }],
  creator: "Anmol Chauhan",
  publisher: "Anmol Chauhan",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Anmol | Portfolio",
    description:
      "Explore the portfolio of Anmol Chauhan, featuring full-stack development projects, electronics engineering work, and technical skills.",
    url: "https://anmol-25.vercel.app",
    siteName: "Anmol Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/my-photo2.png",
        width: 1200,
        height: 630,
        alt: "Anmol Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anmol | Portfolio",
    description:
      "Official portfolio of Anmol Chauhan - IIT Madras student, Full Stack Developer, and Electronics Engineer.",
    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}