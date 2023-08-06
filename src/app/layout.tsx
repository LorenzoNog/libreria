import "./globals.css";
import { Open_Sans } from "next/font/google";

export const metadata = {
  title: "📚 Libritos",
};

const OpenSans = Open_Sans({ subsets: ["latin"], weight: "500" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={OpenSans.className}>{children}</body>
    </html>
  );
}
