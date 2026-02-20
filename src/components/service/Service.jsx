import "./service.css";
function Service(props) {
  const skills = Object.entries(props.skills).map(([key, value], index) => {
    return (
      <li key={key || index}>
        {value}
        <br />
      </li>
    );
  });

  return (
    <section className="service-card">
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
      <ul>{skills}</ul>
    </section>
  );
}

export default Service;
