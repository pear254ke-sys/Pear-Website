import startGame from "./main"
function canvasGame(canvas,assets,dim) {
  const stop = startGame(canvas,assets,dim);
  return stop;
}
export default canvasGame
  