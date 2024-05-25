import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import { useRef, useLayoutEffect } from "react";

import imgGuitar from "../images/guitar.png";
import imgGreenTreble from "../images/green-treble.png";
import imgOrangeTreble from "../images/orange-treble.png";
import imgPinkKite from "../images/pink-kite.png";
import imgPurpleLyric from "../images/purple-lyric.png";
import imgEDmessageLight from "../images/eid-message-lightMode.png";

import imgbox1 from "../images/purple-balloon-1.png";
import imgbox2 from "../images/star-1.png";
import imgbox3 from "../images/orange-kite-1.png";
import imgbox4 from "../images/green-balloon-1.png";
import imgbox5 from "../images/pink-balloon-1.png";

import imgLayer1 from "../images/layer-1.png";
import imgLayer2 from "../images/layer-2.png";
import imgLayer3 from "../images/layer-3-green-wave.png";
import imgLayer4 from "../images/layer-4-sun.png";
import imgLayer5 from "../images/layer-5-moon.png";
import imgLayer6 from "../images/layer-6-green-balloon.png";
import imgLayer7 from "../images/layer-7-pink-balloon.png";
import imgLayer8 from "../images/layer-8-purple-balloon.png";
import imgLayer9 from "../images/layer-9-yellow-wave.png";
import imgLayer10 from "../images/layer-10-bulbs.png";
import imgLayer11 from "../images/layer-11-purple-wave.png";
import imgLayer12 from "../images/layer-12-pink-balloon.png";
import imgLayer13 from "../images/layer-13-bulbs.png";
import imgLayer14 from "../images/layer-14-gaint-wheel.png";
import imgLayer15 from "../images/layer-15-villa.png";
import imgLayer16 from "../images/layer-16-yellow-kite.png";
import imgLayer17 from "../images/layer-17-orange-kite.png";
import imgLayer18 from "../images/layer-19-palm-tree.png";
import imgLayer19 from "../images/layer-20-villa.png";
import imgLayer20 from "../images/layer-21-slide.png";
import imgLayer21 from "../images/layer-22-orange-kite.png";
import imgLayer22 from "../images/layer-23-pink-kite.png";
import imgLayer23 from "../images/layer-24-lady.png";
import imgLayer24 from "../images/layer-25-man.png";
import imgLayer25 from "../images/layer-26-girl.png";
import imgLayer26 from "../images/layer-27-pink-wave.png";
import imgLayer27 from "../images/layer-28-box.png";
import imgLayer28 from "../images/layer-29-purple-wave.png";
import imgLayer29 from "../images/layer-30-green-note.png";
import imgLayer30 from "../images/layer-31-purple-box.png";
import imgLayer31 from "../images/layer-32-jin.png";
import imgLayer32 from "../images/layer-33-orange-wave.png";
import imgLayer33 from "../images/layer-34-blue-note.png";
import imgLayer34 from "../images/layer-35-coffee.png";
import imgLayer35 from "../images/layer-36-green-wave.png";
import imgLayer36 from "../images/layer-37-lamp.png";
import imgLayer37 from "../images/layer-38-purple-box.png";
import imgLayer38 from "../images/layer-39-star.png";
import imgLayer39 from "../images/layer-40-star.png";
import imgLayer40 from "../images/layer-41-star.png";
import imgLayer41 from "../images/layer-42-pink-note.png";
import imgLayer42 from "../images/layer-43-green-choco.png";
import imgLayer43 from "../images/layer-44-blue-choco.png";
import imgLayer44 from "../images/layer-44-purple-box.png";
import imgLayer45 from "../images/layer-45-pink-note.png";
import imgLayer49 from "../images/layer-46-blue-note.png";
import imgLayer46 from "../images/layer-47-green-note.png";
import imgLayer47 from "../images/layer-48-cookie.png";
import imgLayer48 from "../images/layer-49-cookie.png";

gsap.registerPlugin(ScrollTrigger);
const timeline8 = gsap.timeline({ repeat: -1, yoyo: true });

const TechnoidSection8 = () => {
  const tml8 = useRef(timeline8);
  const technoidContainer8 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tml8.current.to(".technoid-green-treble", {
        y: 20,
        duration: 1.5,
        rotate: 15,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".technoid-orange-treble", {
        y: 10,
        rotate: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".purple-lyric", {
        y: 25,
        scale: 1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".pink-kite", {
        y: -25,
        x: 25,
        rotate: -6,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".starImage1", {
        scale: 1.2,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      tml8.current.to(".item1", {
        y: -15,
        x: 10,
        rotate: -7,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".item2", {
        scale: 1.2,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".item3", {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate: -5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".item4", {
        y: -30,
        x: 5,
        duration: 2.5,
        rotate: -5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".item5", {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate: -5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".orangeFlyKite", {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate: -5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".greenSmallBalloon", {
        y: -15,
        x: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      tml8.current.to(".purpleSmallBalloon", {
        y: -15,
        x: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      tml8.current.to(".pinkFlyKite", {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate: -5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }, technoidContainer8.current);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        className="technoid-section-8"
        id="technoid-section-8"
        ref={technoidContainer8}
      >
        <div className="technoid-header8-container">
          <div className="technoid-header8-top">
            <div className="technoid-guitar">
              <Parallax translateY={[0, -50]} easing={"easeIn"} speed={10}>
                <img src={imgGuitar} className="imgGuitar size" alt="" />
              </Parallax>
            </div>
            <div className="technoid-green-treble">
              <Parallax translateX={[0, -50]} speed={10}>
                <img
                  src={imgGreenTreble}
                  className="imgGreenTreble size"
                  alt=""
                />
              </Parallax>
            </div>
            <div className="technoid-orange-treble">
              <Parallax translateX={[0, -50]} speed={15}>
                <img
                  src={imgOrangeTreble}
                  className="imgOrangeTreble size"
                  alt=""
                />
              </Parallax>
            </div>
            <div className="pink-kite">
              <Parallax translateX={[-90, 0]} speed={10}>
                <img src={imgPinkKite} className="imgPinkKite size" alt="" />
              </Parallax>
            </div>
            <div className="purple-lyric">
              <Parallax translateX={[0, -100]} speed={10}>
                <img
                  src={imgPurpleLyric}
                  className="imgPurpleLyric size"
                  alt=""
                />
              </Parallax>
            </div>
          </div>
          <div className="technoid-header8-middle">
            <div className="context-box-8 eidMsg">
              <Parallax
                rotate={[0, 180]}
                scaleY={[1, 0.5]}
                translateY={[0, 800]}
                translateX={[0, 500]}
                easing={"easeIn"}
                speed={5}
              >
                <img
                  src={imgEDmessageLight}
                  className="imgEDmessageLight size"
                  id="imgEDmessage"
                  alt=""
                />
              </Parallax>
            </div>
          </div>
          <div className="technoid-header8-bottom">
            <div className="technoid-fair-box">
              <div className="fair-box-1">
                <div className="item1">
                  <img src={imgbox1} className="imgbox1 size" alt="" />
                </div>
                <div className="item2">
                  <img src={imgbox2} className="imgbox2 size" alt="" />
                </div>
                <div className="item3">
                  <img src={imgbox3} className="imgbox3 size" alt="" />
                </div>
                <div className="item4">
                  <img src={imgbox4} className="imgbox4 size" alt="" />
                </div>
                <div className="item5">
                  <img src={imgbox5} className="imgbox5 size" alt="" />
                </div>
              </div>
              <div className="fair-box-2">
                <div className="bgImg1">
                  <img src={imgLayer1} className="imgLayer1 size" alt="" />
                </div>
                <div className="bgImg2">
                  <img src={imgLayer2} className="imgLayer2 size" alt="" />
                </div>
                <div className="greenWaveImage">
                  <Parallax translateX={[0, -10]} speed={5}>
                    <img src={imgLayer35} className="imgLayer35 size" alt="" />
                  </Parallax>
                </div>
                <div className="purpleWaveImage">
                  <Parallax translateX={[10, 0]} speed={5}>
                    <img src={imgLayer28} className="layer26 size" alt="" />
                  </Parallax>
                </div>
                <div className="purpleWaveImage1">
                  <Parallax translateY={[-10, 0]} speed={5}>
                    <img src={imgLayer11} className="layer09 size" alt="" />
                  </Parallax>
                </div>
                <div className="sunImg" id="sunImage">
                  <Parallax translateX={[-100, 0]} rotate={20} speed={5}>
                    <img src={imgLayer4} className="imgLayer4 size" alt="" />
                  </Parallax>
                </div>
                <div className="moonImage visibility" id="moonImage">
                  <Parallax translateX={[-100, 0]} rotate={20} speed={5}>
                    <img src={imgLayer5} className="imgLayer5 size" alt="" />
                  </Parallax>
                </div>
                <div className="greenNoteImage">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer29} className="imgLayer29 size" alt="" />
                  </Parallax>
                </div>
                <div className="redGiftBoxImg">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer27} className="imgLayer27 size" alt="" />
                  </Parallax>
                </div>
                <div className="blueNoteImage">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer33} className="imgLayer33 size" alt="" />
                  </Parallax>
                </div>
                <div className="halfcookieImg">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer47} className="imgLayer47 size" alt="" />
                  </Parallax>
                </div>
                <div className="smokeLampImg">
                  <Parallax translateX={[0, -10]} rotate={[15, 0]} speed={5}>
                    <img src={imgLayer36} className="imgLayer36 size" alt="" />
                  </Parallax>
                </div>
                <div className="greenChocoImg">
                  <Parallax translateX={[-10, 0]} rotate={[20]} speed={5}>
                    <img src={imgLayer42} className="imgLayer42 size" alt="" />
                  </Parallax>
                </div>
                <div className="blueChocoImg">
                  <Parallax translateX={[-10, 0]} rotate={[14]} speed={5}>
                    <img src={imgLayer43} className="imgLayer43 size" alt="" />
                  </Parallax>
                </div>

                <div className="purpleEnvImg">
                  <Parallax translateY={[20, 40]} speed={5}>
                    <img src={imgLayer44} className="imgLayer44 size" alt="" />
                  </Parallax>
                </div>
                <div className="pinkNoteEnvImg">
                  <img src={imgLayer45} className="imgLayer45 size" alt="" />
                </div>
                <div className="greenNoteEnvImg">
                  <img src={imgLayer46} className="imgLayer46 size" alt="" />
                </div>
                <div className="blueNoteEnvImg">
                  <img src={imgLayer49} className="imgLayer49 size" alt="" />
                </div>
                <div className="manImg">
                  <Parallax speed={5}>
                    <img src={imgLayer24} className="imgLayer24 size" alt="" />
                  </Parallax>
                </div>
                <div className="ladyImg">
                  <Parallax speed={5}>
                    <img src={imgLayer23} className="imgLayer23 size" alt="" />
                  </Parallax>
                </div>
                <div className="girlImg">
                  <img src={imgLayer25} className="imgLayer25 size" alt="" />
                </div>
                <div className="bulb2Img">
                  <Parallax translateX={[0, -10]} speed={5}>
                    <img src={imgLayer13} className="imgLayer13 size" alt="" />
                  </Parallax>
                </div>
                <div className="slideImage">
                  <Parallax translateX={[0, -20]} speed={5}>
                    <img src={imgLayer20} className="imgLayer20 size" alt="" />
                  </Parallax>
                </div>
                <div className="wheelImage">
                  {/* <Parallax translateX={["0px", "-10px"]} speed={5}> */}
                  <Parallax speed={5}>
                    <img src={imgLayer14} className="imgLayer14 size" alt="" />
                  </Parallax>
                </div>
                <div className="palmImage">
                  <Parallax translateX={[-10, 10]} speed={5}>
                    <img src={imgLayer18} className="layer16 size" alt="" />
                  </Parallax>
                </div>
                <div className="villaImage1">
                  <Parallax translateY={[-18, 0]} speed={5}>
                    <img src={imgLayer19} className="imgLayer19 size" alt="" />
                  </Parallax>
                </div>
                <div className="villaImage2">
                  <Parallax translateY={[-10, 0]} speed={5}>
                    <img src={imgLayer15} className="imgLayer15 size" alt="" />
                  </Parallax>
                </div>
                <div className="jugImage">
                  <Parallax translateX={[-10, 0]} rotate={[15, -15]} speed={5}>
                    <img src={imgLayer31} className="imgLayer31 size" alt="" />
                  </Parallax>
                </div>
                <div className="bulbImage">
                  <Parallax speed={5}>
                    <img src={imgLayer10} className="imgLayer10 size" alt="" />
                  </Parallax>
                </div>
                <div className="purpleBoxImage">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer30} className="imgLayer30 size" alt="" />
                  </Parallax>
                </div>
                <div className="orangeFlyKite">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer21} className="imgLayer21 size" alt="" />
                  </Parallax>
                </div>
                <div className="pinkFlyKite">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer22} className="imgLayer22 size" alt="" />
                  </Parallax>
                </div>
                <div className="pinkSmallBalloon">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer7} className="imgLayer7 size" alt="" />
                  </Parallax>
                </div>
                <div className="greenSmallBalloon">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer6} className="imgLayer6 size" alt="" />
                  </Parallax>
                </div>
                <div className="purpleSmallBalloon">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer8} className="imgLayer8 size" alt="" />
                  </Parallax>
                </div>
                <div className="starImage1">
                  <Parallax translateX={[10, 0]} speed={5}>
                    <img src={imgLayer38} className="imgLayer38 size" alt="" />
                  </Parallax>
                </div>
                <div className="starImage2">
                  <Parallax translateX={[10, 0]} speed={5}>
                    <img src={imgLayer39} className="imgLayer39 size" alt="" />
                  </Parallax>
                </div>
                <div className="pinkNoteFly">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer41} className="imgLayer41 size" alt="" />
                  </Parallax>
                </div>
                <div className="coffeeImage">
                  <Parallax translateX={[0, -10]} speed={5}>
                    <img src={imgLayer34} className="imgLayer34  size" alt="" />
                  </Parallax>
                </div>
                <div className="fullCookieImg">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer48} className="imgLayer48 size" alt="" />
                  </Parallax>
                </div>
                <div className="yellowWaveImage">
                  <Parallax translateY={[-20, 0]} speed={5}>
                    <img src={imgLayer9} className="imgLayer9 size" alt="" />
                  </Parallax>
                </div>
                <div className="pinkWaveImage">
                  <Parallax translateX={[-10, 0]} speed={5}>
                    <img src={imgLayer26} className="imgLayer26 size" alt="" />
                  </Parallax>
                </div>
                <div className="orangeWaveImage">
                  <Parallax translateY={[-10, 0]} speed={5}>
                    <img src={imgLayer32} className="imgLayer32 size" alt="" />
                  </Parallax>
                </div>
                <div className="purpleGiftboxImg">
                  <Parallax translateX={["-10px", "0px"]} speed={5}>
                    <img src={imgLayer37} className="imgLayer37 size" alt="" />
                  </Parallax>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnoidSection8;
