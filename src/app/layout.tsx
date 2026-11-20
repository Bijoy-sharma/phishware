
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "PhishAware | Security Awareness Training",
    template: "%s | PhishAware",
  },
  description:
    "An interactive cybersecurity awareness platform for learning phishing detection, email investigation, URL analysis, and incident response.",
  applicationName: "PhishAware",
  keywords: [
    "Phishing Awareness",
    "Cybersecurity Training",
    "Email Security",
    "SOC Analyst Training",
    "Phishing Detection",
  ],
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
