import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manager Printer",
  description: "Manager Printer FPT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="navbar bg-dark navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <Image
                src="/images/favicon_fpt.png"
                alt="logo"
                width={60}
                height={60}
              />
            </a>
            <div className="navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link text-white"
                    aria-current="page"
                    href="/"
                  >
                    Trang chủ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/Printer">
                    Máy in
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="/PrintingInk">
                    Mực in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
