import {useState,useEffect,useRef,useContext} from 'react'
import { ModeContext } from "../../utils/ModeContext";
import canvasGame from "./game";
export default function GameCanvas(props) {
  const { data } = useContext(ModeContext);
  const canvasRef = useRef(null);
  const gameStateRef = useRef(props.gameState);
  
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    
    const gameWidth = Math.min(screenSize.width, 1200);
    const gameHeight = gameWidth / 2; 
const dim={width:gameWidth,height:gameHeight}
    const stopGame = canvasGame(canvas, gameStateRef, data.gameConfig,dim);
    
    return () => stopGame?.();
  }, [data, screenSize]); // Game re-initializes when screen size changes

  return (
    <div className="game-wrapper" style={{ width: '100%', textAlign: 'center' }}>
      <canvas ref={canvasRef} style={{ touchAction: 'none' }} />
    </div>
  );
}
