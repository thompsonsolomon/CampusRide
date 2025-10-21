"use client"

import { motion } from "framer-motion"

const steps = [
  { number: "01", title: "Sign Up", description: "Create your account in seconds" },
  { number: "02", title: "Request Ride", description: "Enter your destination and book" },
  { number: "03", title: "Track Live", description: "See your rider  in real-time" },
  { number: "04", title: "Pay & Rate", description: "Secure payment and rate  experience" },
]

export default function HowItWorks() {
  return (
    <section id="how_it_works" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-400 text-lg">Four simple steps to your next ride</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 md:gap-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-yellow-400 to-teal-500 -z-10" />
              )}

              <div className="glass rounded-2xl p-6 border border-white/10 text-center hover:border-yellow-400/50 transition-all">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-teal-500 rounded-full flex items-center justify-center"
                >
                  <span className="text-2xl font-bold text-slate-900">{step.number}</span>
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
