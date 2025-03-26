"use client"

import { useState, useContext, useEffect } from "react"
import { motion } from "framer-motion"
import { SymptomContext } from "../context/SymptomContext"
import { Calendar, Clock, AlertTriangle, Trash2, LineChart, Plus } from "lucide-react"
import { ResponsiveContainer, LineChart as ReChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const HealthTracker = () => {
  const { pastDiagnoses } = useContext(SymptomContext)
  const [selectedDate, setSelectedDate] = useState(new Date())
  const [symptomTracker, setSymptomTracker] = useState(() => {
    const saved = localStorage.getItem("symptomTracker")
    return saved ? JSON.parse(saved) : []
  })
  const [newSymptom, setNewSymptom] = useState("")
  const [newSeverity, setNewSeverity] = useState(5)
  const [medications, setMedications] = useState(() => {
    const saved = localStorage.getItem("medications")
    return saved ? JSON.parse(saved) : []
  })
  const [newMedication, setNewMedication] = useState("")
  const [newDosage, setNewDosage] = useState("")
  const [newTime, setNewTime] = useState("08:00")

  // Save symptom tracker and medications to localStorage
  useEffect(() => {
    localStorage.setItem("symptomTracker", JSON.stringify(symptomTracker))
    localStorage.setItem("medications", JSON.stringify(medications))
  }, [symptomTracker, medications])

  const addSymptomEntry = (e) => {
    e.preventDefault()
    if (newSymptom.trim()) {
      const newEntry = {
        id: Date.now(),
        date: new Date().toISOString(),
        symptom: newSymptom,
        severity: newSeverity,
      }
      setSymptomTracker([...symptomTracker, newEntry])
      setNewSymptom("")
      setNewSeverity(5)
    }
  }

  const addMedication = (e) => {
    e.preventDefault()
    if (newMedication.trim() && newDosage.trim()) {
      const newEntry = {
        id: Date.now(),
        medication: newMedication,
        dosage: newDosage,
        time: newTime,
        taken: false,
      }
      setMedications([...medications, newEntry])
      setNewMedication("")
      setNewDosage("")
      setNewTime("08:00")
    }
  }

  const toggleMedicationTaken = (id) => {
    setMedications(medications.map((med) => (med.id === id ? { ...med, taken: !med.taken } : med)))
  }

  const deleteMedication = (id) => {
    setMedications(medications.filter((med) => med.id !== id))
  }

  const deleteSymptomEntry = (id) => {
    setSymptomTracker(symptomTracker.filter((entry) => entry.id !== id))
  }

  // Prepare data for chart
  const prepareChartData = () => {
    const symptomMap = {}

    // Group by symptom name
    symptomTracker.forEach((entry) => {
      if (!symptomMap[entry.symptom]) {
        symptomMap[entry.symptom] = []
      }
      symptomMap[entry.symptom].push({
        date: new Date(entry.date).toLocaleDateString(),
        severity: entry.severity,
      })
    })

    // Convert to format needed for Recharts
    const chartData = []
    const symptoms = Object.keys(symptomMap)

    // Get all unique dates
    const allDates = new Set()
    symptoms.forEach((symptom) => {
      symptomMap[symptom].forEach((entry) => {
        allDates.add(entry.date)
      })
    })

    // Create data points for each date
    Array.from(allDates)
      .sort((a, b) => new Date(a) - new Date(b))
      .forEach((date) => {
        const dataPoint = { date }

        symptoms.forEach((symptom) => {
          const entry = symptomMap[symptom].find((e) => e.date === date)
          dataPoint[symptom] = entry ? entry.severity : null
        })

        chartData.push(dataPoint)
      })

    return { chartData, symptoms }
  }

  const { chartData, symptoms } = prepareChartData()

  // Generate random colors for chart lines
  const getLineColor = (index) => {
    const colors = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"]
    return colors[index % colors.length]
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-6">Health Tracker</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Symptom Tracker */}
          <div className="glassmorphism rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Symptom Tracker</h2>

            <form onSubmit={addSymptomEntry} className="mb-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="symptom" className="block text-sm font-medium mb-1">
                    Symptom
                  </label>
                  <input
                    type="text"
                    id="symptom"
                    value={newSymptom}
                    onChange={(e) => setNewSymptom(e.target.value)}
                    placeholder="Enter symptom..."
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="severity" className="block text-sm font-medium mb-1">
                    Severity (1-10)
                  </label>
                  <div className="flex items-center">
                    <input
                      type="range"
                      id="severity"
                      min="1"
                      max="10"
                      value={newSeverity}
                      onChange={(e) => setNewSeverity(Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="ml-2 w-8 text-center">{newSeverity}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Symptom
                </button>
              </div>
            </form>

            {symptomTracker.length > 0 ? (
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {symptomTracker
                  .slice()
                  .reverse()
                  .map((entry) => (
                    <motion.div
                      key={entry.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div>
                        <div className="font-medium">{entry.symptom}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(entry.date).toLocaleDateString()}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            entry.severity >= 8
                              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                              : entry.severity >= 5
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                                : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          }`}
                        >
                          {entry.severity}/10
                        </div>
                        <button
                          onClick={() => deleteSymptomEntry(entry.id)}
                          className="ml-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                No symptoms tracked yet. Add your first symptom above.
              </div>
            )}
          </div>

          {/* Medication Reminders */}
          <div className="glassmorphism rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Medication Reminders</h2>

            <form onSubmit={addMedication} className="mb-6">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="medication" className="block text-sm font-medium mb-1">
                    Medication
                  </label>
                  <input
                    type="text"
                    id="medication"
                    value={newMedication}
                    onChange={(e) => setNewMedication(e.target.value)}
                    placeholder="Enter medication name..."
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="dosage" className="block text-sm font-medium mb-1">
                    Dosage
                  </label>
                  <input
                    type="text"
                    id="dosage"
                    value={newDosage}
                    onChange={(e) => setNewDosage(e.target.value)}
                    placeholder="e.g., 500mg, 2 pills"
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium mb-1">
                    Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    value={newTime}
                    onChange={(e) => setNewTime(e.target.value)}
                    className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Medication
                </button>
              </div>
            </form>

            {medications.length > 0 ? (
              <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
                {medications.map((med) => (
                  <motion.div
                    key={med.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-3 rounded-lg ${
                      med.taken ? "bg-gray-100 dark:bg-gray-700 opacity-70" : "bg-gray-50 dark:bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className={`font-medium ${med.taken ? "line-through" : ""}`}>{med.medication}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">{med.dosage}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {med.time}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={med.taken}
                          onChange={() => toggleMedicationTaken(med.id)}
                          className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <button
                          onClick={() => deleteMedication(med.id)}
                          className="ml-2 text-gray-400 hover:text-red-500 transition-colors duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-6 text-gray-500 dark:text-gray-400">
                No medications added yet. Add your first medication above.
              </div>
            )}
          </div>
        </div>

        {/* Symptom Trends Chart */}
        <div className="glassmorphism rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Symptom Trends</h2>

          {symptomTracker.length > 0 ? (
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ReChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[0, 10]} />
                  <Tooltip />
                  <Legend />
                  {symptoms.map((symptom, index) => (
                    <Line
                      key={symptom}
                      type="monotone"
                      dataKey={symptom}
                      stroke={getLineColor(index)}
                      activeDot={{ r: 8 }}
                      connectNulls
                    />
                  ))}
                </ReChart>
              </ResponsiveContainer>
            </div>
          ) : (
            <div className="text-center py-12 text-gray-500 dark:text-gray-400">
              <LineChart className="h-12 w-12 mx-auto mb-4 text-gray-400" />
              <p>Track your symptoms to see trends over time.</p>
            </div>
          )}
        </div>

        {/* Past Diagnoses */}
        <div className="glassmorphism rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Past Diagnoses</h2>

          {pastDiagnoses.length > 0 ? (
            <div className="space-y-4">
              {pastDiagnoses.map((diagnosis) => (
                <motion.div
                  key={diagnosis.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">{diagnosis.prediction.disease}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {new Date(diagnosis.date).toLocaleString()}
                      </p>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        diagnosis.prediction.dangerLevel === "high"
                          ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                          : diagnosis.prediction.dangerLevel === "medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                            : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                      }`}
                    >
                      {diagnosis.prediction.dangerLevel.charAt(0).toUpperCase() +
                        diagnosis.prediction.dangerLevel.slice(1)}{" "}
                      Risk
                    </div>
                  </div>

                  <div className="mb-2">
                    <p className="text-sm font-medium">Symptoms:</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {diagnosis.symptoms.map((symptom, index) => (
                        <span key={index} className="px-2 py-0.5 bg-gray-100 dark:bg-gray-700 rounded-full text-xs">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </div>

                  {diagnosis.prediction.dangerLevel === "high" && (
                    <div className="flex items-start mt-2 text-sm text-red-600 dark:text-red-400">
                      <AlertTriangle className="h-4 w-4 mr-1 shrink-0" />
                      <span>This condition required immediate medical attention.</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              No past diagnoses found. Use the Symptom Checker to get your first diagnosis.
            </div>
          )}
        </div>
      </motion.div>
    </div>
  )
}

export default HealthTracker

