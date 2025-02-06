import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Oswald, Inter } from "next/font/google";
import { TopHeader, Header } from "@/components/homepage/header";
import { FooterSec } from "@/components/homepage/footer";
import { ProductProvider } from "../context/productContext/productContext";
import { CartProvider } from "@/context/cartContext/cartContext";
import { FilterContextProvider } from "@/context/filterContext/filtercontext";
import ScrollToTop from "@/scrollToTop/scroll";
import { DialogProvider } from "@/context/authDialogContext/dialogContext";
import { AuthDialog } from "@/components/userComponent/auth/authDialog";
import { UserProvider } from "@/context/userContext/usercontext";
import { Toaster } from "react-hot-toast";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: "700",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-satoshi",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${inter.variable} antialiased`}
      >
        <ProductProvider>
          <UserProvider>
            <CartProvider>
              <FilterContextProvider>
                <DialogProvider>
                  <TopHeader />
                  <Header />
                  <ScrollToTop />
                  {children}
                  <Toaster position="top-center" reverseOrder={false} />
                  <AuthDialog />
                  <FooterSec />
                </DialogProvider>
              </FilterContextProvider>
            </CartProvider>
          </UserProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
