import "./services.css"
import { getImageFromData,getCurrentTextData } from "../../Data_File/dataAbstract";
import Title from "../../components/title/Title"
function Services(){
  const servicePageParagraph=getCurrentTextData("pageText","servicePageParagraph");
  const servicePageHeading=getCurrentTextData("pageText","servicePageHeading");
  const serviceData=getCurrentTextData("serviceData");
  const services=serviceData.map((service)=>{
     let servicesData=getImageFromData("serviceData",service.id)

      return <Service heading={servicesData.heading}  text={service.text}  id={service.id} skills={servicesData.skills}/>
  })
    return(
        <main class="services" id="services">
        <div class="services-container">
          <article class="services-header">
            <Title title={servicePageHeading}/>
            <p>{servicePageParagraph}</p>
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