export default function Features() {
  const features = [
    {
      title: "Fast Delivery",
      description: "Get your products delivered to your doorstep quickly and safely. We partner with top logistics providers.",
      icon: "🚚",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Secure Payment",
      description: "Your transactions are 100% protected with bank-level encryption and secure payment gateways.",
      icon: "💳",
      bg: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      title: "Quality Products",
      description: "Every item is carefully verified to ensure top quality. We only list products that meet our standards.",
      icon: "⭐",
      bg: "bg-yellow-50",
      iconBg: "bg-yellow-100",
    },
    {
      title: "24/7 Support",
      description: "Our dedicated support team is always here to help you anytime, day or night.",
      icon: "📞",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      title: "Easy Returns",
      description: "Not satisfied? Return your product within 30 days, no questions asked. Hassle-free process.",
      icon: "🔄",
      bg: "bg-pink-50",
      iconBg: "bg-pink-100",
    },
    {
      title: "Best Prices",
      description: "We offer the most competitive prices in the market. Find amazing deals every single day.",
      icon: "🏷️",
      bg: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">

      
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            💡 Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Why Choose MiniMart?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            We're committed to giving you the best shopping experience possible.
          </p>
        </div>

      
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bg} rounded-2xl p-6 hover:shadow-lg transition duration-300 border border-transparent hover:border-gray-200 group`}
            >
              <div className={`${feature.iconBg} w-14 h-14 rounded-xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}