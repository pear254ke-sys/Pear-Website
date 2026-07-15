import eat from "../assets/eat.wav";
import explosion from "../assets/explosion.wav";
import bg_track from "../assets/bg_track.ogg";

const unloadedAudio = { eat, explosion, bg_track };
const loadedAudio = {};

function loadAudioElement(key, url) {
  return new Promise((resolve, reject) => {
    const audio = new Audio(url);
    audio.preload = 'auto';
    audio.oncanplaythrough = () => {
      loadedAudio[key] = audio;
      resolve(audio);
    };
    audio.onerror = (err) => reject(err);
  });
}


const promises = Object.keys(unloadedAudio).map(key => 
  loadAudioElement(key, unloadedAudio[key])
);

await Promise.all(promises); 


export default loadedAudio;
