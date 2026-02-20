import "./item.css"
import dark_logo from "../../assets/dark_logo.png"

function Item(props)
{
    return(
       
    <section class="review-card">
    <article class="image-container">
      <img src={props.image} alt="User Photo" class="profile-img"/>
    </article>
    <h3 class="heading">{props.name}</h3>
    <p class="review-text">
   {props.text}
    </p>
  </section>
  
    )
}
export default Item