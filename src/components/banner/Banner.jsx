
import { ModeContext } from "../../utils/ModeContext";
import { useContext } from "react"
import "./banner.css"
import { NavLink } from 'react-router';
function Banner(){
    const {data} = useContext(ModeContext)
    return(
        <section className="banner-container">
            <article className="banner-content">
            <h1 className="banner-heading"><span>Pear-powered technology</span><span>for direct connection</span></h1>
            <NavLink to="/apps" className="btn">Explore What We Built</NavLink>
            
            </article>
            
<img src={data.banner} className="banner-image responsive-image"/>
<img src={data.background} className="background"/>
        </section>
    )
}
export default Banner