import {sectionData} from "../../utils/data"
import Section from "../section/Section"


function Main(){
    const sections=sectionData.map((section)=>{
return <Section key={section.id} id={section.id} image={section.image} heading={section.heading} body={section.body} direction={section.direction}/>
    })
return(<div className="main-class">
    
    <div className="main">{sections}</div>
    
</div>)
}
export default Main