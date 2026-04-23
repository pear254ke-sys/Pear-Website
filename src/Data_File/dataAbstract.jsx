import { ModeContext } from "./ModeContext";
import { useContext } from "react"
import { LanguageContext } from "./TranslatorContext"
import translations from "./dataTranslator"
function getCurrentTextData(objectName,textKey="") {
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
    if(textKey==="")
    {
        
       return  translations[lang][mode][objectName]
    }
    return translations[lang][mode][objectName][textKey];
}
function getCurrentImageData(objectName,imageKey) {
    const { data } = useContext(ModeContext);
    return objectName ? data[objectName][imageKey] : data;
}
function getImageFromData(objectName,objectId){
    const { data } = useContext(ModeContext);
   
   let objData=data[objectName].find((obj)=> {return obj.id===objectId })
   
return objData
    
}
export {getCurrentImageData,getCurrentTextData,getImageFromData}