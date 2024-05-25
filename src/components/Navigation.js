import audioDisable from "../images/audio-disable.png";
import audioEnable from "../images/audio-enable.png";
import darkMode from "../images/dark-mode.png";
import lightMode from "../images/light-mode.png";
import headerImage from "../images/section1-header.png";
import sampleLogo from "../images/sample-logo.jpeg";
import headerImageDark from "../images/section1-header-dark.png";
import imgSloganLight from "../images/slogan-light.png";
import imgSloganDark from "../images/slogan-dark.png";
import imgPinkWaveDark from "../images/pinkWave-darkMode.png";
import imgPinkWaveLight from "../images/pinkWave-lightMode.png";
import { useState } from "react";

const Navigation = () => {
  const [modeFlag, setModeFlag] = useState(true);
  const [audioFlag, setAudio] = useState(false);

  const updateAudio = () => {
    setAudio(!audioFlag);
    document.getElementById("technoid-modal").style.display = "none";
  };
  const ChangeMode = (e) => {
    var btnElem;
    const modeImg = modeFlag ? darkMode : lightMode;
    const OverlayImg = modeFlag ? headerImageDark : headerImage;
    const sloganImg = modeFlag ? imgSloganDark : imgSloganLight;
    const waveImg = modeFlag ? imgPinkWaveDark : imgPinkWaveLight;

    /* Change the color of the elements and sections when in dark mode*/

    document.body.classList.toggle("technoid-bgcolor-darkMode");

    document.getElementById("technoid-visibility-img").src = modeImg;
    document.getElementById("headerImage").src = OverlayImg;
    document.getElementById("sloganImg").src = sloganImg;
    document.getElementById("imgFamilyWave").src = waveImg;

    document
      .getElementById("technoid-header")
      .classList.toggle("technoidHeader-dark-mode");

    document
      .getElementById("technoid-visibility-img")
      .classList.toggle("darkModeicon");

    document.getElementById("checkMode").classList.toggle("technoid-darkMode");
    document
      .getElementById("technoid-lang")
      .classList.toggle("technoid-lang-darkMode");

    document
      .getElementById("technoid-button-container")
      .classList.toggle("technoid-bgcolor-darkMode");

    document.getElementById("msg1").classList.toggle("technoid-span-darkMode");
    document.getElementById("msg2").classList.toggle("technoid-p-darkMode");

    document
      .getElementById("eid_image_dark")
      .classList.toggle("technoid-display");
    document
      .getElementById("eid_image_light")
      .classList.toggle("technoid-display");

    document
      .getElementById("content-button")
      .classList.toggle("dark-mode-button");

    document.getElementById("moonImage").classList.toggle("visibility");
    document.getElementById("sunImage").classList.toggle("visibility");
    btnElem = document.getElementsByClassName("button-class");
    for (var i = 0; i < btnElem.length; i++) {
      btnElem[i].classList.toggle("button-class-darkMode");
    }

    setModeFlag(!modeFlag);
  };
  return (
    <>
      <div className="technoid-main-container technoid-light-mode">
        <header className="technoid-flex-header-container" id="technoid-header">
          <div className="technoid-flex-header technoid-flex-item-left">
            <div id="technoid-lang">
              <div className="technoid-lang-option">
                <span>English</span>
              </div>
            </div>

            <div className="technoid-audio">
              <button className="technoid-audion-button technoid-audio-disable">
                <img
                  title="Disable audio"
                  src={audioDisable}
                  alt="Disable audio"
                />
              </button>
              <button className="technoid-audion-button technoid-audio-enable">
                <img
                  title="Enable audio"
                  src={audioEnable}
                  alt="Enable audio"
                />
              </button>
            </div>
          </div>

          <div className="technoid-flex-header technoid-flex-item-middle">
            <div className="sampleLogo">
              <img src={sampleLogo} alt="Sample Logo" />
            </div>
          </div>

          <div
            className="technoid-flex-header technoid-flex-item-right"
            onClick={(e) => ChangeMode(e)}
          >
            <div className="technoid-visibility-box">
              <div className="technoid-visibility-button" id="checkMode">
                <img
                  src={lightMode}
                  alt="Visibility"
                  id="technoid-visibility-img"
                />
              </div>
            </div>
          </div>
        </header>
        <div id="technoid-modal">
          <div className="technoid-modal-box">
            <div className="technoid-modal-title">
              For better user experience enable the audio access
            </div>
            <button className="tecnoid-modal-button" onClick={updateAudio}>
              OK
            </button>
          </div>
        </div>
        <div className="overlayHeader">
          <img src={headerImage} id="headerImage" alt="" />
        </div>
      </div>
    </>
  );
};

export default Navigation;
