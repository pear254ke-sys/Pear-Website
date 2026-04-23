import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import  Bot  from "../../components/chatbot/Bot" ;
import Selectbox from "../../components/selectbox/Selectbox";
export default function Layout() {
  return (
<><Header /> 
<Selectbox/>
        <Outlet />
      
      <Footer/></> 
     
    
  );
}