export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">

      {/* Hero */}
      <div className="text-center mb-16">
        <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">
          🏪 About Us
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-indigo-600">MiniMart</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">
          We are a modern eCommerce platform built to make online shopping simple, fast, and enjoyable for everyone.
        </p>
      </div>

      {/* Mission */}
      <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-500 leading-relaxed mb-4">
            At MiniMart, our mission is to connect buyers with the best products at unbeatable prices. We believe everyone deserves access to quality products with a seamless shopping experience.
          </p>
          <p className="text-gray-500 leading-relaxed">
            We are committed to providing fast delivery, secure payments, and outstanding customer support every step of the way.
          </p>
        </div>
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-10 text-center">
          <p className="text-6xl mb-4">🎯</p>
          <p className="text-xl font-bold text-indigo-600">Customer First, Always</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        {[
          { value: "10,000+", label: "Products", icon: "📦" },
          { value: "50,000+", label: "Customers", icon: "👥" },
          { value: "99%", label: "Satisfaction", icon: "⭐" },
          { value: "24/7", label: "Support", icon: "📞" },
        ].map((stat, i) => (
          <div key={i} className="bg-indigo-50 rounded-2xl p-6 text-center">
            <p className="text-3xl mb-2">{stat.icon}</p>
            <p className="text-2xl font-extrabold text-indigo-600">{stat.value}</p>
            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Team */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Meet Our Team</h2>
        <p className="text-gray-500">The passionate people behind MiniMart.</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { name: "Alex Johnson", role: "CEO & Founder", avatar: "AJ" },
          { name: "Sarah Lee", role: "Head of Design", avatar: "SL" },
          { name: "Mike Rahman", role: "Lead Developer", avatar: "MR" },
        ].map((member, i) => (
          <div key={i} className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition">
            <div className="w-16 h-16 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
              {member.avatar}
            </div>
            <h3 className="font-bold text-gray-800">{member.name}</h3>
            <p className="text-indigo-500 text-sm">{member.role}</p>
          </div>
        ))}
      </div>

    </div>
  )
}