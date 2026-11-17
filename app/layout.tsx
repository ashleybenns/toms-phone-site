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
    default: "Tom's Phone — a big-button phone with nothing to learn",
    template: "%s | Tom's Phone",
  },
  description:
    "Big-button phone for someone you look after: tap a name to call, plus SOS. Tom's Phone turns an ordinary Android phone into one simple screen: a few large named buttons, an SOS button, and nothing to wander into. You set it up; they just use it.",
  openGraph: {
    type: "website",
    siteName: "Tom's Phone",
    url: "https://www.toms-phone.com",
    title: "Tom's Phone — nothing to learn, nothing to remember",
    description:
      "Big-button phone for someone you look after: tap a name to call, plus SOS.",
    images: ["/screenshots/feature_graphic_1024x500.png"],
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
