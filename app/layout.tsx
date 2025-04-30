import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./config/ReactQueryProvider";
import Header from "./component/common/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stacks",
  icons: {
    icon: "/assets/img/logo/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased max-w-7xl mx-auto px-4`}
        >
          <Header />
          {children}
        </body>
      </html>
    </ReactQueryProvider>
  );
}
