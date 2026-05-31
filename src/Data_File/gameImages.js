import pear from "../assets/game_pear.webp"
import player from "../assets/player.webp"
import background from "../assets/game_background.webp"
import enemy from "../assets/bomb.webp"
import gameOver from "../assets/game_over.webp"
import gamePaused from "../assets/paused.webp"
import win from "../assets/win.webp"
const unloadedImages={"pear":pear,"player":player,"background":background,"enemy":enemy,"gameOver":gameOver,"gamePaused":gamePaused,"win":win};
let loadedImages={};
function loadImages(configImages){

    if(Object.keys(loadedImages).length===Object.keys(unloadedImages).length)
    {
      
        return loadedImages
    }
    const images={}
    for(let key in configImages){
    images[key]=loadImage(configImages[key])
    }
    return images
      }
function loadImage(src) {
        const img = new Image();
        img.src = src;
        return img;
      }
loadedImages=loadImages(unloadedImages);

export default loadedImages