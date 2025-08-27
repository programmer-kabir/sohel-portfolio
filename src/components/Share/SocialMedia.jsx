import React from "react";
// White Mood Icons
import whitefacebook from "../../assets/Icons/whiteMood/facebook.png";
import whitelinkedin from "../../assets/Icons/whiteMood/linkedin.png";
import whitefiverr from "../../assets/Icons/whiteMood/fiverr.png";
import whitedribbble from "../../assets/Icons/whiteMood/dribbble.png";
import whiteFigma from "../../assets/Icons/whiteMood/Figma.png";
// Dark Mood Icons
import darkfacebook from "../../assets/Icons/darkMood/facebook.png";
import darklinkedin from "../../assets/Icons/darkMood/linkedin.png";
import darkfiverr from "../../assets/Icons/darkMood/fiverr.png";
import darkdribbble from "../../assets/Icons/darkMood/dribbble.png";
import darkFigma from "../../assets/Icons/darkMood/Figma.png";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
const SocialMedia = () => {
  const { darkMode } = useMoodToggle();
  return (
    <div className="flex gap-4">
      <img src={darkMode ? darkfacebook : whitefacebook} alt="Facebook" />
      <img src={darkMode ? darklinkedin : whitelinkedin} alt="LinkedIn" />
      <img src={darkMode ? darkfiverr : whitefiverr} alt="Fiverr" />
      <img src={darkMode ? darkdribbble : whitedribbble} alt="Dribbble" />
      <img src={darkMode ? darkFigma : whiteFigma} alt="Figma" />
    </div>
  );
};

export default SocialMedia;
