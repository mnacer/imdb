import Header from "@/components/Header";
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

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
