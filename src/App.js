import "./css/nav_section_1.css";
import "./css/section_2.css";
import "./css/section_3.css";
import "./css/section_4.css";
import "./css/section_5.css";
import "./css/section_6.css";
import "./css/section_7.css";
import "./css/section_8.css";
import "./css/media_queries.css";
import { ParallaxProvider } from "react-scroll-parallax";
import Navigation from "./components/Navigation.js";
import TechnoidSection1 from "./components/TechnoidSection1.js";
import TechnoidSection2 from "./components/TechnoidSection2.js";
import TechnoidSection3 from "./components/TechnoidSection3.js";
import TechnoidSection4 from "./components/TechnoidSection4.js";
import TechnoidSection5 from "./components/TechnoidSection5.js";
import TechnoidSection6 from "./components/TechnoidSection6.js";
import TechnoidSection7 from "./components/TechnoidSection7.js";
import TechnoidSection8 from "./components/TechnoidSection8.js";
function App() {
  return (
    <>
      <Navigation />;
      <ParallaxProvider>
        <TechnoidSection1 />
        <TechnoidSection2 />
        <TechnoidSection3 />
        <TechnoidSection4 />
        <TechnoidSection5 />
        <TechnoidSection6 />
        <TechnoidSection7 />
        <TechnoidSection8 />
      </ParallaxProvider>
    </>
  );
}

export default App;
