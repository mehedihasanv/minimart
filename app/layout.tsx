import "./globals.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Providers from "./providers"

export const metadata = {
  title: "Minimart",
  description: "Ecommerce shopping platform",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
