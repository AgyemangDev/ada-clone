"use client"

import { createContext, useState, useEffect } from "react"
import { predictDisease, getHealthcareServices } from "../services/apiService"

export const SymptomContext = createContext()

export const SymptomProvider = ({ children }) => {
  const [symptoms, setSymptoms] = useState([])
  const [prediction, setPrediction] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [pastDiagnoses, setPastDiagnoses] = useState(() => {
    const saved = sessionStorage.getItem("pastDiagnoses")
    return saved ? JSON.parse(saved) : []
  })
  const [nearbyServices, setNearbyServices] = useState([])
  const [userLocation, setUserLocation] = useState(null)

  // Save past diagnoses to session storage
  useEffect(() => {
    sessionStorage.setItem("pastDiagnoses", JSON.stringify(pastDiagnoses))
  }, [pastDiagnoses])

  // Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.error("Error getting location:", error)
        },
      )
    }
  }, [])

  const addSymptom = (symptom) => {
    if (!symptoms.includes(symptom)) {
      setSymptoms([...symptoms, symptom])
    }
  }

  const removeSymptom = (symptom) => {
    setSymptoms(symptoms.filter((s) => s !== symptom))
  }

  const clearSymptoms = () => {
    setSymptoms([])
    setPrediction(null)
  }

  const getPrediction = async () => {
    if (symptoms.length === 0) {
      setError("Please enter at least one symptom")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const result = await predictDisease(symptoms)
      setPrediction(result)

      // Add to past diagnoses
      const newDiagnosis = {
        id: Date.now(),
        date: new Date().toISOString(),
        symptoms,
        prediction: result,
      }

      setPastDiagnoses([newDiagnosis, ...pastDiagnoses])
    } catch (err) {
      setError("Failed to get prediction. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const fetchNearbyServices = async (type = "hospital", radius = 5000) => {
    if (!userLocation) {
      setError("Location access is required to find nearby services")
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const services = await getHealthcareServices(userLocation, type, radius)
      setNearbyServices(services)
    } catch (err) {
      setError("Failed to fetch nearby healthcare services")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SymptomContext.Provider
      value={{
        symptoms,
        prediction,
        isLoading,
        error,
        pastDiagnoses,
        nearbyServices,
        userLocation,
        addSymptom,
        removeSymptom,
        clearSymptoms,
        getPrediction,
        fetchNearbyServices,
      }}
    >
      {children}
    </SymptomContext.Provider>
  )
}

