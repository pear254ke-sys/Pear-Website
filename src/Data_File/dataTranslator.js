import { sharedDataEng,sharedDataSwa,sharedDataFrench,sharedDataGerman } from "./sharedData"
import { sectionDataGearEng,sectionDataGearSwa,sectionDataPearEng, sectionDataPearSwa,sectionDataPearFrench,sectionDataGearFrench,sectionDataPearGerman,sectionDataGearGerman} from "./unsharedData"

const translator={
  german:{
pear:{...sharedDataGerman,...sectionDataPearGerman},
gear:{...sharedDataGerman,...sectionDataGearGerman}
  },
  french:{
    pear:{...sharedDataFrench,...sectionDataPearFrench},
    gear:{...sharedDataFrench,...sectionDataGearFrench}
  },

    english:{
        pear:{
          ...sharedDataEng,
          ...sectionDataPearEng
        },
       
        
       
        gear:{ 
          ...sharedDataEng,
          ...sectionDataGearEng
        },

      },
    swahili:{pear:{
      ...sharedDataSwa,
      ...sectionDataPearSwa
    }
    ,
    gear:{
      ...sharedDataSwa,
      ...sectionDataGearSwa
     
  }
  
        

    
    }
}
export default translator