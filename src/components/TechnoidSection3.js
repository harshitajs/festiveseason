import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import { useRef, useLayoutEffect } from "react";

import imgShine3 from "../images/shine-3.png";
import imgSloganLight from "../images/slogan-light.png";
import imgSloganDark from "../images/slogan-dark.png";
import imgPinkBallon from "../images/pink-ballon.png";
import imgGreenBalloon from "../images/green-balloon.png";
import imgOrangeWave from "../images/orange-wave.png";

gsap.registerPlugin(ScrollTrigger);
const timeline3 = gsap.timeline({ repeat: -1, yoyo: true });

const TechnoidSection3 = () => {
  const tml3 = useRef(timeline3);
  const technoidContainer3 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tml3.current.to(".techoidShine3", {
        scale: [0.5, 1.3],
        duration: 3,
      });
      tml3.current.to(".pinkBalloon", {
        y: -35,
        x: 20,
        rotate: -5,
        duration: 1.5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      tml3.current.to(".pinkBalloon", {
        y: -10,
        x: 25,
        duration: 1.5,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
      tml3.current.to(".greenBalloon", {
        y: -20,
        x: 10,
        duration: 1.8,
        rotate: -4,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
      tml3.current.to(".greenBalloon", {
        y: -30,
        x: 20,
        duration: 2,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, technoidContainer3.current);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        className="technoid-section-3"
        id="technoid-section-3"
        ref={technoidContainer3}
      >
        <div className="technoid-container-3">
          <div className="technoid-header3-top">
            <div className="header-image-technoid-shine">
              <div className="technoid-shine-3">
                <Parallax>
                  <img src={imgShine3} className="techoidShine3" alt="" />
                </Parallax>
              </div>
            </div>

            <div className="technoid-slogan">
              <div id="technoid-slogan-img">
                <Parallax translateY={[50, -70]}>
                  <img id="sloganImg" src={imgSloganLight} alt="" />
                </Parallax>
              </div>
            </div>
          </div>

          <div className="technoid-header3-left">
            <div className="pink-balloon">
              <Parallax speed={30}>
                <img src={imgPinkBallon} alt="" className="pinkBalloon" />
              </Parallax>
            </div>
          </div>

          <div className="technoid-header3-middle">
            <div className="content-box-3">
              <p className="content-para-3">
                Now that we’re ready in our new Eid outfits, it’s time for
                Takbeer or Eid prayers. Let’s revel in this beautiful moment.
                Later, let’s join the family gathering and exchange warm
                greetings with loved ones.
              </p>
            </div>
          </div>

          <div className="technoid-header3-bottom">
            <div className="green-balloon">
              <Parallax>
                <img src={imgGreenBalloon} alt="" className="greenBalloon" />
              </Parallax>
            </div>
          </div>

          <div className="header-image-technoid-wave">
            <div className="orange-wave">
              <Parallax
                easing={"easeInOut"}
                translateX={[-20, 0]}
                translateY={[0, -70]}
                speed={10}
              >
                <img src={imgOrangeWave} alt="" className="orangeWave" />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
      <div id="technoid-button-container">
        <div className="technoid-button-panel">
          <div className="technoid-button-list">
            <button className="button-class">Eid Events Booklet</button>
            <button className="button-class">Greeting Cards</button>
            <button className="button-class">Houses Decorations</button>
            <button className="button-class">Companies Decorations</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnoidSection3;
