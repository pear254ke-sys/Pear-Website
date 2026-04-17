import dark_logo from "../assets/dark_logo_2.webp"
import peers_conn from "../assets/peer_conn.webp"
import peers from "../assets/peers.webp"
import community from "../assets/community.webp"
import pear_banner from "../assets/pear_banner.webp"
import pear_background from "../assets/pear_background.webp"
import gear_banner from "../assets/gear_banner.webp"
import gear_background from "../assets/gear_background.webp"
import gear_vertical_vine from "../assets/gear_vertical_vine.png"
import pear_vertical_vine from "../assets/pear_vertical_vine.png"
import facebook from "../assets/facebook.webp";
import instagram from "../assets/instagram.webp";
import github from "../assets/github.webp";
import twitter from "../assets/twitter.webp";
import gameBg from "../assets/game_background.webp"
import gameOver from "../assets/game_over.webp"
import gamePaused from "../assets/loading_screen.webp"
import gameWon from "../assets/win.webp"
import pearImg from "../assets/game_pear.webp"
import playerImg from "../assets/player.webp"
import bombImg from "../assets/bomb.webp"
import ugine_pic from "../assets/ugine_pic.webp"
import bree_pic from "../assets/bree_pic.webp"
import brian_pic from "../assets/brian_pic.webp"
import charles_pic from "../assets/charles_pic.webp"
import muya_pic from "../assets/muya_pic.webp"
import kats_pic from "../assets/kats_pic.webp"
import steve_pic from "../assets/steve_pic.webp"
import george_pic from "../assets/george_pic.webp"
import muthie_pic from "../assets/muthie_pic.webp"
import james_pic from "../assets/james_pic.webp"
import melvinMuya_pic from "../assets/melvinMuya_pic.webp"
import brianMuhia_pic from "../assets/BrianMuhia_pic.webp"
import martkingSteve_pic from "../assets/martkingSteve_pic.webp"
import factory_image from "../assets/factory_image.webp"
import built_image from "../assets/built.webp"
import idea_image from "../assets/ideas.webp"
import startup_image from "../assets/startup_image.webp"
import gear_player from "../assets/gear_player.webp"
import broken_cog from "../assets/broken_cog.webp"
import gear_bg from "../assets/gear_bg.webp"
import gearPaused from "../assets/gear_paused.webp"
import explosion_sprite from "../assets/explosion_sprite.png"
import { pear_tracks } from "./preload"
const pearGameImages={"background":gameBg,"gameOver":gameOver,"gamePaused":gamePaused,"gameWon":gameWon,"fodder":pearImg,"player":playerImg,"enemy":bombImg,"explosion":explosion_sprite}
const gearGameImages={"background":gear_bg,"enemy":broken_cog,"fodder":gear_player,"player":gear_player,"gameOver":gameOver,"gamePaused":gearPaused,"explosion":explosion_sprite
 ,"gameWon":gameWon
}
const pear_audio=pear_tracks
const gear_audio=pear_tracks
const pearMode={sectionData:[{
    id:1,image:dark_logo,heading:"Pear",body:"Pear is a peer-powered startup built in Ruaka, Kiambu, Kenya.e build simple, open technologies that help people connect, share, and build together.Our focus is peer-to-peer systems that remove unnecessary middlemen and return control to users.We believe technology should serve communities — not control them."
    ,direction:"right",alt:"image of pear logo"},{id:2,heading:"What We Build",direction:"left",body:"We build peer-powered platforms and practical tools for real-world conditions.Using peer-to-peer systems, we enable direct, reliable communication without centralized control.Our ideas come from real experiences — we listen first, then build.Pear empowers young people to learn by doing and turn curiosity into real solutions.",
image:peers_conn,alt:"image of connected nodes/computers"},{id:3,heading:"Powered by Peers",direction:"right",body:"Young developers, designers, and thinkers are central to Pear’s development process.We encourage hands-on experimentation and real-world problem solving.We believe people are stronger when they connect directly, and that technology should serve communities — not control them.Pear exists because of the youth and communities that inspired it.",image:peers,alt:"image of connected people"},{
    id:4,heading:"Be Part of the Journey",direction:"left",body:"Pear grows through collaboration.We’re not a finished product — we’re a growing community.If you have ideas, energy, or curiosity, you belong here.We welcome contributors, testers, and partners who believe in open systems and shared progress.",image:community
,alt:"image of pear community"    }],banner:pear_banner,background:pear_background,gameConfig:{
      images:pearGameImages,audio:pear_audio
    },vine:pear_vertical_vine}
const gearMode={
vine:gear_vertical_vine,
  sectionData:[
    {
      id: 1,
      image: dark_logo,
      heading: "Gear",
      body: "Gear powers Pear.It’s our internal system for turning ideas into real products through rapid execution.Inspired by startup studios like Idealab, we build from the ground up — starting small, solving real problems, and growing through use.We focus on practical, lightweight solutions that work in real-world conditions, especially where resources are limited.Gear emphasizes experimentation, fast iteration, and learning by doing.Every product starts simple, tested quickly, and improved through real feedback.At its core, Gear is about building with purpose — turning everyday challenges into tools that empower people and communities.",
      direction: "left",
      alt:"image of pear logo"
    },
    {
      id: 2,
      heading: "Startup Factory",
      direction: "right",
      body: "Pear operates as a startup factory.Instead of waiting for perfect ideas, we continuously generate, test, and refine small ideas.Each idea is treated as an indepedent product:We Build fast,Test early,Keep what works Improve or discard what doesn’t,This approach allows us to create multiple products instead of relying on a single bet.",
      image: factory_image,
      alt:"image of a laptop startup factory"
    },
    {
      id: 3,
      heading: "From Idea to Product",
      direction: "left",
      body: "Every project in Pear follows a simple pipeline:idea → prototype → test → refine → launchWe prioritize working software over planning.A simple product that works is more valuable than a perfect idea that never ships.Our goal is to reduce the distance between thinking and building.",
      image: idea_image,
       alt:"image of a laptop from idea to product"
    },
    {
      id: 4,
      heading: "Built for Real Conditions",
      direction: "right",
      body: "Pear products are designed for real-world environments — including limited connectivity, low-end devices, and everyday constraints.\n\nWe focus on:\n- Lightweight systems\n- Offline-first design\n- Peer-to-peer capabilities\n\nConstraints are not limitations — they guide better engineering decisions.",
      image: built_image,
      alt:"image of a laptop Built for Real Conditions"
    },
    {
      id: 5,
      heading: "Growing Ideas Into Startups",
      direction: "left",
      body: "Some Pear projects remain small tools.Others grow into full products or independent startups.Gear exists to give ideas a path to become something bigger — through iteration, usage, and continuous improvement.We don’t wait for permission to build.We start, learn, and evolve.",
      image: startup_image,
      alt:"growing ideas into startups"
    }],banner:gear_banner,background:gear_background,gameConfig:{
      images:gearGameImages,
      audio:pear_audio
    }}
const modeData={"pear":pearMode,"gear":gearMode}
const accordianData=[
    {id: 1, heading:  "Pear Ideas",text:"We source our ideas locally inspired by local  challenges affecting us" },
    { id: 2, heading: "Pear Goals", text: "creating employment among the youth by building locally made solutions and building communities" },
]
const reviewData=[
  {alt:"image of brian ruhiu",id:1,name:"Brian Ruhiu",heading:"Computer Programmer",text:"best thing since mpesa",image:brian_pic},
  {alt:"image of charles kuria",d:2,name:"Charles Kuria",heading:"Gamer/Artist",text:"a fresh of breath air in the kenyan tech space",image:charles_pic},{
    id: 3,
    alt:"image of muya wa karuga",
    name: "Muya Wa Karuga",
    heading: "Writer/Swimming coach",
    text: "finally something being built for people like us, not just big companies",
    image:muya_pic
  },
  {
    id: 4,
    alt:"image of eugene muruga",
    name: "Eugene Muruga",
    heading: "Digital artist",
    text: "you can actually feel the intention behind this, its not just another app",
    image:ugine_pic
  },
  {
    id: 5,
    alt:"image of brian muthie",
    name: "Brian Muthie",
    heading: "CS student",
    text: "peer to peer focus is what makes this stand out, especially in our environment",
    image:muthie_pic
  },
  {
    id: 6,
    alt:"image of kats",
    name: "Kats",
    heading: "Student",
    text: "simple ideas but very powerful direction, this can grow into something big",
    image:kats_pic
  },
  {
    id: 7,
    alt:"image of bree",
    name: "Bree",
    heading: "Medical doctor",
    text: "this is the kind of tech we need locally, practical and not overcomplicated",
    image:bree_pic
  },
  {
    id: 8,
    alt:"image of james ngugi",
    name: "James Ngugi",
    heading: "Enterprenuer/Medical doctor",
    text: "tested some of the ideas and they actually work, thats what matters",
    image:james_pic
  },
  {
    id: 9,
    alt:"image of martking highness",
    name: "Martking Higness",
    heading: "Artist/Musician",
    text: "clean concept, strong vision and it feels very community driven",
    image:steve_pic
  },
  {
    id: 10,
    alt:"image of george njenga",
    name: "George Njenga",
    heading: "Enterprenuer",
    text: "gear approach of building many small projects is smart, more chances to win",
    image:george_pic
  }]
const serviceData=[{
    id:1,
    heading:"Frontend Development",
    text:"   Modern, responsive user interfaces built with performance andaccessibility in mind.",
    skills:{
        1:"HTML, CSS, JavaScript",
        2:"React / Vue",
        3:"Responsive Design",
    }
},{
    id:2,
    heading:"Backend Development",
    text:"Secure and scalable server-side systems that power your applications.",
    skills:{
        1:"APIs & Databases",
        2:"Authentication",
        3:"Cloud & Server Logic",

    }
},
{
    id:3,
    heading:"Mobile Development",
    text:" High-performance mobile applications for Android and iOS platforms.",
    skills:{
        1:"Flutter / React Native",
        2:"Native Integrations",
        3:"App Store Deployment",

    }
},
{
    id:4,
    heading:"Web Design",
    text:" Clean, modern designs focused on user experience and conversion.",
    skills:{
        1:"UI / UX Design",
        2:"Wireframes & Prototypes",
        3:"Brand Consistency",

    }
}]
const foundersData = [
  {
    id: 1,
    alt:"image of brian ruhiu",
    name: "Brian Ruhiu",
    image: brianMuhia_pic,
    role: "Computer Programmer",
    text: "Driven by curiosity and a need to build, Brian focuses on turning ideas into working systems. His approach is simple: start small, ship fast, and improve continuously. He believes technology should remove barriers, not create them — especially in environments where resources are limited."
  },
  {
    id: 2,
    alt:"image of muya wa karuga",
    name: "Muya Wa Karuga",
    image: melvinMuya_pic,
    role: "Writer/Swimming Coach",
    text: "Muya brings perspective and storytelling into everything being built. With a deep understanding of people and everyday challenges, he helps shape ideas into something meaningful. Whether in water or words, his focus is always on growth, discipline, and clarity."
  },
  {
    id: 3,
    alt:"image of martking highness",
    name: "Martking Highness",
    image: martkingSteve_pic,
    role: "Artist/Musician",
    text: "Martking adds creative direction and energy to the team. His work blends sound, visuals, and expression, helping give identity to what is being built. He believes creativity is not separate from technology — it is what makes it feel alive."
  }
];
const appData=[{id:1,heading:"Camshare",image:"🌐",status:"complete"}]
const icons=[{id:1,image:facebook,link:"",alt:"facebook link to pear facebook account"},{id:2,image:instagram,link:"",alt:"instagram link to pear instagram account"},{id:3,image:github,link:"",alt:"github link to pear github account"},{id:4,image:twitter,link:"",alt:"twitter link to pear twitter account"}]

export {accordianData,reviewData,serviceData,appData,modeData,icons,foundersData}
