"use client"

import { useState } from "react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      
      <div className="text-center mb-12">
        <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">
          📬 Contact Us
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Get In <span className="text-indigo-600">Touch</span>
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Have a question or need help? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">
          {[
            { icon: "📧", title: "Email", value: "support@minimart.com" },
            { icon: "📞", title: "Phone", value: "+1 (800) 123-4567" },
            { icon: "📍", title: "Address", value: "Dhaka, Bangladesh" },
            { icon: "🕐", title: "Working Hours", value: "Mon–Fri, 9am–6pm" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 bg-indigo-50 rounded-2xl p-5">
              <div className="text-3xl">{item.icon}</div>
              <div>
                <p className="font-bold text-gray-800">{item.title}</p>
                <p className="text-gray-500 text-sm">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

     
        <div className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8">
          {submitted ? (
            <div className="text-center py-10">
              <p className="text-5xl mb-4">✅</p>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
              <p className="text-gray-500">Thank you for reaching out. We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                <input type="text" placeholder="John Doe" required className="w-full border border-gray-200 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                <input type="email" placeholder="john@example.com" required className="w-full border border-gray-200 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                <input type="text" placeholder="How can we help?" required className="w-full border border-gray-200 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                <textarea placeholder="Write your message..." rows={4} required className="w-full border border-gray-200 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400" />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition">
                Send Message →
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}