import "./vine.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import vine from "../../assets/vertical_vine.png"

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Vine() {
 

  return (
    <div className="vines">
     <img src={vine} className="right-vine vine"/>
    </div>
  );
}

export default Vine;
