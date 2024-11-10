import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";


const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['400', '600'], 
});


export const metadata: Metadata = {
  title: "Rasheed Ahmed | Portfolio",
  description: "Portfolio of Rasheed Ahmed using Next.js and Custom CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
      </head>
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
