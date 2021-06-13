import "./styles.css";
import LIntro from "./LandingPage/LIntro.js";
import LApps from "./LandingPage/LApps.js";
import LFeatures from "./LandingPage/LFeatures.js";
import LPreview from "./LandingPage/LPreview.js";
import LContact from "./LandingPage/LContact.js";
import LFooter from "./LandingPage/LFooter.js";
import LNavBar from "./LandingPage/LNavBar.js";
export default function App() {
  return (
    <div>
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
