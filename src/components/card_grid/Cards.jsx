import "./cards.css"
import {foundersData} from "../../utils/data"
function Cards(){
    const cards=foundersData.map((founder)=>{
        return <Card name={founder.name} image={founder.image} role={founder.role} text={founder.text}/>
    })
    return(
        <section className="wrapper">
            {cards}
        </section>
    )
}

function Card(props){
    return (
        <article className="card">
            <img src={props.image} alt="Card"/>
            <div className="card-content">
                <h4>{props.name}</h4>
                <h5>
                  {props.role}
                </h5>
                <p>{props.text}</p>
            </div>
        </article>
    )
}

export default Cards