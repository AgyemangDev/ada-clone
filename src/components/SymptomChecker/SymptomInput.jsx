import { Mic, MicOff, Plus } from "lucide-react";
import { motion } from "framer-motion";

const SymptomInput = ({
  inputValue,
  setInputValue,
  handleSubmit,
  handleVoiceInput,
  isListening,
  speechError,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-3">
      <div className="flex items-center border border-indigo-200 dark:border-indigo-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 focus-within:ring-2 focus-within:ring-indigo-500 transition-all">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a symptom..."
          className="flex-1 px-4 py-3 text-gray-800 dark:text-gray-200 bg-transparent focus:outline-none"
        />
        <button
          type="button"
          onClick={handleVoiceInput}
          className={`p-3 transition ${
            isListening ? "bg-red-500 text-white" : "bg-indigo-100 dark:bg-indigo-700"
          } hover:bg-opacity-80`}
          aria-label={isListening ? "Stop listening" : "Start voice input"}
        >
          {isListening ? (
            <MicOff className="h-5 w-5 text-white" />
          ) : (
            <Mic className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
          )}
        </button>
        <button
          type="submit"
          className="p-3 bg-indigo-500 text-white rounded-r-lg hover:bg-indigo-600 transition-colors duration-200"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      {isListening && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="text-sm text-indigo-500 font-medium"
        >
          🎙 Listening... Speak your symptom clearly.
        </motion.div>
      )}
      {speechError && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          className="text-sm text-red-500 font-medium"
        >
          ⚠ {speechError}
        </motion.div>
      )}
    </form>
  );
};

export default SymptomInput;