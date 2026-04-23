import "./banner.css"
import { NavLink } from 'react-router';
import { getCurrentImageData,getCurrentTextData } from "../../Data_File/dataAbstract";
function Banner(){

   const linkText=getCurrentTextData("bannerData","bannerText")
   const bannerImage=getCurrentImageData("bannerData","banner")    
   const bannerBackground=getCurrentImageData("bannerData","bannerBackground")
    return(
        <section className="banner-container">
            <article className="banner-content">
            <h1 className="banner-heading transition"><p>Pear-powered technology<br/>for direct connection</p></h1>
            <NavLink to="/apps" className="btn transition">{linkText}</NavLink>
            
            </article>
            
<img src={bannerImage} alt="image of pear banner" className="transition banner-image responsive-image"/>
<img src={bannerBackground} alt="image of pear background" className="background"/>
        </section>
    )
}
export default Banner