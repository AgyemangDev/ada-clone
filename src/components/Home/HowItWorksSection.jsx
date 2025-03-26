import { motion } from "framer-motion"
import { Stethoscope, Mic, MapPin } from "lucide-react"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      staggerChildren: 0.2
    }
  }
}

const stepVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  },
  hover: {
    scale: 1.05,
    rotate: 2,
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
}

const steps = [
  { 
    step: 1, 
    title: "Enter Your Symptoms", 
    description: "Type or speak your symptoms to get started.",
    icon: Stethoscope,
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    gradient: "from-blue-100 to-blue-200"
  },
  { 
    step: 2, 
    title: "Get AI Predictions", 
    description: "AI provides potential diagnoses with confidence levels.",
    icon: Mic,
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    gradient: "from-purple-100 to-purple-200"
  },
  { 
    step: 3, 
    title: "Find Healthcare", 
    description: "Locate healthcare providers and get directions.",
    icon: MapPin,
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    gradient: "from-green-100 to-green-200"
  }
]

const HowItWorksStep = ({ step, title, description, icon: Icon, bgColor, iconColor, gradient }) => {
  return (
    <motion.div
      variants={stepVariants}
      whileHover="hover"
      className={`relative overflow-hidden rounded-2xl p-6 
        bg-gradient-to-br ${gradient}
        border border-opacity-50 border-white
        shadow-xl shadow-blue-100/50 dark:shadow-blue-900/30
        flex flex-col items-center text-center
        transform transition-all duration-300 ease-in-out
        group`}
    >
      <motion.div 
        initial={{ scale: 0.8, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        className={`mb-4 p-4 ${bgColor} ${iconColor} rounded-full 
          flex items-center justify-center
          transform transition-transform duration-300
          group-hover:rotate-[360deg]`}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      
      <div className="relative z-10">
        <div className="absolute -top-2 -left-2 w-10 h-10 
          bg-white/20 rounded-full opacity-0 
          group-hover:opacity-100 
          transition-all duration-300 
          blur-sm"></div>
        
        <div className="relative z-20">
          <div className="mb-2 flex items-center justify-center">
            <span className="text-sm font-bold text-blue-800/70 
              bg-white/30 rounded-full px-3 py-1 mr-2">
              Step {step}
            </span>
          </div>
          
          <h3 className="text-xl font-bold mb-3 text-blue-900 
            dark:text-blue-100 
            group-hover:text-opacity-90 
            transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-blue-800/80 dark:text-blue-200/80 
            leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-1 
        bg-gradient-to-r from-transparent via-white/50 to-transparent 
        opacity-0 group-hover:opacity-100 
        transition-opacity duration-300"></div>
    </motion.div>
  )
}

const HowItWorksSection = () => {
  return (
    <motion.section 
      initial="hidden" 
      animate="visible" 
      variants={fadeIn} 
      className="py-16 px-4 max-w-6xl mx-auto"
    >
      <motion.h2 
        variants={fadeIn}
        className="text-4xl font-extrabold text-center mb-12 
        text-blue-900 dark:text-blue-100
        bg-clip-text text-transparent 
        bg-gradient-to-r from-blue-600 to-purple-600"
      >
        How Our Symptoms Checker Works
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <HowItWorksStep key={index} {...step} />
        ))}
      </div>
    </motion.section>
  )
}

export default HowItWorksSection