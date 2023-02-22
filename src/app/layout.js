import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({ children }) {
  // even Providers is client side, the rest
  // (header, navbar and children stay server side)
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />
          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
