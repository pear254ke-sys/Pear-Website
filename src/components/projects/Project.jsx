import Title from "../title/Title"
import GameCanvas from "../game/CanvasGame"
import {appData} from "../../Data_File/data.js"
import { getCurrentTextData } from "../../Data_File/dataAbstract.jsx";
import { useState } from "react";
import "./project.css"
function Project(){
  const pageInfo=getCurrentTextData("pageText");
  console.log(pageInfo)

    return(<>
     <Demo heading={pageInfo["appPageHeading"]} paragraph1={pageInfo["demoParagraph"]} btnTxt={pageInfo["appPagePlayBtn"]}  paragraph2={pageInfo["demoParagraph"]} demoHeading={pageInfo["demoHeading"]} />
     
      <FollowSection heading={pageInfo["followHeading"]}/>
    </>
     
    )
}
function PearApps(){
  const apps=appData.map((app)=>{
return <PearApp heading={app.heading} image={app.image}/>
  })
  return ( <section class="project-list">
  {apps}
  </section>)
}
function PearApp(props){
  return ( <section class="project-item">
      <article class="project-icon-wrapper">
        <span class="project-icon">{props.image}</span> 
        <span class="project-name">{props.heading}</span>
      </article>
      <span class="project-status status-soon">{props.text}</span>
    </section>)
  }
  function Demo(props){
    const [state, setState] = useState(true);
   const handleClick = () => setState(prev => !prev);;
      return(<div>   <section class="projects-section">

        <Title title={props.heading} />
        <p class="section-subtitle">
          {props.paragraph1}
        </p>
        <PearApps/>
      </section><section class="demo-section">
          <div class="demo-card">
            <div class="demo-text-content">
              <h2 class="card-title">{props.heading}</h2>
              <p class="card-description">
                {props.paragraph2}
              </p>
              <button class="try-demo-button" onClick={handleClick}>{props.btnTxt}</button>
            </div>
            <div class="demo-illustration">
              <GameCanvas gameState={state}/>
            </div>
          </div>
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