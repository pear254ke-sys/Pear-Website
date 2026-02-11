import "./item.css"
import dark_logo from "../../assets/dark_logo.png"

function Item(props)
{
    return(
       
    <div class="review-card">
    <div class="image-container">
      <img src={props.image} alt="User Photo" class="profile-img"/>
    </div>
    <h3 class="heading">{props.name}</h3>
    <p class="review-text">
   {props.text}
    </p>
  </div>
  
    )
}
export default Item