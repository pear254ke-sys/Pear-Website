import Banner from "../../components/banner/Banner"
import Main from "../../components/main/Main"
import Title from "../../components/title/Title"
import  Reviews_Carousel  from "../../components/carousel/Carousel"
import Accordion from "../../components/accordion/Accordion"
import Cards from "../../components/card_grid/Cards"
import Images from "../../components/Image/Images"
import "./homepage.css"
import "../../App.css"
export default function Homepage(){
    return(
      <body className="body">
         <Banner />
          <Title title="Driven By Ideas" />
          <Main />
          <Accordion />
          <Title title="What Kenyans Have To Say" />
          <Reviews_Carousel />
          <Title title="Meet The Founders" />
          <Cards/>
         <Images/>
      </body>
    )}
       
        

