import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const ActionButton = ({ symptoms, isLoading, error, getPrediction }) => {
  return (
    <div className="text-center mb-8">
      <button
        onClick={getPrediction}
        disabled={symptoms.length === 0 || isLoading}
        className={`px-6 py-3 rounded-full font-medium flex items-center justify-center mx-auto transition-colors duration-200 ${
          symptoms.length === 0
            ? "bg-gray-300 text-gray-600 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400"
            : isLoading
              ? "bg-blue-300 text-blue-800 dark:bg-blue-700 dark:text-blue-200 cursor-wait"
              : "bg-blue-500 text-white hover:bg-blue-600"
        }`}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Analyzing...
          </>
        ) : (
          "Get Prediction"
        )}
      </button>

      {error && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-red-500 mt-2"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

export default ActionButton;