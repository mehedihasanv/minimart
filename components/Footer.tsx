import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-2 md:grid-cols-4 gap-8">

        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-3">🛒 MiniMart</h2>
          <p className="text-gray-400 leading-relaxed text-sm">
            A modern eCommerce platform where you can Shop smarter and faster
          </p>
          <div className="flex gap-3 mt-5">
            <a href="https://mehedi.hasan.65118" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold hover:bg-blue-600 transition">f</a>
            <a href="https://@HasanMehed57540" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold hover:bg-sky-500 transition">t</a>
            <a href="https://in/mehedi-hasan-3a36233b4" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-sm font-bold hover:bg-pink-600 transition">in</a>
          </div>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link href="/items" className="hover:text-blue-400 transition">Products</Link></li>
            <li><Link href="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/login" className="hover:text-blue-400 transition">Login</Link></li>
            <li><Link href="/register" className="hover:text-blue-400 transition">Register</Link></li>
            <li><Link href="/add-product" className="hover:text-blue-400 transition">Add Product</Link></li>
            <li><Link href="/manage-products" className="hover:text-blue-400 transition">Manage Products</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-white font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📧 support@minimart.com</li>
            <li>📞 +1 (800) 123-4567</li>
            <li>📍 Dhaka, Bangladesh</li>
            <li>🕐 Mon–Fri, 9am–6pm</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-700 bg-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MiniMart All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}