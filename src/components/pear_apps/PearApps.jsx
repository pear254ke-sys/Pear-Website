import "./pearapps.css"
import PearApp from "../pear_app/PearApp"
import {appData} from "../../utils/data.js"
function PearApps(){
    const apps=appData.map((app)=>{
return <PearApp heading={app.heading} image={app.image}/>
    })
    return ( <section class="project-list">
        {apps}
    </section>)
}
export default PearApps