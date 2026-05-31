import eat from "../assets/eat.mp3";
import explosion from "../assets/explosion.mp3";
import bg_track from "../assets/bg_track.mp3";

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

// Top-level await blocks export until all promises resolve
const promises = Object.keys(unloadedAudio).map(key => 
  loadAudioElement(key, unloadedAudio[key])
);

await Promise.all(promises); 

// This export will only happen AFTER all audio files are 100% loaded
export default loadedAudio;
