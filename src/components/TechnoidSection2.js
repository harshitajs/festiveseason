import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import { useRef, useLayoutEffect } from "react";

import imgSmokeLamp from "../images/smoke-lamp.png";
import imgSmoke from "../images/smoke.png";
import imgShine from "../images/shine.png";
import imgKite from "../images/kite.png";
import imgWave from "../images/wave.png";

gsap.registerPlugin(ScrollTrigger);
const timeline2 = gsap.timeline({ repeat: -1, yoyo: true });

const TechnoidSection2 = () => {
  const tml2 = useRef(timeline2);
  const technoidContainer2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tml2.current.to(".techoidShine1", {
        scale: [0.5, 1.3],
        duration: 3,
      });
      tml2.current.to(".techoidKite", {
        y: -15,
        x: 25,
        duration: 2,
        rotate: 3,
        ease: "power1.inOut",
      });
    }, technoidContainer2.current);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        className="technoid-section-2"
        id="technoid-section-2"
        ref={technoidContainer2}
      >
        <div className="technoid-header2-container">
          <div className="technoid-header2-left">
            <div className="smoke-lamp">
              <Parallax>
                <img className="smokeLamp" src={imgSmokeLamp} alt="" />
              </Parallax>
            </div>
            <div className="smoke-image">
              <Parallax easing={"easeInOut"} translateY={[100, 0]} speed={40}>
                <img className="smokeImage" src={imgSmoke} alt="" />
              </Parallax>
            </div>
          </div>
          <div className="technoid-header2-middle">
            <div className="content-box">
              <p className="content-para">
                After a whole year of patiently, but eagerly waiting, Eid is
                finally here! Hands up everyone who missed the incense smells,
                the outfits and the delicious food? But first, let’s get
                Eid-ready with our outfits.
              </p>
              <button className="content-button" id="content-button">
                Eid Identity
              </button>
            </div>
          </div>
          <div className="technoid-header2-right">
            <div className="header-image-technoid-shine">
              <div className="technoid-shine-2">
                <Parallax speed={1}>
                  <img src={imgShine} className="techoidShine1" alt="" />
                </Parallax>
              </div>
            </div>
            <div className="header-image-technoid-kite">
              <div className="technoid-kite">
                <Parallax translateY={[0, -200]} speed={80}>
                  <img src={imgKite} className="techoidKite" alt="" />
                </Parallax>
              </div>
            </div>
          </div>
          <div className="header-image-technoid-wave">
            <div className="technoid-wave">
              <Parallax
                easing={"easeInOut"}
                translateX={[-20, 0]}
                translateY={[0, -70]}
                speed={10}
              >
                <img src={imgWave} className="techoidWave" alt="" />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnoidSection2;
