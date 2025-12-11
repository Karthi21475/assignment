import type { Metadata } from "next";
import { Lexend } from 'next/font/google';
import "./globals.css";


const lexend = Lexend({
  subsets: ['latin'],
  weight:['400','500','700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Lylipads",
  description: "its my assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lexend.className} font-medium`}
      >
        {children}
      </body>
    </html>
  );
}
