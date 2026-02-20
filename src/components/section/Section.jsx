import "./section.css"
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section(props) {
    const elementRef = useRef();
    const direction = props.direction === "right" ? true : false;
    useGSAP(() => {
        let mm = gsap.matchMedia();
        mm.add("(max-width: 768px)", () => {
            gsap.from(elementRef.current, {
                y: 100,             
                opacity: 0.5,
                duration: 2,
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
            <img src={props.image} className="section-image" alt="section" /></>}
           
        
          

        </section>
    );
}

export default Section;
