import { ModeContext } from "./ModeContext";
import { useContext } from "react"
import { LanguageContext } from "./TranslatorContext"
import translations from "./dataTranslator"
import { reviewData,icons, appData } from "./data";
function getMainSectionData(){
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
    const { data } = useContext(ModeContext);
    const sectionDataKey="sectionData"
    const homePageSectionKey="homePageSectionHeading"
    const pageTextKey="pageText"
    const homePageSectionHeading=translations[lang][mode][pageTextKey][homePageSectionKey]
    const mergedSectionData=[]
    const sectionRawData=data[sectionDataKey];
    const sectionTranslatedText=translations[lang][mode][sectionDataKey]
    const arrayLength=sectionRawData.length
for(let i=0;i<arrayLength;i++){
    let newId=`${i+1}`
    mergedSectionData[i]={...sectionRawData[i],...sectionTranslatedText[i],id:newId}
}
return {mergedSectionData,homePageSectionHeading}

} 
function getHeroSectionData(){
    const heroKey="imageData"
    const imageHeading="imageDataHeading"
    const imageGoal="imageDataGoal"
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
    const imageDataHeading=translations[lang][mode][heroKey][imageHeading]
    const imageDataGoal=translations[lang][mode][heroKey][imageGoal]
    return {imageDataHeading,imageDataGoal}
}
function getFormSectionData(){
    const pageTextKey="pageText"
    const formHeading="formPageHeading"
    const formLabelsKey="formLabels"
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
    const formPageHeading=translations[lang][mode][pageTextKey][formHeading]
    const formLabels=translations[lang][mode][formLabelsKey]
    return {formPageHeading,formLabels}
}
function getFoundersData(){
    const key="foundersData"
    const pageKey="pageText"
    const headingKey="homePageFoundersHeading"
    const { data } = useContext(ModeContext);
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
const mergedFounderData=[]
const founderRawData=data[key];
const founderTranslatedText=translations[lang][mode][key]
const founderHeading=translations[lang][mode][pageKey][headingKey]
const arrayLength=founderRawData.length
for(let i=0;i<arrayLength;i++){
    let newId=`${i+1}`
    mergedFounderData[i]={...founderRawData[i],...founderTranslatedText[i],id:newId}
}
return {mergedFounderData,founderHeading}
}
function getAccordianData(){
    const key="accordianData"
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
    return translations[lang][mode][key]

}
function getBannerData(){
    const key="bannerData"
    const { data } = useContext(ModeContext);
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
    const image=data[key]
const text=translations[lang][mode][key]
const mergedData={...image,...text}

return mergedData
}
function getNavData()
{
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
    const { data } = useContext(ModeContext);
    const links=data["navData"]
    const navTranslations=translations[lang][mode]["navData"]
    const mergedData=[];
    const length=links.length
 for(let i=0;i<length;i++){
    let newId=`${i+1}`
mergedData[i]={...navTranslations[i],...links[i],id:newId}
 }
 return mergedData
}
function getAppData(){
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
const appPageHeadingKey="appPageHeading"
const followHeadingKey= "followHeading"
const demoParagraphKey="demoParagraph"
const demoHeadingKey="demoHeading"
const demoTextKey="demoText"
const pageTextKey="pageText"
const appPageHeading=translations[lang][mode][pageTextKey][appPageHeadingKey]
const followHeading=translations[lang][mode][pageTextKey][followHeadingKey]
const demoParagraph=translations[lang][mode][pageTextKey][demoParagraphKey]
const demoHeading=translations[lang][mode][pageTextKey][demoHeadingKey]
const demoText=translations[lang][mode][pageTextKey][demoTextKey]
    return {appData,appPageHeading,followHeading,demoParagraph,demoHeading,demoText}  
}
function getReviewData(){
    const { mode } = useContext(ModeContext);
    const { lang } = useContext(LanguageContext);
    const key="homePageReviewsHeading"
    const pageKey="pageText"
    const homePageReviewsHeading=translations[lang][mode][pageKey][key]
    return {reviewData,homePageReviewsHeading}
}
function getIconData(){
    return icons
}
function getVineData(){
    const key="vine"
    const { data } = useContext(ModeContext);
    return data[key]
}  
export {getAppData,getReviewData,getIconData,getNavData,getBannerData,getAccordianData,getMainSectionData,getFoundersData,getFormSectionData,getHeroSectionData,getVineData  
}