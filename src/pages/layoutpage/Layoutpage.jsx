import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import  Bot  from "../../components/chatbot/Bot" ;
export default function Layout() {
  return (
<><Header /> 
        <Outlet />
        <Bot/> 
      <Footer/></> 
     
    
  );
}