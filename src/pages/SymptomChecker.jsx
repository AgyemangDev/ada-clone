// SymptomChecker.jsx
"use client";

import { useState, useContext, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SymptomContext } from "../context/SymptomContext";
import useSpeechRecognition from "../hooks/useSpeechRecognition"; 
import SymptomInput from "../components/SymptomChecker/SymptomInput";
import SymptomSuggestions from "../components/SymptomChecker/SymptomSuggestions";
import CurrentSymptoms from "../components/SymptomChecker/CurrentSymptoms";
import PredictionResults from "../components/SymptomChecker/PredictionResults";
import Disclaimer from "../components/SymptomChecker/Disclaimer";
import ActionButton from "../components/SymptomChecker/ActionButton";

const SymptomChecker = () => {
  const {
    symptoms,
    prediction,
    isLoading,
    error,
    addSymptom,
    removeSymptom,
    clearSymptoms,
    getPrediction,
  } = useContext(SymptomContext);

  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState(null);
  const {
    isListening,
    transcript,
    error: speechError,
    startListening,
    stopListening,
    setTranscript,
  } = useSpeechRecognition();

  // Common symptoms suggestions
  const commonSymptoms = [
    "Headache",
    "Fever",
    "Cough",
    "Fatigue",
    "Nausea",
    "Dizziness",
    "Chest Pain",
    "Shortness of Breath",
    "Abdominal Pain",
    "Sore Throat",
    "Tremors",
    "Muscle Weakness",
    "Uncontrollable Movements",
    "Burning Sensation During Urination",
    "Cloudy Urine",
    "Strong-Smelling Urine",
    "Pelvic Pain",
    "Jaundice",
    "Dark Urine",
    "Light Stools"
  ];

  // Update input when speech recognition provides a transcript
  useEffect(() => {
    if (transcript) {
      setInputValue(transcript);
    }
  }, [transcript]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      addSymptom(inputValue.trim());
      setInputValue("");
      setTranscript("");
    }
  };

  const handleSuggestionClick = (symptom) => {
    addSymptom(symptom);
  };

  const handleVoiceInput = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleFeedback = (isPositive) => {
    setFeedback(isPositive ? "positive" : "negative");
    // In a real app, you would send this feedback to your backend
    setTimeout(() => setFeedback(null), 3000);
  };

  const getDangerLevelColor = (level) => {
    switch (level) {
      case "low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "high":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-6">AI Symptom Checker</h1>

        {/* Input Form */}
        <div className="glassmorphism rounded-xl p-6 mb-8">
          <SymptomInput
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleSubmit={handleSubmit}
            handleVoiceInput={handleVoiceInput}
            isListening={isListening}
            speechError={speechError}
          />

          {/* Symptom Suggestions */}
          <SymptomSuggestions
            commonSymptoms={commonSymptoms}
            handleSuggestionClick={handleSuggestionClick}
          />

          {/* Current Symptoms */}
          <CurrentSymptoms
            symptoms={symptoms}
            clearSymptoms={clearSymptoms}
            removeSymptom={removeSymptom}
          />
        </div>

        {/* Action Button */}
        <ActionButton
          symptoms={symptoms}
          isLoading={isLoading}
          error={error}
          getPrediction={getPrediction}
        />

        {/* Prediction Results */}
        <PredictionResults
          prediction={prediction}
          isLoading={isLoading}
          feedback={feedback}
          handleFeedback={handleFeedback}
          getDangerLevelColor={getDangerLevelColor}
        />

        {/* Disclaimer */}
        <Disclaimer />
      </motion.div>
    </div>
  );
};

export default SymptomChecker;