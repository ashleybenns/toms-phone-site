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
    default: "Tom's Phone — their whole phone: a few names, and SOS",
    template: "%s | Tom's Phone",
  },
  description:
    "One-tap calling and an SOS button for someone you look after. You set it up. Tom's Phone turns an ordinary Android phone into a dedicated phone: a few large named buttons, an SOS button, and nothing to wander into.",
  openGraph: {
    type: "website",
    siteName: "Tom's Phone",
    url: "https://www.toms-phone.com",
    title: "Tom's Phone — their whole phone: a few names, and SOS",
    description:
      "One-tap calling and an SOS button for someone you look after. You set it up.",
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
