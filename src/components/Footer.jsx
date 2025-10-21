"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                <img src="/logo.png" alt="" />
              </div>
              <span className="text-white font-bold">CampusRide</span>
            </div>
            <p className="text-gray-400 text-sm">Fast, safe, and smart campus mobility.</p>
          </motion.div>

          {/* Links */}
          {[
            {
              title: "Product", links: [
                {
                  name: "Features",
                  href: "features"
                },
                {
                  name: "Pricing",
                  href: "how_it_works"
                },
                {
                  name: "Security",
                  href: "why-us"
                }

              ]
            },
            // { title: "Company", links: ["About", "Blog", "Careers"] },
            {
              title: "Legal",
              links: [

                {
                  name: "Privacy",
                  href: "download"
                },
                {
                  name: "Terms",
                  href: "download"
                },
                {
                  name: "Contact",
                  href: "download"
                }]
            },
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={`#${link.href}`} className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">© 2025 CampusRide. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {    [  
              
              {
              title: "Twitter",
              links: "/tweeter.com"
            },
              {
              title: "Instagram",
              links: "/tweeter.com"
            },
              {
              title: "LinkedIn",
              links: "/tweeter.com"
            },
            
            
           ].map((social, idx) => (
              <a key={idx} href={social.links} className="text-gray-400 hover:text-yellow-400 transition-colors">
                {social.title}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
