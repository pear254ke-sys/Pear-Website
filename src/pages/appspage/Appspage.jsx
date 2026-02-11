import "./appspage.css"
import GameCanvas from "../../components/game/CanvasGame"
export default function AppsPage(){
    return(
        <main class="main-content">
        <section class="projects-section">
          <h1 class="section-title">Explore What We Built</h1>
          <p class="section-subtitle">
            See our projects and try out an interactive demo to understand the
            potential of peer-powered technologies.
          </p>
      
          <div class="project-list">
            <div class="project-item">
              <div class="project-icon-wrapper">
                <span class="project-icon">🌐</span> 
                <span class="project-name">Pear Network</span>
              </div>
              <span class="project-status status-soon">Coming Soon</span>
            </div>
            <div class="project-item">
              <div class="project-icon-wrapper">
                <span class="project-icon">🎧</span>
                <span class="project-name">AudioShare</span>
              </div>
              <span class="project-status status-progress">In Progress</span>
            </div>
            <div class="project-item">
              <div class="project-icon-wrapper">
                <span class="project-icon">📸</span>
                <span class="project-name">CamShare</span>
              </div>
              <span class="project-status status-planned">Planned</span>
            </div>
          </div>
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