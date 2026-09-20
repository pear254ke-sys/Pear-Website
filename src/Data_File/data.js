import {gearBanner,breePic,brianMuhiaPic,startupImage,ideaImage,factoryImage,martkingStevePic,melvinMuyaPic,jamesPic,muthiePic,georgePic,stevePic,katsPic,muyaPic,charlesPic,brianPic,uginePic,facebook,instagram,twitter,github,gearVerticalVine,pearVerticalVine,pearBanner,community,peers,peersConn,darkLogo, camshareIcon} from "./dataImages.js"

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
    alt:"image of kats",
    name: "Kats",
    heading: "BioMed Student",
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
const foundersData = [
  {
    id: 1,
    name: "Brian",
    role: "Computer Programmer",
    image: brianMuhiaPic,
  },
  {
    id: 2,
    name: "Muya",
    role: "Writer/Swimming Coach",
    image: melvinMuyaPic,
    
  },
  {
    id: 3,
    name: "Martking Highness",
    role: "Artist/Musician",
    image: martkingStevePic,

  }
];
const navData=[
  {id:1,to:"/"},
  {id:2,to:"/apps"},
  {id:3,to:"/contact"}
]

const pearSectionData=[{
  id:1,image:darkLogo
  ,direction:"right"},{id:2,image:peersConn,direction:"left"},{id:3,image:peers,direction:"right"},{
  id:4,image:community
,direction:"left"    }]
const gearSectionData=[{
  id:1,image:darkLogo
  ,direction:"right"},{id:2,image:factoryImage,direction:"left"},{id:3,image:ideaImage,direction:"right"},{
  id:4,image:startupImage
,direction:"left"    }]
const bannerDataPear={
  banner:pearBanner,
}
const bannerDataGear={...bannerDataPear,banner:gearBanner}

const appData=[{id:1,heading:"KameraStudio",image:camshareIcon}]
const icons=[{id:1,image:facebook,link:"",alt:"facebook link to pear facebook account"},{id:2,image:instagram,link:"",alt:"instagram link to pear instagram account"},{id:3,image:github,link:"",alt:"github link to pear github account"},{id:4,image:twitter,link:"",alt:"twitter link to pear twitter account"}]
const pearMode={sectionData:pearSectionData,bannerData:bannerDataPear,vine:pearVerticalVine,foundersData:foundersData,navData:navData}
  const gearMode={bannerData:bannerDataGear,
    foundersData:foundersData,
    sectionData:gearSectionData,
    vine:gearVerticalVine,bannerData:bannerDataGear,
     navData:navData}
        const modeData={"pear":pearMode,"gear":gearMode}
export {reviewData,appData,modeData,icons}
