import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import { useRef, useLayoutEffect } from "react";

import imgOrangeKite from "../images/orange-kite.png";
import imgGaintWheel from "../images/gaint-wheel.png";
import imgSlide from "../images/techno-slide.png";
import imgOrangeWave from "../images/orange-wave-6.png";
import imgPurpleWave from "../images/purple-wave-6.png";

gsap.registerPlugin(ScrollTrigger);
const timeline6 = gsap.timeline({ repeat: -1, yoyo: true });

const TechnoidSection6 = () => {
  const tml6 = useRef(timeline6);
  const technoidContainer6 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tml6.current.to(".technoid-kite-6", {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate: -5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      tml6.current.to(".technoid-kite-6", {
        y: -25,
        x: 15,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
      //   tml6.current.to(".technoid-gaint-wheel", {
      //     y: -25,
      //     x: 15,
      //     duration: 2,
      //     ease: "power1.in",
      //     repeat: -1,
      //     yoyo: true,
      //   });
    }, technoidContainer6.current);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        className="technoid-section-6"
        id="technoid-section-6"
        ref={technoidContainer6}
      >
        <div className="technoid-header6-container">
          <div className="technoid-header6-left">
            <div className="header-image-technoid-kite">
              <div className="technoid-kite-6">
                <Parallax translateX={[-100, 0]} speed={10}>
                  <img src={imgOrangeKite} id="orangeKite" alt="" />
                </Parallax>
              </div>
            </div>
            <div className="technoid-gaint-wheel">
              <div className="gaint-wheel">
                <Parallax
                  translateX={[0, 220]}
                  translateY={[40, -90]}
                  easing={"linear"}
                  scale={[1, 1.3]}
                  speed={20}
                >
                  <img src={imgGaintWheel} className="imgGaintWheel" alt="" />
                </Parallax>
              </div>
            </div>
          </div>
          <div className="technoid-header6-middle">
            <div className="content-box-6">
              <p className="content-text-6">
                Next up, a treat for the eyes and a feast for the belly, it’s
                ‘Eid lunch’ with family. Although we might be missing a few due
                to food coma, there’s plenty of room for laughter and fun.
              </p>
            </div>
          </div>
          <div className="technoid-header6-right">
            <div className="technoid-slide">
              <Parallax
                translateX={[10, -150]}
                translateY={[0, -15]}
                scale={[1, 0.7]}
                rotate={[0, -4]}
                speed={15}
              >
                <img src={imgSlide} className="imgSlide img-fit" alt="" />
              </Parallax>
            </div>
            <div className="technoid-purplewave-6">
              <Parallax translateX={[20, 0]} easing={"easeIn"} speed={5}>
                <img src={imgPurpleWave} className="imgPurpleWave" alt="" />
              </Parallax>
            </div>
            <div className="technoid-orangewave-6">
              <Parallax translateX={[50, 0]} easing={"ease"} speed={8}>
                <img src={imgOrangeWave} className="imgOrangeWave" alt="" />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnoidSection6;
