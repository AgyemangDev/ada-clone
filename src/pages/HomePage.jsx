"use client"

import HeroSection from "../components/Home/HeroSection"
import FeaturesSection from "../components/Home/FeaturesSection"
import HowItWorksSection from "../components/Home/HowItWorksSection"
import CTASection from "../components/Home/CTASection"

const HomePage = () => {
  return (
    <div className="py-12">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CTASection />
    </div>
  )
}

export default HomePage
