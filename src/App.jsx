"use client"

import { useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeContext } from "./context/ThemeContext"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import HomePage from "./pages/HomePage"
import SymptomChecker from "./pages/SymptomChecker"
import HealthcareLocator from "./pages/HealthcareLocator"
import HealthTracker from "./pages/HealthTracker"
import NotFound from "./pages/NotFound"

function App() {
  const { darkMode } = useContext(ThemeContext)

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Router>
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/symptom-checker" element={<SymptomChecker />} />
              <Route path="/healthcare-locator" element={<HealthcareLocator />} />
              <Route path="/health-tracker" element={<HealthTracker />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  )
}

export default App

