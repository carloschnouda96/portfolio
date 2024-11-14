import { Anek_Latin } from "next/font/google";
import "./globals.css";
import Menu from "@/components/containers/Menu";
import Footer from "@/components/containers/Footer";

const anek = Anek_Latin({ subsets: ["latin"] });

export const metadata = {
  title: "Carlos Chnouda - Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${anek.className} bg-[#3D348B]`}>
        <Menu />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
