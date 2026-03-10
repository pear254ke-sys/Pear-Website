import "./appspage.css"
import "../../App.css"
import Project from "../../components/projects/Project"
import Demo from "../../components/demo_section/Demo"
import FollowSection from "../../components/follow_section/FollowSection"
export default function AppsPage(props){
    return(
        <main class="main-content">
     <Project/>
<Demo/>
<FollowSection/>
    
      </main>
      
    )
}