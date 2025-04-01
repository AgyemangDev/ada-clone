"use client"
import { motion, AnimatePresence } from "framer-motion"
import { AlertTriangle, Check, ThumbsUp, ThumbsDown, MapPin } from "lucide-react"

const PredictionResults = ({ prediction, isLoading, feedback, handleFeedback }) => {
  const getConfidenceBarColor = (confidence) => {
    if (confidence < 0.3) return "bg-red-500"
    if (confidence < 0.7) return "bg-yellow-500"
    return "bg-green-500"
  }

  const getDangerLevelColor = (level) => {
    if (level === "high") return "bg-red-100 text-red-800"
    if (level === "medium") return "bg-yellow-100 text-yellow-800"
    return "bg-green-100 text-green-800"
  }

  const openInMaps = () => {
    const { latitude, longitude } = prediction.location
    window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, "_blank")
  }

  return (
    <AnimatePresence>
      {prediction && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="glassmorphism rounded-xl p-6 mb-8 bg-white/90 backdrop-blur-sm shadow-lg border border-gray-100"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-1">{prediction.disease}</h2>
              <p className="text-gray-500">{prediction.diseaseCategory}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 max-w-[200px]">
                <div
                  className={`${getConfidenceBarColor(prediction.confidence)} h-2.5 rounded-full`}
                  style={{ width: `${prediction.confidence * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 mt-1">{Math.round(prediction.confidence * 100)}% confidence</p>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${getDangerLevelColor(prediction.dangerLevel)}`}
            >
              {prediction.dangerLevel === "high" && <AlertTriangle className="h-4 w-4 inline mr-1" />}
              {prediction.dangerLevel} Risk
            </div>
          </div>

          <p className="mb-4 text-gray-700">
            Treated by: <span className="font-medium">{prediction.treatedBy}</span>
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-md">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-blue-700 font-medium">Prevalence:</p>
                <p className="text-sm text-blue-600">{prediction.location.prevalence}</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openInMaps}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <MapPin className="h-4 w-4" />
                View on Map
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">Common Symptoms</h3>
              <ul className="space-y-2">
                {prediction.commonSymptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-3 text-gray-800">Recommended Treatments</h3>
              <ul className="space-y-2">
                {prediction.treatments.map((treatment, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 shrink-0 font-medium">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-2">Was this prediction helpful?</p>
            <div className="flex space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFeedback(true)}
                className={`px-4 py-2 rounded-md text-sm flex items-center transition-colors ${
                  feedback === "positive"
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <ThumbsUp className="h-4 w-4 mr-1" /> Yes
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleFeedback(false)}
                className={`px-4 py-2 rounded-md text-sm flex items-center transition-colors ${
                  feedback === "negative"
                    ? "bg-red-100 text-red-800 border border-red-200"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <ThumbsDown className="h-4 w-4 mr-1" /> No
              </motion.button>
            </div>
            {feedback && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm mt-2 text-blue-600">
                Thank you for your feedback!
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default PredictionResults

