import startGame from "./main"
function canvasGame(canvas, gameStateRef,gameConfig) {
  const stop = startGame(canvas, gameStateRef, gameConfig);
  return stop;
}
export default canvasGame
  