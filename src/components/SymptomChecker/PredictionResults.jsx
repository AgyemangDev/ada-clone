import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { AlertTriangle, Check, ThumbsUp, ThumbsDown, Loader2 } from "lucide-react";

const PredictionResults = ({ prediction, isLoading, feedback, handleFeedback, getDangerLevelColor }) => {
  const getConfidenceBarColor = (confidence) => {
    if (confidence < 0.3) {
      return "bg-red-500";
    } else if (confidence < 0.7) {
      return "bg-yellow-500";
    } else {
      return "bg-green-500";
    }
  };

  return (
    <AnimatePresence>
      {prediction && !isLoading && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="glassmorphism rounded-xl p-6 mb-8"
        >
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">{prediction.disease}</h2>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mr-2 max-w-[200px]">
                  <div
                    className={`${getConfidenceBarColor(prediction.confidence)} h-2.5 rounded-full`}
                    style={{ width: `${prediction.confidence * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {Math.round(prediction.confidence * 100)}% confidence
                </span>
              </div>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${getDangerLevelColor(prediction.dangerLevel)}`}
            >
              {prediction.dangerLevel === "high" && (
                <AlertTriangle className="h-4 w-4 inline mr-1" />
              )}
              {prediction.dangerLevel.charAt(0).toUpperCase() +
                prediction.dangerLevel.slice(1)}{" "}
              Risk
            </div>
          </div>

          {prediction.dangerLevel === "high" && (
            <div className="bg-red-100 dark:bg-red-900/30 border-l-4 border-red-500 p-4 mb-6">
              <div className="flex">
                <AlertTriangle className="h-6 w-6 text-red-500 mr-2" />
                <div>
                  <p className="font-medium text-red-700 dark:text-red-400">
                    Seek immediate medical attention
                  </p>
                  <p className="text-sm text-red-600 dark:text-red-300">
                    This prediction indicates a potentially serious condition.
                    Please consult a healthcare professional as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Common Symptoms</h3>
              <ul className="space-y-2">
                {prediction.commonSymptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Recommended Actions</h3>
              <ul className="space-y-2">
                {prediction.treatments.map((treatment, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-primary/20 text-primary flex items-center justify-center mr-2 shrink-0">
                      {index + 1}
                    </div>
                    <span>{treatment}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Was this prediction helpful?
            </p>
            <div className="flex space-x-2">
              <button
                onClick={() => handleFeedback(true)}
                className={`px-4 py-2 rounded-md text-sm flex items-center ${
                  feedback === "positive"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <ThumbsUp className="h-4 w-4 mr-1" />
                Yes
              </button>
              <button
                onClick={() => handleFeedback(false)}
                className={`px-4 py-2 rounded-md text-sm flex items-center ${
                  feedback === "negative"
                    ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                <ThumbsDown className="h-4 w-4 mr-1" />
                No
              </button>
            </div>
            {feedback && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm mt-2 text-primary"
              >
                Thank you for your feedback!
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PredictionResults;