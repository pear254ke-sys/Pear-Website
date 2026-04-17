
import { ModeContext } from "../../utils/ModeContext";
import { useContext } from "react"
import "./banner.css"
import { NavLink } from 'react-router';
function Banner(props){
    const {data} = useContext(ModeContext)
    return(
        <section className="banner-container">
            <article className="banner-content">
            <h1 className="banner-heading transition"><span>Pear-powered technology</span><span>for direct connection</span></h1>
            <NavLink to="/apps" className="btn transition">Explore What We Built</NavLink>
            
            </article>
            
<img src={data.banner} alt="image of pear banner" className="transition banner-image responsive-image"/>
<img src={data.background} alt="image of pear background" className="background"/>
        </section>
    )
}
export default Banner