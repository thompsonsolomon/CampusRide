"use client"

import { motion } from "framer-motion"

export default function Hero({ scrollY }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{ y: scrollY * 0.5 }}
        className="absolute top-20 right-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: scrollY * 0.3 }}
        className="absolute bottom-20 left-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-block mb-6">
          <div className="glass px-4 py-2 rounded-full border border-yellow-400/30">
            <span className="text-yellow-400 text-sm font-semibold">🚀 Launching Soon</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Fast & Safe Bike Rides
          <br />
          <span className="gradient-text">Within Your Campus</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          The smarter way to get around campus. Instant booking, live tracking, and secure payments—all in one app.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-yellow-400 text-slate-900 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors glow-gold"
          >
            Get the App
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, borderColor: "#ffd700" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-white text-white rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
          >
            Become a Rider
          </motion.button>
        </motion.div>

        {/* Floating Phone Mockup */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="glass rounded-3xl p-2 border border-white/20 glow">
            <div className="bg-gradient-to-b from-teal-500 to-teal-600 rounded-2xl aspect-video flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">📍</div>
                <p className="text-white font-semibold">Live GPS Tracking</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
