"use client"

import { motion } from "framer-motion"

const features = [
  {
    icon: "⚡",
    title: "Instant Booking",
    description: "Request a ride in seconds and get matched with a rider instantly.",
  },
  {
    icon: "📍",
    title: "Live GPS Tracking",
    description: "Track your rider in real-time and know exactly when they arrive.",
  },
  {
    icon: "💳",
    title: "Secure Payments",
    description: "Safe, encrypted transactions with Paystack integration.",
  },
  {
    icon: "⭐",
    title: "Rider Ratings",
    description: "Rate and review riders to ensure quality and safety.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="gradient-text">CampusRide?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Built specifically for campus life with features that matter to students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: "0 0 30px rgba(13, 148, 136, 0.2)" }}
              className="glass rounded-2xl p-6 border border-white/10 hover:border-teal-500/50 transition-all cursor-pointer group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
