import "./pearapp.css"
function PearApp(props){
return ( <div class="project-item">
    <div class="project-icon-wrapper">
      <span class="project-icon">{props.image}</span> 
      <span class="project-name">{props.heading}</span>
    </div>
    <span class="project-status status-soon">{props.text}</span>
  </div>)
}
export default PearApp