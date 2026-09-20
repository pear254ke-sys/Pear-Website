import "./banner.css"
import { NavLink } from 'react-router';
import { getBannerData} from "../../Data_File/dataAbstract";
function Banner(){
    const bannerData=getBannerData()
   const linkText=bannerData["bannerText"]
   const bannerImage=bannerData["banner"]  
   
  
    return(
        <section className="banner-container">
            <article className="banner-content">
            <h1 className="banner-heading transition"><p>Peer-powered technology<br/>for direct connection</p></h1>
            <NavLink to="/apps" className="btn transition">{linkText}</NavLink>
            
            </article>
            
<img src={bannerImage} alt="image of pear banner" className="transition banner-image responsive-image"/>
        </section>
    )
}
export default Banner