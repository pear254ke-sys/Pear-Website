import dark_logo from "../assets/dark_logo_2.png"
import pear from "../assets/peer_conn.png"
import peers from "../assets/peers.jpg"
import community from "../assets/community.jpg"
const sectionData=[{
id:1,image:dark_logo,heading:"Pear",body:"Pear is a peer-powered startup built in Ruaka, Kiambu Kenya. We create simple, open technologies that help people connect, share, and build together.Pear explores peer-to-peer systems that remove unnecessary middlemen and return control to users. Our focus is on direct connection, shared ownership, and practical innovation.our origin story starts in Ruaka founded by young builders inspired by local challenges. Our work starts locally, shaped by real experiences and real needs.Pear is built on the idea that people are stronger when they connect directly. We believe technology should serve communities, not control them."
,direction:"right"},{id:2,heading:"What We Build",direction:"left",body:"We develope peer-powered platforms, open technology experiments, and digital tools designed for real-world conditions. Our work focuses on connectivity, collaboration, and systems that work even where resources are limited.We focus on peer-to-peer communication models where nodes interact directly without reliance on centralized servers. This approach improves reliability, scalability, and user autonomy.Centralized systems create single points of failure and control. Peer-to-peer systems distribute responsibility across participants, enabling trust-minimized, fault-tolerant networks.Our ideas come from conversations, shared challenges, and everyday experiences. Pear listens first, then builds.Pear also gives young people space to explore ideas, build skills, and turn curiosity into solutions. Learning happens by doing.",image:pear},{id:3,heading:"Powered by Peers",direction:"right",body:"Young developers, designers, and thinkers are central to Pear’s development process. We encourage hands-on experimentation and real-world problem solving.built on the idea that people are stronger when they connect directly and technology should serve communities, not control them.Pear exists because of the youth and community that inspired it.",image:peers,id:3},{
id:4,heading:"Be Part of the Journey",direction:"left",body:"Pear grows through collaboration ,We are not a finished product,it is a growing community. If you have ideas, energy, or curiosity, you belong here in Pear.We welcome contributors, testers, and partners who believe in open systems and shared progress.",image:community
}]
const accordianData=[
    {id: 1, heading:  "Pear Ideas",text:"We source our ideas locally inspired by local  challenges affecting us" },
    { id: 2, heading: "Pear Goals", text: "creating employment among the youth by building locally made solutions and building communities" },
]
const reviewData=[{id:1,name:"Brian Ruhiu",heading:"Computer Programmer",text:"best thing since mpesa"},{id:2,name:"Charles Kuria",heading:"Gamer/Artist",text:"a fresh of breath air in the kenyan tech space"}]
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

export {sectionData,accordianData,reviewData,serviceData}
