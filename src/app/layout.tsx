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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
