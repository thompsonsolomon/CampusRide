"use client"

import { motion } from "framer-motion"

const reasons = [
  {
    title: "Campus-Exclusive",
    description: "Not a public okada app—built specifically for university environments.",
    icon: "🎓",
  },
  {
    title: "Student-Friendly Pricing",
    description: "Affordable fixed rates designed for student budgets.",
    icon: "💰",
  },
  {
    title: "Safety First",
    description: "Verified riders, emergency contacts, and real-time tracking.",
    icon: "🛡️",
  },
  {
    title: "Smart & Fast",
    description: "AI-powered matching gets you the fastest route and best rider.",
    icon: "🚀",
  },
]

export default function WhyChoose() {
  return (
    <section id="why-us" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why <span className="gradient-text">CampusRide?</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We're not just another ride-hailing app. We're built for campus life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8 border border-white/10 hover:border-yellow-400/50 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">{reason.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400">{reason.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
