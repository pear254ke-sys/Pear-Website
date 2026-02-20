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
    <section className="accordion-container">
      {accordianData.map((item) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          heading={item.heading}
          text={item.text} 
          isOpen={openId === item.id}
          onClick={() => handleToggle(item.id)}
        />
      ))}
    </section>
  );
}

export default Accordion;
