import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./_components/Chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.toms-phone.com"),
  title: {
    default: "Tom's Phone — a simpler phone for someone who finds one hard",
    template: "%s | Tom's Phone",
  },
  description:
    "Tom's Phone turns an Android phone into a large-button phone with a few named people, an SOS button, and no way to get lost. Set up by a family helper.",
  openGraph: {
    type: "website",
    siteName: "Tom's Phone",
    url: "https://www.toms-phone.com",
    title: "Tom's Phone — a simpler phone for someone who finds one hard",
    description:
      "Big named buttons, an SOS button, and nothing to get lost in. Set up by a family helper.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
