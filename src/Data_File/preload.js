import pearEat from "../assets/eat.mp3"
import pearExplosion from "../assets/explosion.mp3"
import bgTrack from "../assets/bg_track.mp3"
const pearAudio={eat:pearEat,explosion:pearExplosion,bg_track:bgTrack}
const gearAudio=pearAudio

const loadTrack = (url) => {
    return new Promise((resolve, reject) => {
      const audio = new Audio(url);
      audio.addEventListener('canplaythrough', () => resolve(audio), { once: true });
      audio.addEventListener('error', () => reject(`Failed to load: ${url}`));
      audio.load();
    });
  };
  
async function loadTracks(){
    let tracks=undefined
tracks=await loadGameAudio(pearAudio)
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
  const pearTracks=await loadTracks()  
const gearTracks=pearTracks 
  export {pearTracks,gearTracks}
  