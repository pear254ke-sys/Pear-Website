import "./title.css";

function Title(props) {
  

  return (
    <article  className="title">
      <h1 className="title-heading">{props.title}</h1>
    </article>
  );
}

export default Title;
