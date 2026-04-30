import {explosionSprite,gearPaused,gearBanner,gearBackground,gearBg,breePic,brianMuhiaPic,brokenCog,gearPlayer,startupImage,ideaImage,builtImage,factoryImage,martkingStevePic,melvinMuyaPic,jamesPic,muthiePic,georgePic,stevePic,katsPic,muyaPic,charlesPic,brianPic,uginePic,bombImg,playerImg,pearImg,gameWon,gamePaused,gameOver,gameBg,facebook,instagram,twitter,github,gearVerticalVine,pearVerticalVine,pearBackground,pearBanner,community,peers,peersConn,darkLogo} from "./dataImages.js"
import { pearTracks } from "./preload.js"
const pearGameImages={"background":gameBg,"gameOver":gameOver,"gamePaused":gamePaused,"gameWon":gameWon,"fodder":pearImg,"player":playerImg,"enemy":bombImg,"explosion":explosionSprite}
const gearGameImages={"background":gearBg,"enemy":brokenCog,"fodder":gearPlayer,"player":gearPlayer,"gameOver":gameOver,"gamePaused":gearPaused,"explosion":explosionSprite
 ,"gameWon":gameWon
}
const pearAudio=pearTracks
const gearAudio=pearTracks
const accordianData=[
    {id: 1, heading:  "heading",text:"text" },
    { id: 2, heading: "heading", text: "text" },
]
const reviewData=[
  {alt:"image of brian ruhiu",id:1,name:"Brian Ruhiu",heading:"Computer Programmer",text:"best thing since mpesa",image:brianPic},
  {alt:"image of charles kuria",d:2,name:"Charles Kuria",heading:"Gamer/Artist",text:"a fresh of breath air in the kenyan tech space",image:charlesPic},{
    id: 3,
    alt:"image of muya",
    name: "Muya",
    heading: "Writer/Swimming coach",
    text: "finally something being built for people like us, not just big companies",
    image:muyaPic
  },
  {
    id: 4,
    alt:"image of eugene",
    name: "Eugene",
    heading: "Digital artist",
    text: "you can actually feel the intention behind this, its not just another app",
    image:uginePic
  },
  {
    id: 5,
    alt:"image of brian",
    name: "Brian",
    heading: "CS student",
    text: "peer to peer focus is what makes this stand out, especially in our environment",
    image:muthiePic
  },
  {
    id: 6,
    alt:"image of kathtrein",
    name: "Kathrein",
    heading: "Student",
    text: "simple ideas but very powerful direction, this can grow into something big",
    image:katsPic
  },
  {
    id: 7,
    alt:"image of bridget",
    name: "Bridget",
    heading: "Medical doctor",
    text: "this is the kind of tech we need locally, practical and not overcomplicated",
    image:breePic
  },
  {
    id: 8,
    alt:"image of james",
    name: "James",
    heading: "Enterprenuer/Medical doctor",
    text: "tested some of the ideas and they actually work, thats what matters",
    image:jamesPic
  },
  {
    id: 9,
    alt:"image of martking highness",
    name: "Martking Higness",
    heading: "Artist/Musician",
    text: "clean concept, strong vision and it feels very community driven",
    image:stevePic
  },
  {
    id: 10,
    alt:"image of george njenga",
    name: "George Njenga",
    heading: "Enterprenuer",
    text: "gear approach of building many small projects is smart, more chances to win",
    image:georgePic
  }]
const servicesData=[{
    id:1,
    heading:"Frontend Development",
    text:"text",
    skills:{
        1:"HTML, CSS, JavaScript",
        2:"React / Vue",
        3:"Responsive Design",
    }
},{
    id:2,
    heading:"Backend Development",
    text:"text",
    skills:{
        1:"APIs & Databases",
        2:"Authentication",
        3:"Cloud & Server Logic",

    }
},
{
    id:3,
    heading:"Mobile Development",
    text:"text",
    skills:{
        1:"Flutter / React Native",
        2:"Native Integrations",
        3:"App Store Deployment",

    }
},
{
    id:4,
    heading:"Web Design",
    text:"text",
    skills:{
        1:"UI / UX Design",
        2:"Wireframes & Prototypes",
        3:"Brand Consistency",

    }
}]
const titleData=[{id:1,title:"Driven By Ideas"},{id:2,title:"What Kenyans Have To Say"},{id:3,title:"Meet The Founders"},{id:4,title:"Explore What We Built"},{id:5,title:"Services"},{id:6,title:"Contact Us"}]
const pageText={
  servicePageHeading:"text",
  servicePageParagraph:"text",
  appPageHeading:"text",
  appPageParagraph:"text",
  appPageDemoHeading:"text",
  appPageDemoParagraph:"text",
  appPagePlayBtn:"text",
  homePageSectionHeading:"text",
  homePageReviewsHeading:"text",
  homePageFoundersHeading:"text",
  demoParagraph:"text",
  demoHeading:"text",
  demoParagraph2:"text",
  followHeading:"text",
  formPageHeading:"text",
}
const formLabels={   name: "text",
  email: "text",
  message: "text",
  placeholderName: "text",
  placeholderEmail: "text",
  placeholderMsg: "text",
  btn: "text",
  subtext: "text"}
const foundersData = [
  {
    id: 1,
    alt:"alt",
    name: "Brian",
    role: "Computer Programmer",
    image: brianMuhiaPic,
  },
  {
    id: 2,
    alt:"alt",
    name: "Muya",
    role: "Writer/Swimming Coach",
    image: melvinMuyaPic,
    
  },
  {
    id: 3,
    alt:"alt",
    name: "Martking Highness",
    role: "Artist/Musician",
    image: martkingStevePic,

  }
];
const navData=[
  {id:1,name:"name",to:"/"},
  {id:2,name:"name",to:"/apps"},
  {id:3,name:"name",to:"/services"},
  {id:4,name:"name",to:"/contact"}
]

const pearSectionData=[{
  id:1,image:darkLogo,heading:"heading",body:"body"
  ,direction:"right",alt:"alt"},{id:2,heading:"heading",alt:"alt",body:"body",image:peersConn,direction:"left"},{id:3,heading:"heading",body:"body",image:peers,alt:"alt",direction:"right"},{
  id:4,heading:"heading",body:"body",image:community
,alt:"alt",direction:"left"    }]
const gearSectionData=[{
  id:1,image:darkLogo,heading:"heading",body:"body"
  ,direction:"right",alt:"alt"},{id:2,heading:"heading",alt:"alt",body:"body",image:factoryImage,direction:"left"},{id:3,heading:"heading",body:"body",image:ideaImage,alt:"alt",direction:"right"},{
  id:4,heading:"heading",body:"body",image:startupImage
,alt:"alt",direction:"left"    }]
const bannerDataPear={
  alt:"alt",
  banner:pearBanner,bannerBackground:pearBackground,
  bannerText:"bannerText",
  bannerHeading:"bannerHeading"
}
const bannerDataGear={...bannerDataPear,banner:gearBanner,bannerBackground:gearBackground,}
const imageData={
  imageDataHeading:"imageDataHeading",
  imageDataGoal:"imageDataGoal"
}
const appData=[{id:1,heading:"Camshare",image:"🌐",status:"complete"}]
const icons=[{id:1,image:facebook,link:"",alt:"facebook link to pear facebook account"},{id:2,image:instagram,link:"",alt:"instagram link to pear instagram account"},{id:3,image:github,link:"",alt:"github link to pear github account"},{id:4,image:twitter,link:"",alt:"twitter link to pear twitter account"}]
const pearMode={serviceData:servicesData,imageData:imageData,sectionData:pearSectionData,bannerData:bannerDataPear,gameConfig:{
    images:pearGameImages,audio:pearAudio
  },vine:pearVerticalVine,accordianData:accordianData,foundersData:foundersData,navData:navData,pageText:pageText}
  const gearMode={serviceData:servicesData,imageData:imageData,bannerData:bannerDataGear,
    accordianData:accordianData,foundersData:foundersData,
    sectionData:gearSectionData,
    vine:gearVerticalVine,bannerData:bannerDataGear,
      gameConfig:{
          images:gearGameImages,
          audio:pearAudio
        },navData:navData}
        const modeData={"pear":pearMode,"gear":gearMode}
export {reviewData,appData,modeData,icons}
