import { useEffect, useRef,useContext } from "react";
import { ModeContext } from "../../utils/ModeContext";
import canvasGame from "./game";

export default function GameCanvas(props) {
  const {data} = useContext(ModeContext)
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
  
      const stopGame = canvasGame(canvas, gameStateRef,data.gameConfig);
        return () => stopGame?.();
    }, [data])

  return (
    <canvas ref={canvasRef}    style={{
      width: "100%",
      maxWidth: "800px",
      height: "auto",
      aspectRatio: "2 / 1",
      display: "block"
       }}/>
  );

}
