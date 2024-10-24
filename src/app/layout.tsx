import Head from "next/head";
import Navbar from "@/components/nav-bar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Vivek Sharma- Developer, Writer, Creator and YouTuber",
  description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
  icons: "/avatar1.png",
  category: "website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-800 w-full`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
