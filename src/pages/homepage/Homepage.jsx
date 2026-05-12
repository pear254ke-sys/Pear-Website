import Banner from "../../components/banner/Banner"
import Main from "../../components/main/Main"
import  Reviews_Carousel  from "../../components/carousel/Carousel"
import Accordion from "../../components/accordion/Accordion"
import Cards from "../../components/card_grid/Cards"
import Images from "../../components/Image/Images"
import Selectbox from "../../components/selectbox/Selectbox";
import "./homepage.css"
import "../../App.css"
export default function Homepage(){
    return(
      <main className="body">
        <Selectbox/>
         <Banner />
          <Main />
          <Accordion />
          <Reviews_Carousel />
          <Cards/>
         <Images/>
        
      </main>
    )}
       
        

