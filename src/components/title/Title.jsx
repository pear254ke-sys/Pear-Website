import "./title.css";
import { ModeContext } from "../../Data_File/ModeContext";
import { useContext } from "react"
function Title(props) {
  const {data} = useContext(ModeContext)

  return (
    <article  className="title">
      <h1 className="title-heading">{props.title}</h1>
      <img src={data.vine} className="title-img" alt="image of a pear vine" />
    </article>
  );
}

export default Title;
