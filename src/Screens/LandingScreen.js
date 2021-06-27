import "./styles.css";
import LIntro from "../Components/LandingPage/LIntro.js"
import LApps from "../Components/LandingPage/LApps.js";
import LFeatures from "../Components/LandingPage/LFeatures.js";
import LPreview from "../Components/LandingPage/LPreview.js";
import LContact from "../Components/LandingPage/LContact.js";
import LFooter from "../Components/LandingPage/LFooter.js";
import LNavBar from "../Components/LandingPage/LNavBar.js";
import { useHistory } from "react-router-dom";
export default function App() {
  const history=useHistory()
  return (
    <div style={{cursor:'pointer'}}>      
      <LNavBar />
      <LIntro />
      <LApps />
      <LFeatures />
      <LPreview />
      <LContact />
      <LFooter />
    </div>
  );
}
