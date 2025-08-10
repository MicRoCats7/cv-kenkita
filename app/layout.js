import { Poppins } from "next/font/google";
import "./globals.css";
import WhiteOverlay from "@/components/WhiteOverlay";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-poppins',
});

export const metadata = {
  title: "CV Kenkita",
  description: "Aplikasi CV Kenkita",
  icons: {
    icon: [
      {
        url: "/logo-single.png",
        type: "image/png",
      }
    ],
    shortcut: "/logo-single.png",
    apple: "/logo-single.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <WhiteOverlay />
      </body>
    </html>
  );
}
