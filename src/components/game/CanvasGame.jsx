import {useState,useEffect,useRef,useContext} from 'react'
import canvasGame from "./game";
import loadedAudio from '../../Data_File/gameAudio';
import loadedImages from '../../Data_File/gameImages';
export default function GameCanvas(props) {
  const canvasRef = useRef(null);
  const gameStateRef = useRef(props.gameState);
  const assets={images:loadedImages,audio:loadedAudio}
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

    
    const gameWidth = Math.min(screenSize.width, 800);
    const gameHeight = Math.min(screenSize.width/2,400); 
const dim={width:gameWidth,height:gameHeight}
    const stopGame = canvasGame(canvas,assets,dim);
    
    return () => stopGame?.();
  }, [screenSize]); 
  return (
    <div className="game-wrapper" style={{ width: '100%', textAlign: 'center' }}>
      <canvas ref={canvasRef} style={{ touchAction: 'none' }} />
    </div>
  );
}
