import { Noto_Serif_Lao, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const notoSerifLao = Noto_Serif_Lao({
  weight: ["400", "600", "700"],
  subsets: ["lao"],
  variable: "--font-noto-serif-lao",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Eleedict - Lao Dictionary",
  description: "A modern Lao dictionary application",
  icons: {
    icon: [
      { url: "/assets/eleedict.png", type: "image/png" },
    ],
    shortcut: "/assets/eleedict.png",
    apple: "/assets/eleedict.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${notoSerifLao.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider defaultTheme="dark" storageKey="eleedict-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
