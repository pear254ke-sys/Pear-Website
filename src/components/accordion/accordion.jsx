import React, { useState } from 'react';
import './accordion.css';
import AccordionItem from "../accordion_item/Accordion_item"
import {accordianData} from "../../utils/data"
function Accordion() {
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id); // Only one open at a time
  };

  return (
    <div className="accordion-container">
      {accordianData.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          content={item.content}
          isOpen={openId === item.id}
          onClick={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
export default Accordion