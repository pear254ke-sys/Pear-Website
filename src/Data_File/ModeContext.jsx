
import React, { createContext, useState, useEffect } from 'react';
import { modeData } from "./data.js"

export const ModeContext = createContext()

export function ModeProvider({ children }) {
const key="mode"
let storedMode=localStorage.getItem(key)
if(storedMode===null){
  storedMode="pear"
}
  const [mode, setMode] = useState(storedMode)

  const toggleMode = () => {
    setMode(prev => prev === "pear" ? "gear" : "pear")
    
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem(key,mode)
  }, [mode]);
  const data = modeData[mode]
  return (
    <ModeContext.Provider value={{ mode, toggleMode, data }}>
      {children}
    </ModeContext.Provider>
  )
}