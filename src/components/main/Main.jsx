import { ModeContext } from "../../utils/ModeContext"
import Section from "../section/Section"
import { useContext } from "react"

function Main(){
     const {data} = useContext(ModeContext)
    const sections=data.sectionData.map((section)=>{
return <Section key={section.id} id={section.id} image={section.image} heading={section.heading} body={section.body} direction={section.direction}/>
    })
return(<main className="main-class">
    
    <section className="main">{sections}</section>
    
</main>)
}
export default Main