import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import { useRef, useLayoutEffect } from "react";

import imgGreenWave from "../images/greenWave.png";
import imgPurpleWave from "../images/purpleWave.png";
import imgGreenNote from "../images/greenNote.png";
import imgPinkNote from "../images/pinkNote.png";
import imgMan from "../images/family-man.png";
import imgWoman from "../images/family-woman.png";
import imgGirl from "../images/family-girl.png";
import imgPinkWaveLight from "../images/pinkWave-lightMode.png";
import imgRedBox from "../images/red-box.png";
import imgRedBoxLid from "../images/box-lid.png";
import imgPurpleBox from "../images/purpleBox.png";
import imgPinkNotes from "../images/pinkNote1.png";
import imgBlueNote from "../images/blueNote1.png";
import imgGreenNotes from "../images/greenNote1.png";

gsap.registerPlugin(ScrollTrigger);
const timeline4 = gsap.timeline({ repeat: -1, yoyo: true });

const TechnoidSection5 = () => {
  const tml5 = useRef(timeline4);
  const technoidContainer5 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {}, technoidContainer5.current);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        className="technoid-section-5"
        id="technoid-section-5"
        ref={technoidContainer4}
      >
        <div className="technoid-header5-container">
          <div className="technoid-header5-left"></div>
          <div className="technoid-header4-middle"></div>
          <div className="technoid-header4-right"></div>
        </div>
      </section>
    </>
  );
};

export default TechnoidSection4;
