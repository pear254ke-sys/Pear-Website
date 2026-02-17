import "./title.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
gsap.registerPlugin(useGSAP, SplitText);

function Title(props) {
  const container = useRef();

  useGSAP(() => {
    const split = new SplitText(".title", { type: "chars" });

    gsap.from(split.chars, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.5,
      ease: "back.out",
    });
    
  }, { scope: container });

  return (
    <div ref={container} className="title">
      <h1 className="title-heading">{props.title}</h1>
    </div>
  );
}

export default Title;
