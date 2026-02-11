import { useEffect, useRef } from "react";
import canvasGame from "./game";

export default function GameCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const stopGame = canvasGame(canvas);
    return () => {
      stopGame?.();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        maxWidth: "800px",
        height: "auto",
        touchAction: "none",
        display: "block",
        margin: "0 auto",
        background: "#000"
      }}
    />
  );
}

