import Title from "../title/Title"
import PearApps from "../pear_apps/PearApps"
import "./project.css"
function Project(){
    return(
        <section class="projects-section">

        <Title title="Explore What We Built" />
        <p class="section-subtitle">
          See our projects and try out an interactive demo to understand the
          potential of peer-powered technologies.
        </p>
    <PearApps/>
      </section>
    )
}
export default Project