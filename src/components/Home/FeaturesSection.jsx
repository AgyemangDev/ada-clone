import { motion } from "framer-motion"
import FeatureCard from "./FeatureCard"
import { Stethoscope, MapPin, LineChart } from "lucide-react"

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const features = [
  {
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    title: "Symptom Checker",
    description: "Check your symptoms and get AI-powered disease predictions with treatment recommendations.",
    link: "/symptom-checker",
  },
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Healthcare Locator",
    description: "Find nearby hospitals, pharmacies, and specialists based on your location.",
    link: "/healthcare-locator",
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: "Health Tracker",
    description: "Track your symptoms over time and monitor your health progress.",
    link: "/health-tracker",
  },
]

const FeaturesSection = () => {
  return (
    <motion.section initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </motion.section>
  )
}

export default FeaturesSection
