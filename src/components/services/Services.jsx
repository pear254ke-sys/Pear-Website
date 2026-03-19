import "./services.css"
import{ serviceData} from "../../utils/data.js"
import Title from "../../components/title/Title"
function Services(){
    const services=serviceData.map((service)=>{
return <Service key={service.id} heading={service.heading} text={service.text} skills={service.skills}/>
    })
    return(
        <main class="services" id="services">
        <div class="services-container">
          <article class="services-header">
            <Title title="Our Services"/>
            <p>We build fast, scalable, and user-focused digital products.</p>
          </article>
      
          <section class="services-grid">
            {services}
          </section>
          </div>
          </main>
    )
}
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
export default Services