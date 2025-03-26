import { X } from "lucide-react";
import { motion } from "framer-motion";

const CurrentSymptoms = ({ symptoms, clearSymptoms, removeSymptom }) => {
  return (
    <>
      {symptoms.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg shadow-md"
        >
          <div className="flex justify-between items-center mb-3">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
              Your symptoms:
            </p>
            <button
              onClick={clearSymptoms}
              className="text-xs text-red-500 hover:text-red-600 font-medium transition"
            >
              Clear all
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {symptoms.map((symptom, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 rounded-full shadow-sm transition-all"
              >
                <span className="text-sm font-medium">{symptom}</span>
                <button
                  onClick={() => removeSymptom(symptom)}
                  className="ml-2 p-1 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 transition"
                >
                  <X className="h-3 w-3 text-blue-700 dark:text-blue-200" />
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default CurrentSymptoms;