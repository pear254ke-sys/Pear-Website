import React, { useState } from 'react';
import './accordion.css';
import AccordionItem from "../accordion_item/Accordion_item";
import { accordianData } from "../../utils/data";

function Accordion() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id); 
  };

  return (
    <div className="accordion-container">
      {accordianData.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          heading={item.heading}
          text={item.text} // Changed from item.content to item.text to match your data
          isOpen={openId === item.id}
          onClick={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}

export default Accordion;
