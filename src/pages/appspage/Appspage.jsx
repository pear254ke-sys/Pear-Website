import "./appspage.css"
import "../../App.css"
import GameCanvas from "../../components/game/CanvasGame"
import PearApps from "../../components/pear_apps/PearApps"
export default function AppsPage(){
    return(
        <main class="main-content">
        <section class="projects-section">
          <h1 class="section-title">Explore What We Built</h1>
          <p class="section-subtitle">
            See our projects and try out an interactive demo to understand the
            potential of peer-powered technologies.
          </p>
      <PearApps/>
        </section>
        <section class="demo-section">
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
        </section>
        <section class="follow-section-title">
          <h2 class="section-title">Follow Pear</h2>
        </section>
      </main>
      
    )
}