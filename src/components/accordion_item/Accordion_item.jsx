import "./accordion_item.css";

const AccordionItem = (props) => {
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

export default AccordionItem;
