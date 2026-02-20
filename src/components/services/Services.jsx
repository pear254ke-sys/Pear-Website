import "./services.css"
import{ serviceData} from "../../utils/data.js"
import Service from "../service/Service.jsx"
function Services(){
    const services=serviceData.map((service)=>{
return <Service key={service.id} heading={service.heading} text={service.text} skills={service.skills}/>
    })
    return(
        <main class="services" id="services">
        <div class="services-container">
          <article class="services-header">
            <h2>Our Services</h2>
            <p>We build fast, scalable, and user-focused digital products.</p>
          </article>
      
          <section class="services-grid">
            {services}
          </section>
          </div>
          </main>
    )
}
export default Services