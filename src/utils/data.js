import dark_logo from "../assets/dark_logo_2.png"
import pear from "../assets/peer_conn.png"
import peers from "../assets/peers.jpg"
import community from "../assets/community.jpg"
import pear_banner from "../assets/pear_banner.png"
import pear_background from "../assets/pear_background.png"
import gear_banner from "../assets/gear_banner.png"
import gear_background from "../assets/gear_background.png"
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";
import twitter from "../assets/twitter.png";
import gameBg from "../assets/game_background.png"
import gameOver from "../assets/game_over.png"
import gamePaused from "../assets/loading_screen.png"
import gameWon from "../assets/win.png"
import pearImg from "../assets/game_pear.png"
import playerImg from "../assets/player.png"
import bombImg from "../assets/bomb.png"
const gameImages={gameBg,gameOver,gamePaused,gameWon,pearImg,playerImg,bombImg}
const pearMode={sectionData:[{
    id:1,image:dark_logo,heading:"Pear",body:"Pear is a peer-powered startup built in Ruaka, Kiambu Kenya. We create simple, open technologies that help people connect, share, and build together.Pear explores peer-to-peer systems that remove unnecessary middlemen and return control to users. Our focus is on direct connection, shared ownership, and practical innovation.our origin story starts in Ruaka founded by young builders inspired by local challenges. Our work starts locally, shaped by real experiences and real needs.Pear is built on the idea that people are stronger when they connect directly. We believe technology should serve communities, not control them."
    ,direction:"right"},{id:2,heading:"What We Build",direction:"left",body:"We develope peer-powered platforms, open technology experiments, and digital tools designed for real-world conditions. Our work focuses on connectivity, collaboration, and systems that work even where resources are limited.We focus on peer-to-peer communication models where nodes interact directly without reliance on centralized servers. This approach improves reliability, scalability, and user autonomy.Centralized systems create single points of failure and control. Peer-to-peer systems distribute responsibility across participants, enabling trust-minimized, fault-tolerant networks.Our ideas come from conversations, shared challenges, and everyday experiences. Pear listens first, then builds.Pear also gives young people space to explore ideas, build skills, and turn curiosity into solutions. Learning happens by doing.",image:pear},{id:3,heading:"Powered by Peers",direction:"right",body:"Young developers, designers, and thinkers are central to Pear’s development process. We encourage hands-on experimentation and real-world problem solving.built on the idea that people are stronger when they connect directly and technology should serve communities, not control them.Pear exists because of the youth and community that inspired it.",image:peers,id:3},{
    id:4,heading:"Be Part of the Journey",direction:"left",body:"Pear grows through collaboration ,We are not a finished product,it is a growing community. If you have ideas, energy, or curiosity, you belong here in Pear.We welcome contributors, testers, and partners who believe in open systems and shared progress.",image:community
    }],banner:pear_banner,background:pear_background}
const gearMode={sectionData:[
    {
      id: 1,
      image: "",
      heading: "Gear",
      body: "Gear is the startup engine behind Pear. It is a system for creating, testing, and launching new digital products from scratch.\n\nInspired by startup studios like Idealab, Gear builds ideas internally — turning small concepts into real applications through rapid execution.\n\nBased in Ruaka, Kiambu Kenya, Gear focuses on creating practical tools that solve real problems, starting small and growing through use.",
      direction: "left"
    },
    {
      id: 2,
      heading: "Startup Factory",
      direction: "right",
      body: "Gear operates as a startup factory. Instead of waiting for perfect ideas, we generate, test, and refine many small ideas continuously.\n\nEach idea is treated as an experiment:\n- Build fast\n- Test early\n- Keep what works\n- Improve or discard what doesn’t\n\nThis allows us to create multiple products instead of relying on a single bet.",
      image: ""
    },
    {
      id: 3,
      heading: "From Idea to Product",
      direction: "left",
      body: "Every project in Gear moves through a simple pipeline: idea → prototype → test → refine → launch.\n\nWe prioritize working software over planning. A simple working product is more valuable than a perfect idea that never ships.\n\nOur goal is to reduce the distance between thinking and building.",
      image: ""
    },
    {
      id: 4,
      heading: "Built for Real Conditions",
      direction: "right",
      body: "Gear products are designed for real-world environments — including limited connectivity, low-end devices, and everyday constraints.\n\nWe focus on:\n- Lightweight systems\n- Offline-first design\n- Peer-to-peer capabilities\n\nConstraints are not limitations — they guide better engineering decisions.",
      image: ""
    },
    {
      id: 5,
      heading: "Growing Ideas Into Startups",
      direction: "left",
      body: "Some Gear projects remain small tools. Others grow into full products or independent startups.\n\nGear exists to give ideas a path to become something bigger — through iteration, usage, and continuous improvement.\n\nWe don’t wait for permission to build. We start, learn, and evolve.",
      image: ""
    }],banner:gear_banner,background:gear_background}
const modeData={"pear":pearMode,"gear":gearMode}
const accordianData=[
    {id: 1, heading:  "Pear Ideas",text:"We source our ideas locally inspired by local  challenges affecting us" },
    { id: 2, heading: "Pear Goals", text: "creating employment among the youth by building locally made solutions and building communities" },
]
const reviewData=[{id:1,name:"Brian Ruhiu",heading:"Computer Programmer",text:"best thing since mpesa"},{id:2,name:"Charles Kuria",heading:"Gamer/Artist",text:"a fresh of breath air in the kenyan tech space"},{
    id: 3,
    name: null,
    heading: "Student Developer",
    text: "finally something being built for people like us, not just big companies"
  },
  {
    id: 4,
    name: null,
    heading: "Tech Enthusiast",
    text: "you can actually feel the intention behind this, its not just another app"
  },
  {
    id: 5,
    name: "Kevin Mwangi",
    heading: "Mobile Developer",
    text: "peer to peer focus is what makes this stand out, especially in our environment"
  },
  {
    id: 6,
    name: null,
    heading: "Creator",
    text: "simple ideas but very powerful direction, this can grow into something big"
  },
  {
    id: 7,
    name: "Dennis Otieno",
    heading: "IT Student",
    text: "this is the kind of tech we need locally, practical and not overcomplicated"
  },
  {
    id: 8,
    name: null,
    heading: "Early User",
    text: "tested some of the ideas and they actually work, thats what matters"
  },
  {
    id: 9,
    name: "Faith Wanjiku",
    heading: "Designer",
    text: "clean concept, strong vision and it feels very community driven"
  },
  {
    id: 10,
    name: null,
    heading: "Builder",
    text: "gear approach of building many small projects is smart, more chances to win"
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
const appData=[{id:1,heading:"Camshare",image:"🌐",status:"complete"}]
const icons={facebook,instagram,github,twitter}
console.log(icons)

export {accordianData,reviewData,serviceData,appData,modeData,icons,gameImages}
