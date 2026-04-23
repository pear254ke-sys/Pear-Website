import "./main.css"
import Title from "../title/Title";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getCurrentTextData,getImageFromData } from "../../Data_File/dataAbstract"
gsap.registerPlugin(ScrollTrigger);
function Main(){
    const sectionsData=getCurrentTextData("sectionData");
    const homePageSectionHeading=getCurrentTextData("pageText","homePageSectionHeading")
    const sections=sectionsData.map((section)=>{
       let sectionData=getImageFromData("sectionData",section.id)
       console.log(sectionData)

        return <Section heading={section.heading} alt={section.alt} body={section.body} direction={sectionData["direction"]} image={sectionData["image"]}/>
    })

return(<main className="main-class">
    <Title title={homePageSectionHeading} />
    <section className="main">{sections}</section>
    
</main>)
}
function Section(props) {
    const elementRef = useRef();
    const direction = props.direction === "right" ? true : false;
    useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(max-width: 768px)", () => {
            gsap.from(elementRef.current, {
                y: 100,             
                opacity: 0.5,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top 50%", 
                    toggleActions: "play none none none",
                }
            });
        });
        mm.add("(min-width: 769px)", () => {
            const startX = direction ? -200 : 200;   
            const startRotation = direction ? -15 : 15; 

            gsap.from(elementRef.current, {
                x: startX,
                rotationY: startRotation,
                rotationZ: direction ? -5 : 5, 
                opacity: 0,
                scale: 1,         
                duration: 2,       
                ease: "expo.out", 
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: "top 50%", 
                    toggleActions: "play play none none",
                }
            });
        });

        return () => mm.revert(); 
    }, { scope: elementRef }); 

    return (
        <section className="section" ref={elementRef}>
            {props.direction==="right" ?  <><img src={props.image} className="section-image" alt="section" />
            <article className="section-content">
                <h1 className="section-heading">{props.heading}</h1>
                <p className="section-paragraph">{props.body}</p>
            </article></> :    <>
            <article className="section-content">
                <h1 className="section-heading">{props.heading}</h1>
                <p className="section-paragraph">{props.body}</p>
            </article>
            <img src={props.image} className="section-image" alt={props.alt} /></>}
           
        
          

        </section>
    );
}
export default Main