import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const CTASection = () => {
  return (
    <motion.section 
      initial="hidden" 
      animate="visible" 
      variants={fadeIn} 
      transition={{ duration: 0.5, delay: 0.5 }} 
      className="text-center bg-gradient-to-r from-blue-100/40 to-blue-500/40 
        dark:from-blue-900/30 dark:to-blue-700/30 
        p-10 rounded-2xl shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-4 text-blue-800 dark:text-blue-300">
        Ready to check your health?
      </h2>
      <p className="text-xl text-blue-600 dark:text-blue-300 max-w-2xl mx-auto mb-6">
        Start using our AI-powered symptom checker today and take control of your health.
      </p>
      <Link 
        to="/symptom-checker" 
        className="inline-flex items-center px-6 py-3 rounded-full 
          bg-blue-600 hover:bg-blue-700 text-white 
          font-medium shadow-md hover:shadow-xl transition-all duration-300"
      >
        Get Started Now 
        <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
    </motion.section>
  )
}

export default CTASection
