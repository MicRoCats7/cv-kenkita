import { Poppins } from "next/font/google";
import "./globals.css";

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
        url: "/logo.webp",
        type: "image/webp",
      }
    ],
    shortcut: "/logo.webp",
    apple: "/logo.webp",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
