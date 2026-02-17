import "./pearapps.css"
import PearApp from "../pear_app/PearApp"
import {appData} from "../../utils/data.js"
function PearApps(){
    const apps=appData.map((app)=>{
return <PearApp heading={app.heading} image={app.image}/>
    })
    return ( <div class="project-list">
        {apps}
    </div>)
}
export default PearApps