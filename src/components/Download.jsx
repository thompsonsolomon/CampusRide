"use client"

import { motion } from "framer-motion"
import { toast } from "react-toastify"

export default function Download() {

  const HandleDownloadOnAppStore = () => {
    toast.info("ios version is not available at the moment, check back later or kindly download the android ")
  }

const HandleDownloadOnPlayStore = () => {
  toast.info("Redirecting ...", {
    autoClose: 1500,
  });

  setTimeout(() => {
    toast.success("Opening campus ride Store. Please wait...", {
      autoClose: 2000,
    });
  }, 1500);

  // Simulate the redirect after a short delay
  setTimeout(() => {
    window.open("https://expo.dev/artifacts/eas/kH7ciTRNwczL5Mk1T4VT1Q.aab", "_blank");
  }, 3000);
};

  return (
    <section id="download" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-12 border border-white/10 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-teal-500/10 -z-10" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Ride?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of students already using CampusRide. Download the app today and get your first ride at 50%
              off!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={HandleDownloadOnAppStore}
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <span>🍎</span> App Store
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={HandleDownloadOnPlayStore}
                className="px-8 py-4 bg-white text-slate-900 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors"
              >
                <span>🤖</span> Google Play
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-block"
            >
              <div className="glass px-6 py-3 rounded-full border border-yellow-400/50">
                <span className="text-yellow-400 font-semibold">Pre-register now for exclusive early access</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
