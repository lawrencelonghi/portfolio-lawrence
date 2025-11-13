import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Lawrence Longhi",
  description: "Lawrence Longhi é um desenvolvedor web full stack atualmente trabalhando como freelancer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
