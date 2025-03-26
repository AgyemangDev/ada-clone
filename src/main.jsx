import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import { SymptomProvider } from "./context/SymptomContext"
import { ThemeProvider } from "./context/ThemeContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <SymptomProvider>
        <App />
      </SymptomProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

