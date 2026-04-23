import "./cards.css"
import Title from "../title/Title";
import { getCurrentTextData,getImageFromData } from "../../Data_File/dataAbstract"
function Cards(){
    const foundersData=getCurrentTextData("foundersData");
    const homePageFoundersHeading=getCurrentTextData("pageText","homePageFoundersHeading")
    const cards=foundersData.map((founder)=>{
       let founderData=getImageFromData("foundersData",founder.id)

        return <Card key={founder.id} name={founderData.name} image={founderData.image} role={founderData.role} text={founder.text} alt={founderData.alt}/>
    })
    return(
        <div>
            <Title title={homePageFoundersHeading} />
  <section className="wrapper">
            {cards}
        </section>
        </div>
      
    )
}

function Card(props){
    return (
        <article className="card">
            <img src={props.image} alt={props.alt}/>
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