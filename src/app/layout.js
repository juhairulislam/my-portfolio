import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Juhairul Islam | Portfolio",
  description: "Personal developer portfolio of Juhairul Islam",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-white dark:bg-[#0a0a0f] text-gray-900 dark:text-white antialiased transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}