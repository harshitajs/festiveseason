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

const TechnoidSection4 = () => {
  const tml4 = useRef(timeline4);
  const technoidContainer4 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // tml4.current.to(".techoidShine1", {
      //   scale: [0.5, 1.3],
      //   duration: 3,
      // });
    }, technoidContainer4.current);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        className="technoid-section-4"
        id="technoid-section-4"
        ref={technoidContainer4}
      >
        <div className="technoid-header4-container">
          <div className="header-image-technoid-wave">
            <div className="technoid-wave"></div>
          </div>
          <div className="technoid-header4-left">
            <div className="left-images-box">
              <div className="technoid-greenWave">
                <Parallax
                  translateX={[-30, 0]}
                  translateY={[0, -50]}
                  speed={8}
                  easing={"easeInOut"}
                >
                  <img src={imgGreenWave} className="greenWave" alt="" />
                </Parallax>
              </div>
              <div className="technoid-purpleWave">
                <Parallax
                  translateX={[-30, 0]}
                  translateY={[0, -50]}
                  speed={15}
                  easing={"easeInOut"}
                >
                  <img src={imgPurpleWave} className="purpleWave" alt="" />
                </Parallax>
              </div>
              <div className="green-note">
                <Parallax easing={"ease"} speed={5}>
                  <img src={imgGreenNote} className="greenNote" alt="" />
                </Parallax>
              </div>
              <div className="pink-note">
                <Parallax easing={"ease"} speed={5}>
                  <img src={imgPinkNote} className="pinkNote" alt="" />
                </Parallax>
              </div>
              <div className="technoid-family-box">
                <div className="family-woman">
                  <Parallax translateX={[4, 0]} speed={2}>
                    <img src={imgWoman} alt="" id="imgWoman" />
                  </Parallax>
                </div>
                <div className="family-man">
                  <Parallax translateY={[10, 5]} speed={10}>
                    <img src={imgMan} alt="" id="imgMan" />
                  </Parallax>
                </div>
                <div className="family-girl" speed={50}>
                  <Parallax translateX={[10, 0]}>
                    <img src={imgGirl} alt="" id="imgGirl" />
                  </Parallax>
                </div>
              </div>
              <div className="family-wave">
                <img id="imgFamilyWave" src={imgPinkWaveLight} alt="" />
              </div>
            </div>
          </div>
          <div className="technoid-header4-middle">
            <div className="content-box-4">
              <p className="content-text-4">
                After that much-needed family time, it’s the kids’ favourite
                part, Eideyah! Time for them to engage in friendly banter as to
                who received the most.
              </p>
            </div>
          </div>
          <div className="technoid-header4-right">
            <div className="the-red-box">
              <Parallax translateY={[-5, 20]}>
                <img src={imgRedBox} id="redBox" alt="" />
              </Parallax>
            </div>
            <div className="the-red-box-lid">
              <Parallax
                translateX={[0, 10]}
                rotate={[0, 20]}
                translateY={[20, -80]}
              >
                <img src={imgRedBoxLid} id="theRedLid" alt="" />
              </Parallax>
            </div>
            <div className="the-purple-box">
              <Parallax rotate={[-10, 40]} translateY={[0, 40]}>
                <img src={imgPurpleBox} id="purpleBox" alt="" />
              </Parallax>
            </div>
            <div className="colorful-notes">
              <div className="the-pink-note">
                <Parallax translateX={[0, -50]}>
                  <img src={imgPinkNotes} id="pinkNotes" alt="" />
                </Parallax>
              </div>
              <div className="the-blue-note">
                <Parallax translateY={[-30, 30]} translateX={[0, -30]}>
                  <img src={imgBlueNote} id="blueNotes" alt="" />
                </Parallax>
              </div>
              <div className="the-green-note">
                <Parallax translateX={[0, -20]} translateY={[0, -60]}>
                  <img src={imgGreenNote} id="greenNotes" alt="" />
                </Parallax>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnoidSection4;
