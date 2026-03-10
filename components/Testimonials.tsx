export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      feedback: "MiniMart made my shopping experience so smooth and enjoyable. The product quality is outstanding and delivery was super fast!",
      avatar: "SJ",
      rating: 5,
    },
    {
      name: "Michael Lee",
      role: "Verified Buyer",
      feedback: "Great product quality and fast delivery. The prices are unbeatable and the checkout process is seamless. I'll definitely shop here again!",
      avatar: "ML",
      rating: 5,
    },
    {
      name: "Amina Khan",
      role: "Loyal Shopper",
      feedback: "Customer support was super helpful. I felt valued as a customer. Best online shopping experience I've ever had!",
      avatar: "AK",
      rating: 4,
    },
    {
      name: "David Smith",
      role: "Tech Enthusiast",
      feedback: "Found exactly what I was looking for at a great price. The search and filter features make it so easy to find products.",
      avatar: "DS",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Fashion Lover",
      feedback: "Amazing collection and the website is so easy to navigate. I love how they keep updating their inventory with new products!",
      avatar: "PP",
      rating: 5,
    },
    {
      name: "James Wilson",
      role: "First-time Buyer",
      feedback: "Was skeptical at first but MiniMart exceeded all my expectations. Secure payment and hassle-free returns make it my go-to store!",
      avatar: "JW",
      rating: 4,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        
      
        <div className="text-center mb-12">
          <span className="inline-block bg-indigo-100 text-indigo-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            ⭐ Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Thousands of happy customers trust MiniMart for their shopping needs.
          </p>
        </div>

        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between"
            >
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < t.rating ? "text-yellow-400" : "text-gray-300"}>
                    ★
                  </span>
                ))}
              </div>

             
              <p className="text-gray-600 mb-6 leading-relaxed">
                "{t.feedback}"
              </p>

             
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { value: "10,000+", label: "Happy Customers" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "99%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <div key={i} className="bg-indigo-50 rounded-2xl py-6">
              <p className="text-3xl font-extrabold text-indigo-600">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}