import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

import Navbar from "../components/Navbar";
import "../styles/globals.css";

export const metadata = {
  title: "Shafei",
  description: "Shafei Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="bg-gradient-to-bl from-teal-900 to-cyan-800 text-sky-100">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
