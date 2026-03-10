import { createContext, useState } from "react"
import { modeData } from "./data.js"

export const ModeContext = createContext()

export function ModeProvider({ children }) {

  const [mode, setMode] = useState("pear")

  const toggleMode = () => {
    setMode(prev => prev === "pear" ? "gear" : "pear")
  }

  const data = modeData[mode]

  return (
    <ModeContext.Provider value={{ mode, toggleMode, data }}>
      {children}
    </ModeContext.Provider>
  )
}