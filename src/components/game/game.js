import startGame from "./main"
function canvasGame(canvas, gameStateRef,gameConfig,dim) {
  const stop = startGame(canvas, gameStateRef, gameConfig,dim);
  return stop;
}
export default canvasGame
  