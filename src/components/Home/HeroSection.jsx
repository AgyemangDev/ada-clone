import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowRight, Stethoscope, HeartPulse, ShieldCheck } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
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
    transition: {
      type: "spring",
      stiffness: 300
    }
  }
}

const BackgroundDecoration = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-300/20 dark:bg-blue-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-300/20 dark:bg-purple-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
  </div>
)

const FeatureHighlight = ({ icon: Icon, title }) => (
  <motion.div 
    variants={itemVariants}
    whileHover="hover"
    className="flex items-center bg-white/30 dark:bg-white/10 
      backdrop-blur-sm rounded-xl p-3 
      border border-white/50 dark:border-white/10
      shadow-sm hover:shadow-md 
      transition-all duration-300"
  >
    <Icon className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" />
    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
      {title}
    </span>
  </motion.div>
)

const HeroSection = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative text-center py-16 md:py-24 px-4 overflow-hidden"
    >
      <BackgroundDecoration />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-6xl font-extrabold mb-6 
            bg-clip-text text-transparent 
            bg-gradient-to-r from-blue-600 to-purple-600 
            dark:from-blue-400 dark:to-purple-400
            leading-tight"
        >
          Your Health, <br />Powered by Intelligent AI
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="text-xl text-blue-900/80 dark:text-blue-100/80 
            max-w-3xl mx-auto mb-10 
            leading-relaxed"
        >
          Revolutionizing healthcare with advanced AI technology. 
          Get instant, precise symptom analysis and personalized healthcare guidance.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12"
        >
          <FeatureHighlight icon={Stethoscope} title="Advanced Diagnosis" />
          <FeatureHighlight icon={HeartPulse} title="Real-time Monitoring" />
          <FeatureHighlight icon={ShieldCheck} title="Secure & Private" />
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Link
            to="/symptom-checker"
            className="inline-flex items-center px-8 py-4 
              rounded-full 
              bg-gradient-to-r from-blue-600 to-purple-600 
              text-white 
              font-bold 
              shadow-xl shadow-blue-500/30 
              hover:shadow-2xl 
              transform hover:-translate-y-1 
              transition-all duration-300 
              group"
          >
            Check Your Symptoms
            <ArrowRight 
              className="ml-3 h-6 w-6 
                transform group-hover:translate-x-1 
                transition-transform duration-300" 
            />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default HeroSection