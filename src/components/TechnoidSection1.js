import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import { useRef, useLayoutEffect } from "react";

import imgShine from "../images/shine.png";
import imgJug from "../images/jug.png";
import imgFullBisc from "../images/full-bisc.png";
import imgHalfBisc from "../images/half-bisc.png";
import ED1 from "../images/ED1.png";
import ED2 from "../images/ED2.png";
import imgCup from "../images/cup.png";
import imgChocoLayer from "../images/chocolayer.png";
import ribbonImg1 from "../images/ribbon1.png";
import ribbonImg2 from "../images/ribbon2.png";
import ribbonImg3 from "../images/ribbon3.png";
import ribbonImg4 from "../images/ribbon4.png";
gsap.registerPlugin(ScrollTrigger);

const timeline1 = gsap.timeline({ repeat: -1, yoyo: true });

const TechnoidSection1 = () => {
  const tml1 = useRef(timeline1);
  const technoidContainer1 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tml1.current.to(".technoidShine", {
        scale: [0.6, 1],
        duration: 3,
      });
    }, technoidContainer1.current);
    return () => ctx.revert();
  }, []);

  //ORIGINAL
  //   gsap.to(".technoid-jug", {
  //     scrollTrigger: { scrub: 1 },
  //     scale: 0.5,
  //     translateX: -100,
  //     translateY: -10,
  //     rotate: 20,
  //   });

  return (
    <>
      <section
        className="technoid-section-1"
        id="technoid-section-1"
        ref={technoidContainer1}
      >
        <div className="technoid-header1-container">
          <div className="header-right-img header-img">
            <div className="header-image-technoid-shine">
              <div className="technoid-shine">
                <Parallax>
                  <img src={imgShine} className="technoidShine" alt="" />
                </Parallax>
              </div>
            </div>
            <div className="header-image-technoid-jug">
              <div className="technoid-jug">
                <Parallax
                  translateY={[0, -10]}
                  translateX={[50, -100]}
                  rotate={[0, 25]}
                >
                  <img src={imgJug} alt="" />
                </Parallax>
              </div>
            </div>
            <div className="header-image-biscuit">
              <div className="full-biscuit">
                <Parallax easing={"easeInOut"} speed={7}>
                  <img src={imgFullBisc} className="" alt="" />
                </Parallax>
              </div>
              <div className="half-biscuit">
                <Parallax easing={"easeInOut"} speed={2}>
                  <img src={imgHalfBisc} className="" alt="" />
                </Parallax>
              </div>
            </div>
          </div>
          <div className="technoid-header-middle-img">
            <div className="technoid-ED-content">
              <Parallax scale={[0.5, 1.3]} speed={-10} className="arContent">
                <img
                  src={ED1}
                  className="lightMode-EDimg"
                  id="eid_image_light"
                  alt=""
                />
                <img
                  src={ED2}
                  className="darkMode-EDimg technoid-display"
                  id="eid_image_dark"
                  alt=""
                />
              </Parallax>
            </div>
          </div>
          <div className="header-left-img header-img">
            <div className="technoid-cup">
              <Parallax
                easing={"easeInOut"}
                translateY={[-45, 120]}
                translateX={[-60, 10]}
              >
                <img className="imgCup" src={imgCup} alt="" />
              </Parallax>
            </div>
            <div className="technoid-chocolayer">
              <Parallax
                easing={"easeInOut"}
                translateY={[-50, 120]}
                translateX={[-60, 10]}
              >
                <img className="imgChocoLayer" src={imgChocoLayer} alt="" />
              </Parallax>
            </div>
          </div>
        </div>
        <div className="technoid-ribbon-celebration">
          <div className="celeberationLine-group">
            <div className="ribbon1">
              <Parallax easing={"ease"} speed={10}>
                <img src={ribbonImg1} alt="" />
                <img src={ribbonImg2} alt="" />
              </Parallax>
            </div>
            <div className="ribbon2">
              <Parallax easing={"ease"} speed={-5}>
                <img src={ribbonImg3} alt="" />
                <img src={ribbonImg4} alt="" />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default TechnoidSection1;
