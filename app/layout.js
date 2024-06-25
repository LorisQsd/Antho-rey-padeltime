import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Padel Time",
  description: "Ton site de Padel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
