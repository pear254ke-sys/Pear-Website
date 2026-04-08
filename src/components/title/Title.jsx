import "./title.css";
import vertical_vine from "../../assets/vertical_vine.png"
function Title(props) {
  

  return (
    <article  className="title">
      <h1 className="title-heading">{props.title}</h1>
      <img src={vertical_vine} className="title-img"/>
    </article>
  );
}

export default Title;
