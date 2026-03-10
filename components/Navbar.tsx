"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const { data: session } = useSession()
  const [open, setOpen] = useState(false)
  const [mobileMenu, setMobileMenu] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

     
        <Link href="/" className="font-extrabold text-2xl tracking-wide flex items-center gap-2">
          🛒 <span className="text-yellow-300">Mini</span>Mart
        </Link>

      
        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link href="/items" className="hover:text-yellow-300 transition">Products</Link>
          <Link href="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>

       
        <div className="hidden md:flex items-center">
          {session ? (
            <div className="relative">
              <button
                onClick={() => setOpen(!open)}
                className="flex items-center gap-2 bg-white bg-opacity-20 border border-white border-opacity-30 px-3 py-2 rounded-full hover:bg-opacity-30 transition"
              >
                {session.user?.image ? (
                  <img src={session.user.image} alt="avatar" width={28} height={28} className="rounded-full w-7 h-7 object-cover" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">
                    {session.user?.name?.charAt(0) || "U"}
                  </div>
                )}
                <span className="text-sm font-medium max-w-[120px] truncate">{session.user?.name}</span>
                <svg
                  className={`w-4 h-4 transform transition ${open ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              {open && (
                <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden">
                  <div className="px-4 py-3 bg-indigo-50 border-b border-gray-100">
                    <p className="font-semibold text-sm text-gray-800">{session.user?.name}</p>
                    <p className="text-xs text-gray-500 truncate">{session.user?.email}</p>
                  </div>
                  <Link href="/add-product" onClick={() => setOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                    ➕ Add Product
                  </Link>
                  <Link href="/manage-products" onClick={() => setOpen(false)} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-sm">
                    ⚙️ Manage Products
                  </Link>
                  <div className="border-t border-gray-100">
                    <button
                      onClick={() => signOut()}
                      className="w-full text-left flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600 text-sm"
                    >
                      🚪 Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="bg-yellow-400 text-yellow-900 px-5 py-2 rounded-full font-bold hover:bg-yellow-300 transition text-sm shadow-md"
            >
              Login 
            </button>
          )}
        </div>

        
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={mobileMenu ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {mobileMenu && (
        <div className="md:hidden mt-4 space-y-1 px-4 pb-4">
          <Link href="/" onClick={() => setMobileMenu(false)} className="block py-2 border-b border-indigo-500 hover:text-yellow-300">Home</Link>
          <Link href="/items" onClick={() => setMobileMenu(false)} className="block py-2 border-b border-indigo-500 hover:text-yellow-300">Products</Link>
          <Link href="/about" onClick={() => setMobileMenu(false)} className="block py-2 border-b border-indigo-500 hover:text-yellow-300">About</Link>
          <Link href="/contact" onClick={() => setMobileMenu(false)} className="block py-2 border-b border-indigo-500 hover:text-yellow-300">Contact</Link>
          {session ? (
            <div className="pt-3 space-y-2">
              <div className="flex items-center gap-2 py-2">
                {session.user?.image ? (
                  <img src={session.user.image} alt="avatar" className="w-7 h-7 rounded-full object-cover" />
                ) : (
                  <div className="w-7 h-7 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-sm">
                    {session.user?.name?.charAt(0) || "U"}
                  </div>
                )}
                <span className="text-sm text-yellow-300">{session.user?.name}</span>
              </div>
              <Link href="/add-product" onClick={() => setMobileMenu(false)} className="block py-2 hover:text-yellow-300">➕ Add Product</Link>
              <Link href="/manage-products" onClick={() => setMobileMenu(false)} className="block py-2 hover:text-yellow-300">⚙️ Manage Products</Link>
              <button onClick={() => signOut()} className="w-full bg-red-500 px-4 py-2 rounded-full font-semibold hover:bg-red-600 transition mt-2">
                🚪 Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn()}
              className="w-full bg-yellow-400 text-yellow-900 px-4 py-2 rounded-full font-bold hover:bg-yellow-300 transition mt-3"
            >
              Login / Register
            </button>
          )}
        </div>
      )}
    </nav>
  )
}