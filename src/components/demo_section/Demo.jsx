import "./demo.css"
import GameCanvas from "../game/CanvasGame"
function Demo(props){
    return(   <section class="demo-section">
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
      </section>)
}
export default Demo