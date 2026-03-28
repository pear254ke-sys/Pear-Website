import { useEffect, useRef } from "react";
import canvasGame from "./game";

export default function GameCanvas(props) {
 
    const canvasRef = useRef(null);
    const gameStateRef = useRef(props.gameState);

    useEffect(() => {
      if(props.gameState===true)
      {
        gameStateRef.current=1
      }
      else if(props.gameState===false){
gameStateRef.current=0
      }
    }, [props.gameState]);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
  
      const stopGame = canvasGame(canvas, gameStateRef);
  
      return () => stopGame?.();
    }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
     width:800,
     height:400
      }}
    />
  );

}
