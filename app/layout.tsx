import type { Metadata } from "next";
import { Inter, Instrument_Serif, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({subsets:['latin'],variable:'--font-heading'});

const notoSans = Noto_Sans({subsets:['latin'],variable:'--font-sans'});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Syed Ibrahim Nazeer — Automation Engineer & Full-Stack Developer",
  description:
    "Portfolio of Syed Ibrahim Nazeer. Automation Engineer, Full-Stack Developer, and AI Systems specialist based in Hyderabad, India.",
  keywords: [
    "Syed Ibrahim Nazeer",
    "Automation Engineer",
    "Full-Stack Developer",
    "AI Agents",
    "MCP",
    "Zoho CRM",
    "Make.com",
    "Next.js",
    "Python",
    "YOLOv8",
  ],
  authors: [{ name: "Syed Ibrahim Nazeer" }],
  openGraph: {
    title: "Syed Ibrahim Nazeer — Automation Engineer & Full-Stack Developer",
    description:
      "Portfolio of Syed Ibrahim Nazeer. Automation Engineer, Full-Stack Developer, and AI Systems specialist based in Hyderabad, India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", instrumentSerif.variable, "font-sans", notoSans.variable, playfairDisplayHeading.variable)}
    >
      <body className="min-h-full flex flex-col font-sans">
        <TopNav />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
