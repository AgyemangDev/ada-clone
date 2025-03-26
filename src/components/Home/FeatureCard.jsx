import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: { 
      type: "spring", 
      stiffness: 300,
      damping: 15
    }
  }
}

const FeatureCard = ({ icon, title, description, link }) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className="relative glassmorphism rounded-xl p-6 flex flex-col items-center text-center 
        hover:shadow-xl transition-shadow duration-500 
        border border-blue-50/20 
        bg-gradient-to-br from-white/50 to-blue-50/30 
        dark:from-blue-900/20 dark:to-indigo-900/30
        perspective-1000 
        transition-all ease-in-out duration-500
        group"
    >
      <Link 
        to={link} 
        className="absolute inset-0 z-10"
        aria-label={`Navigate to ${title}`}
      />
      <motion.div 
        className="mb-4 p-3 bg-blue-100/20 rounded-full"
        whileHover={{ 
          rotate: 360,
          transition: { duration: 0.6 }
        }}
      >
        {icon}
      </motion.div>
      <h2 className="text-xl font-semibold mb-3 text-blue-900 dark:text-blue-100">
        {title}
      </h2>
      <p className="text-blue-800 dark:text-blue-200 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="mt-auto flex items-center text-blue-700 dark:text-blue-300 font-medium">
        Try Now 
        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </motion.div>
  )
}

export default FeatureCard