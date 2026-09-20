import "./cards.css"
import Title from "../title/Title";
import { getFoundersData} from "../../Data_File/dataAbstract"
function Cards(){
    const {mergedFounderData,founderHeading}=getFoundersData()
  const cards=  mergedFounderData.map((founder)=>{
return <Card key={founder.id} name={founder.name} image={founder.image} role={founder.role} text={founder.text} alt={founder.alt}/>
    })
  
    return(
        <div>
            <Title title={founderHeading} />
  <section className="wrapper">
            {cards}
        </section>
        </div>
      
    )
}

function Card(props){
    return (
        <article className="card">
            <div className="card-image">
            <img src={props.image} alt={props.alt} className="image"/>
            </div>
            
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