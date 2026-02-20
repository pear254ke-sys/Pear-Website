import "./pearapp.css"
function PearApp(props){
return ( <section class="project-item">
    <article class="project-icon-wrapper">
      <span class="project-icon">{props.image}</span> 
      <span class="project-name">{props.heading}</span>
    </article>
    <span class="project-status status-soon">{props.text}</span>
  </section>)
}
export default PearApp