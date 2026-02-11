import banner from "../../assets/banner.svg"
import "./banner.css"
import { NavLink } from 'react-router';
function Banner(){
    return(
        <div className="banner-container">
            <div className="banner-content">
            <h1 className="banner-heading"><span>Pear-powered technology</span><span>for direct connection</span></h1>
            <NavLink to="/apps" className="btn">Explore What We Built</NavLink>
            
            </div>
            
<img src={banner} className="banner-image responsive-image"/>
        </div>
    )
}
export default Banner