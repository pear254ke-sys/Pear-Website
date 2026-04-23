import { useState } from 'react';
import './selectbox.css'; 
import { useContext } from "react"
import { LanguageContext } from "../../Data_File/TranslatorContext"
function Selectbox() {
  const {lang, changeLang } = useContext(LanguageContext)
  

  const handleChange = (event) => {
    changeLang(event.target.value);
  };

  return (
    <div className="select-container">
      <label className="select-label" htmlFor="language-select">
        Lang:
      </label>
      <div className="select-wrapper">
        <select 
          id="language-select"
          className="custom-select"
          value={lang}
          onChange={handleChange}
        >
          <option value="english">English</option>
          <option value="swahili">Swahili</option>
          <option value="french">French</option>
          <option value="german">German</option>
        </select>

      </div>
    </div>
  );
}

export default Selectbox;
