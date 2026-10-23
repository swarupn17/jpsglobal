import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JPS Global Trade | Connecting India with Global Markets",
  description:
    "JPS Global Trade connects quality Indian products with international markets, with a focus on spices and medical devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
