import { useState } from "react";
import "./togglebtn.css";
import { ModeContext } from '../../utils/ModeContext';
import { useContext } from "react"
export default function ToggleBtn() {
  const { mode, toggleMode} = useContext(ModeContext)

  return (
    <button
      className={`toggle-btn ${mode}`}
      onClick={toggleMode}
    >
      <span className="icon">
        {mode==='gear' ? <GearIcon /> : <PearIcon />}
      </span>
    </button>
  );
}

function PearIcon() {
  return (
    <svg viewBox="0 0 24 24" className="svg">
      <path d="M12 3C10.5 3 9.5 4 9.5 5.5C9.5 6.2 9.8 6.8 10.2 7.3C7.5 8.5 6 10.8 6 13.5C6 17 8.7 20 12 20C15.3 20 18 17 18 13.5C18 10.8 16.5 8.5 13.8 7.3C14.2 6.8 14.5 6.2 14.5 5.5C14.5 4 13.5 3 12 3Z" />
      <path d="M13 2C13.5 2 14 2.5 14 3C14 3.5 13.5 4 13 4C12.5 4 12 3.5 12 3C12 2.5 12.5 2 13 2Z" />
    </svg>
  );
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" className="svg">
      <path d="M19.4 13.5C19.5 13 19.5 12.5 19.5 12C19.5 11.5 19.5 11 19.4 10.5L21 9.2C21.2 9 21.3 8.7 21.2 8.5L19.7 5.5C19.6 5.2 19.3 5.1 19 5.2L17.1 6C16.3 5.4 15.4 5 14.5 4.8L14.2 2.8C14.2 2.5 14 2.3 13.7 2.3H10.3C10 2.3 9.8 2.5 9.8 2.8L9.5 4.8C8.6 5 7.7 5.4 6.9 6L5 5.2C4.7 5.1 4.4 5.2 4.3 5.5L2.8 8.5C2.7 8.7 2.8 9 3 9.2L4.6 10.5C4.5 11 4.5 11.5 4.5 12C4.5 12.5 4.5 13 4.6 13.5L3 14.8C2.8 15 2.7 15.3 2.8 15.5L4.3 18.5C4.4 18.8 4.7 18.9 5 18.8L6.9 18C7.7 18.6 8.6 19 9.5 19.2L9.8 21.2C9.8 21.5 10 21.7 10.3 21.7H13.7C14 21.7 14.2 21.5 14.2 21.2L14.5 19.2C15.4 19 16.3 18.6 17.1 18L19 18.8C19.3 18.9 19.6 18.8 19.7 18.5L21.2 15.5C21.3 15.3 21.2 15 21 14.8L19.4 13.5ZM12 15.5C10.1 15.5 8.5 13.9 8.5 12C8.5 10.1 10.1 8.5 12 8.5C13.9 8.5 15.5 10.1 15.5 12C15.5 13.9 13.9 15.5 12 15.5Z"/>
    </svg>
  );
}