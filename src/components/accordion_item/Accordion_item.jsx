import "./accordion_item.css"
const AccordionItem = ({ title, content, isOpen, onClick, id }) => {
  return (
    <div className="accordion-item">
      <button
        className={`accordion-header ${isOpen ? 'active' : ''}`}
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`content-${id}`}
        id={`header-${id}`}
      >
        <span className="accordion-title">{title}</span>
        <span className={`accordion-icon ${isOpen ? 'rotate' : ''}`}>▼</span>
      </button>
      <div
        className="accordion-collapse"
        id={`content-${id}`}
        role="region"
        aria-labelledby={`header-${id}`}
        style={{ maxHeight: isOpen ? '500px' : '0' }} // Standard way to animate height
      >
        <div className="accordion-content">
          {content}
        </div>
      </div>
    </div>
  );
};
export default AccordionItem