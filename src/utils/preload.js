import pear_eat from "../assets/eat.mp3"
import pear_explosion from "../assets/explosion.mp3"
import bg_track from "../assets/bg_track.mp3"
const pear_audio={eat:pear_eat,explosion:pear_explosion,bg_track:bg_track}
const gear_audio=pear_audio

const loadTrack = (url) => {
    return new Promise((resolve, reject) => {
      const audio = new Audio(url);
      audio.addEventListener('canplaythrough', () => resolve(audio), { once: true });
      audio.addEventListener('error', () => reject(`Failed to load: ${url}`));
      audio.load();
    });
  };
  
async function loadTracks(audio){
    let tracks=undefined
tracks=await loadGameAudio(pear_audio)
if(tracks===undefined){
    return {}
}
return tracks
  }

  async function loadGameAudio(trackMap) {
    const keys = Object.keys(trackMap);
    const promises = keys.map(key => loadTrack(trackMap[key]));
    
    try {
      const loadedAudios = await Promise.all(promises);
      return keys.reduce((acc, key, index) => {
        acc[key] = loadedAudios[index].cloneNode()
        return acc;
      }, {});
      
    } catch (err) {
      throw new Error("One or more tracks failed to load");
    }
  }
  const pear_tracks=await loadTracks(pear_audio)  
const gear_tracks=pear_tracks 
  export {pear_tracks,gear_tracks}
  