import "./globals.css";

export const metadata = {
  title: "Sahil Mazumder | Software Engineer",
  description: "Portfolio of Sahil Mazumder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
