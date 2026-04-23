import React, { createContext, useState, useEffect } from "react"

export const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const key = "lang"
  let storedLang = localStorage.getItem(key)

  if (!storedLang) storedLang = "english"

  const [lang, setLang] = useState(storedLang)

  const changeLang = (lang) => {
    setLang(lang)
  }

  useEffect(() => {
    localStorage.setItem(key, lang)
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, changeLang }}>
      {children}
    </LanguageContext.Provider>
  )
}