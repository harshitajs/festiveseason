import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import { useRef, useLayoutEffect } from "react";

import imgPinkBalloon7 from "../images/pink-balloon-7.png";
import imgKite7 from "../images/kite-7.png";
import imgCookie7 from "../images/cookie-7.png";

import imgGreenBalloon7 from "../images/green-balloon-7.png";
gsap.registerPlugin(ScrollTrigger);
const timeline7 = gsap.timeline({ repeat: -1, yoyo: true });

const TechnoidSection7 = () => {
  const tml7 = useRef(timeline7);
  const technoidContainer7 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tml7.current.to("imgKite7", {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate: -5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });

      tml7.current.to(".imgKite7", {
        y: -25,
        x: 15,
        duration: 2.5,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
      tml7.current.to(".imgCookie7", {
        x: 10,
        duration: 1.5,
        delay: 1,
        rotate: -5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      tml7.current.to(".imgPinkBalloon7", {
        y: -15,
        x: 10,
        duration: 2,
        rotate: -3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      tml7.current.to(".imgGreenBalloon7", {
        y: -15,
        x: 10,
        duration: 2.8,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, technoidContainer7.current);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        className="technoid-section-7"
        id="technoid-section-7"
        ref={technoidContainer7}
      >
        <div className="technoid-header7-container">
          <div className="technoid-header7-top">
            <div className="pink-balloon-7">
              <Parallax translateX={[0, -80]} speed={5}>
                <img src={imgPinkBalloon7} alt="" className="imgPinkBalloon7" />
              </Parallax>
            </div>

            <div className="technoid-kite-7">
              <Parallax translateX={[0, 30]} speed={5}>
                <img src={imgKite7} className="imgKite7" alt="" />
              </Parallax>
            </div>

            <div className="technoid-cookie-7">
              <Parallax translateY={[0, -30]} translateX={[0, 30]} speed={5}>
                <img src={imgCookie7} className="imgCookie7" alt="" />
              </Parallax>
            </div>
          </div>
          <div className="technoid-header7-middle">
            <div className="content-box-7">
              <p className="content-para-7">
                After we emerge from our Eid coma, everyone’s excited about Eid
                outings. Where do we go? What adventures can await? Don’t worry,
                we have you covered, with Eid events.
              </p>
            </div>
            <div className="technoid-button-list">
              <button className="button-class modifiied-btn">
                Discover our Eid Events
              </button>
            </div>
          </div>
          <div className="technoid-header7-bottom">
            <div className="green-balloon-7">
              <Parallax
                translateY={[10, -70]}
                translateX={[-100, 0]}
                speed={10}
              >
                <img
                  src={imgGreenBalloon7}
                  alt=""
                  className="imgGreenBalloon7"
                />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnoidSection7;
