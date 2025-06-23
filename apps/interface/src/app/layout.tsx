import { Space_Grotesk } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/Header";
const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fontSans.variable} font-sans antialiased `}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
