import Title from "../title/Title"
import { getAppData } from "../../Data_File/dataAbstract.jsx";

import GameCanvas from "../game/CanvasGame.jsx";
import "./project.css"
function Project(){
 
const {appPageHeading,followHeading,demoParagraph,demoHeading,demoText}=getAppData()

    return(<>
     <Demo heading={appPageHeading} paragraph1={demoParagraph}  demoHeading={demoHeading} />
     <Game text={demoText}/>
      <FollowSection heading={followHeading}/>
    </>
     
    )
}
function Game(props){
  return <div className="game">
    <p className="game-heading margin">{props.text}</p>
    <GameCanvas/>
  </div>
}
function PearApps(){
  const {appData}=getAppData()
  const apps=appData.map((app)=>{
return <PearApp heading={app.heading} image={app.image}/>
  })
  return ( <section class="project-list">
  {apps}
  </section>)
}
function PearApp(props){
  return ( <section className="project-section margin">
      <div class="project-item">
        <img src={props.image}/>
      </div>
        <span class="project-name">{props.heading}</span> 
    </section>)
  }
  function Demo(props){

      return(<div>   <section class="projects-section">

        <Title title={props.heading} />
        <p class="section-subtitle margin">
          {props.paragraph1}
        </p>
        <PearApps/>
      </section></div>   )
  }
  function FollowSection(props)
{
  return(
      <section class="follow-section-title">
      <h2 class="section-title">{props.followHeading}</h2>
    </section>
  )
}
export default Project