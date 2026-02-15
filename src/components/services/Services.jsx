import "./services.css"
import{ serviceData} from "../../utils/data.js"
import Service from "../service/Service.jsx"
function Services(){
    const services=serviceData.map((service)=>{
return <Service key={service.id} heading={service.heading} text={service.text} skills={service.skills}/>
    })
    return(
        <section class="services" id="services">
        <div class="services-container">
          <div class="services-header">
            <h2>Our Services</h2>
            <p>We build fast, scalable, and user-focused digital products.</p>
          </div>
      
          <div class="services-grid">
            {services}
          </div>
          </div>
          </section>
    )
}
export default Services