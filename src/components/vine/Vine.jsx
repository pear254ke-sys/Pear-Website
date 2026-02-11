import "./vine.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

function Vine() {
  const container = useRef();
  const left = useRef();
  const right = useRef();
  gsap.from(left.current, { x: -40, opacity: 0 });
  gsap.from(right.current, { x: 40, opacity: 0, delay: 0.2 });
  useGSAP(
    () => {
      if (!left.current || !right.current) return;

      gsap.from([left.current, right.current], {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.3,      // 5 was VERY long
        ease: "back.out(1.7)",
      });
    },
    { scope: container }
  );
  gsap.to(".vine", {
    y: -6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
    duration: 2,
  });
  
  return (
    <div className="vines" ref={container}>
      <div ref={left} className="left-vine vine"></div>
      <div ref={right} className="right-vine vine"></div>
    </div>
  );
}

export default Vine;
