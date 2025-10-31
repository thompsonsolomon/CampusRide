"use client"

import { useState, useEffect } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import WhyChoose from "./components/WhyChoose"
import Download from "./components/Download"
import Footer from "./components/Footer"
function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      <Hero scrollY={scrollY} />
      <Features />
      <HowItWorks />
      <WhyChoose />
      <Download />
      <Footer />
    </div>
  )
}

export default App
