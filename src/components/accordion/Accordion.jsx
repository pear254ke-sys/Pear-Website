import './accordion.css';
import { useState } from 'react';
import { getCurrentTextData } from '../../Data_File/dataAbstract';
function Accordion() {
  const textData=getCurrentTextData("accordianData")
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id); 
  };

  return (
    <section className="accordion-container">
      {textData.map((item) => (
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
function AccordionItem (props) {
  return (
    <article className="accordion-item">
      <button
        className={`accordion-header ${props.isOpen ? 'active' : ''}`}
        onClick={props.onClick}
      >
        <span className="accordion-title">{props.heading}</span>
        <span className={`accordion-icon ${props.isOpen ? 'rotate' : ''}`}>▼</span>
      </button>
      <div
        className="accordion-collapse"
        style={{ 
          maxHeight: props.isOpen ? '500px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.3s ease' 
        }} 
      >
        <span className="accordion-content">
          {props.text}
        </span>
      </div>
    </article>
  );
};
export default Accordion;
