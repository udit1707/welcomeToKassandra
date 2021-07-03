import "./styles.css";
import LIntro from "../Components/LandingPage/LIntro.js"
import LApps from "../Components/LandingPage/LApps.js";
import LFeatures from "../Components/LandingPage/LFeatures.js";
import LPreview from "../Components/LandingPage/LPreview.js";
import LContact from "../Components/LandingPage/LContact.js";
import LFooter from "../Components/LandingPage/LFooter.js";
import LNavBar from "../Components/LandingPage/LNavBar.js";
import { useHistory } from "react-router-dom";
import { useEffect, useLayoutEffect, useState } from "react";
export default function App() {
  const history=useHistory();
  const [element,setElement]=useState(null)
  // const handler= ()=> {
  //   var ele=document.getElementById("APP");
  //   const { top, bottom } = ele.getBoundingClientRect();
  //   const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
  //   console.log((top > 0 || bottom > 0) && top < vHeight);
      
  //     return (top > 0 || bottom > 0) && top < vHeight ? setElement('APP'):setElement(null)
    
  // }
  // useEffect(() => {
        
  //   window.addEventListener('scroll', handler);
 
  //   return () => window.removeEventListener('scroll', handler);
    
  // }, []);
  
  return (
    <div style={{cursor:'pointer'}}>      
      <LNavBar element={element} />
      <LIntro setElement={(ele)=>setElement(ele)} />
      <LApps setElement={(ele)=>setElement(ele)} />
      <LFeatures setElement={(ele)=>setElement(ele)} />
      <LPreview setElement={(ele)=>setElement(ele)} />
      <LContact setElement={(ele)=>setElement(ele)} />
      <LFooter setElement={(ele)=>setElement(ele)} />
    </div>
  );
}
