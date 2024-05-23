import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import { useRef, useLayoutEffect } from "react";

import imgCard1 from "../images/card1.png";
import imgCard2 from "../images/card2.png";
import imgCookie from "../images/greeting-cookie.png";
import imgvioletBallon from "../images/violet-balloon.png";
gsap.registerPlugin(ScrollTrigger);
const timeline5 = gsap.timeline({ repeat: -1, yoyo: true });

const TechnoidSection5 = () => {
  const tml5 = useRef(timeline5);
  const technoidContainer5 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tml5.current.to(".violetBalloon", {
        y: -15,
        x: 10,
        duration: 1.5,
        rotate: -5,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
      });
      tml5.current.to(".violetBalloon", {
        y: -25,
        x: 15,
        duration: 2,
        ease: "power1.in",
        repeat: -1,
        yoyo: true,
      });
    }, technoidContainer5.current);
    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        className="technoid-section-5"
        id="technoid-section-5"
        ref={technoidContainer5}
      >
        <div className="technoid-header5-container">
          <div className="technoid-header5-left">
            <div className="greeting-cookie">
              <Parallax translateX={[10, -100]} speed={15}>
                <img src={imgCookie} className="greetingCookie" alt="" />
              </Parallax>
            </div>
          </div>
          <div className="technoid-header5-middle">
            <div className="festive-cards-container">
              <div className="card1">
                <Parallax>
                  <img src={imgCard1} id="imageCard1" alt="" />
                </Parallax>
              </div>
              <div className="card2">
                <Parallax>
                  <img src={imgCard2} id="imageCard2" alt="" />
                </Parallax>
              </div>
            </div>
          </div>
          <div className="technoid-header5-bottom">
            <div id="greetings-message-box">
              <span id="msg1">Greeting Cards</span>
              <p id="msg2">To share with your loved ones!</p>
              <div className="technoid-button-list">
                <button className="button-class">Your Greeting</button>
                <button className="button-class">Create Your Own</button>
              </div>
            </div>
          </div>
          <div className="technoid-header5-right">
            <div className="violet-balloon">
              <Parallax
                translateY={[45, -55]}
                translateX={[-80, 60]}
                easing={"easeInOut"}
              >
                <img src={imgvioletBallon} alt="" className="violetBalloon" />
              </Parallax>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TechnoidSection5;
