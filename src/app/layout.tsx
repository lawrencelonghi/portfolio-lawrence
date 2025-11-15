import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Lawrence Longhi",
  description: "Lawrence Longhi é um desenvolvedor web full stack atualmente trabalhando como freelancer",
  openGraph: {
    title: 'Lawrence Longhi',
    description: 'Lawrence Longhi é um desenvolvedor web full stack brasileiro atualmente trabalhando como freelancer',
    images: [
      {
        url: 'https://lawrencelonghi.vercel.app/gradient-sample.png', 
        width: 1200,
        height: 630, 
        alt: 'Lawrence Longhi',
      }
    ],
    url: 'https://lawrencelonghi.vercel.app',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
