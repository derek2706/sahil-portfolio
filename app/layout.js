import { Geist } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sahil Mazumder",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={geist.className}>
        {children}

        <Analytics />
      </body>
    </html>
  );
}
