// SymptomSuggestions.jsx
const SymptomSuggestions = ({ commonSymptoms, handleSuggestionClick }) => {
  return (
    <div className="mb-6">
      <p className="text-sm text-blue-600 dark:text-blue-400 mb-3 font-medium">
        Common symptoms:
      </p>
      <div className="flex flex-wrap gap-2">
        {commonSymptoms.map((symptom) => (
          <button
            key={symptom}
            onClick={() => handleSuggestionClick(symptom)}
            className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-800 rounded-full hover:bg-blue-200 dark:hover:bg-blue-700 text-blue-700 dark:text-blue-200 transition-colors duration-200"
          >
            {symptom}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SymptomSuggestions;