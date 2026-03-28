import startGame from "./main"
function canvasGame(canvas, gameStateRef) {
  startGame(canvas, gameStateRef);

  return () => {};
}
export default canvasGame
  