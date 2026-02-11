import startGame from "./main"
export function canvasGame(canvas) {
  let running=true
startGame(canvas,running)  

    return () => {
      running = false;
    };
  }
export default canvasGame
  