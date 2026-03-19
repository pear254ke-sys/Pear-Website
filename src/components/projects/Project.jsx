import Title from "../title/Title"
import GameCanvas from "../game/CanvasGame"
import {appData} from "../../utils/data"
import "./project.css"
function Project(){
    return(<>
     <Demo/>
     
      <FollowSection/>
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
  function Demo(){
      return(<div>   <section class="projects-section">

        <Title title="Explore What We Built" />
        <p class="section-subtitle">
          See our projects and try out an interactive demo to understand the
          potential of peer-powered technologies.
        </p>
        <PearApps/>
      </section><section class="demo-section">
          <div class="demo-card">
            <div class="demo-text-content">
              <h2 class="card-title">Interactive Demo</h2>
              <p class="card-description">
                A small experiment showing how direct connections grow.
              </p>
              <button class="try-demo-button">Try the Demo</button>
            </div>
            <div class="demo-illustration">
              <GameCanvas/>
            </div>
          </div>
        </section></div>   )
  }
  function FollowSection()
{
  return(
      <section class="follow-section-title">
      <h2 class="section-title">Follow Pear</h2>
    </section>
  )
}
export default Project