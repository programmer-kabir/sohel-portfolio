import profileImg from "../../assets/Banner/sohel.png";
import bgImg from "../../assets/Banner/background.png";
import DarkbgImg from "../../assets/Banner/darkbg.png";
import Container from "../Container";
import location from "../../assets/Icons/location.png";
import { Link } from "react-router-dom";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
// White Mood Icons
import whitefacebook from '../../assets/Icons/whiteMood/facebook.png'
import whitelinkedin from '../../assets/Icons/whiteMood/linkedin.png'
import whitefiverr from '../../assets/Icons/whiteMood/fiverr.png'
import whitedribbble from '../../assets/Icons/whiteMood/dribbble.png'
import whiteFigma from '../../assets/Icons/whiteMood/Figma.png'
// Dark Mood Icons
import darkfacebook from '../../assets/Icons/darkMood/facebook.png'
import darklinkedin from '../../assets/Icons/darkMood/linkedin.png'
import darkfiverr from '../../assets/Icons/darkMood/fiverr.png'
import darkdribbble from '../../assets/Icons/darkMood/dribbble.png'
import darkFigma from '../../assets/Icons/darkMood/Figma.png'
const Banner = () => {
  const { darkMode } = useMoodToggle();

  return (
    <section
      id="home"
      className="relative h-[550px] w-full bg-cover -top-1 bg-center flex items-center mt-0"
      style={{
        backgroundImage: `url(${darkMode ? DarkbgImg : bgImg})`,
      }}
    >
      {/* Overlay for dark effect */}

      {/* Content */}
      <Container>
        <div className="relative z-10 container mx-auto grid grid-cols-1  md:grid-cols-2 items-center">
          {/* Left text content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold " style={{ color: darkMode ? "#41B1CA" : "#143171" }}>
              Hi, I’m SOHEL RANA👋
            </h1>
          
            <p  style={{color:darkMode ? "#D1D5DB":"#707070"}} className="text-base  ">
              UI/UX Designer with 2+ years of experience in crafting intuitive,
              responsive, and user-focused digital products. I turn complex
              ideas into clean, functional designs using tools like
              Figma—ensuring every interface is both beautiful and easy to use.
            </p>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <img src={location} alt="" />
                <Link
                  to="https://ramgati.lakshmipur.gov.bd/"
                  className="text-[#44c5b6]"
                >
                  Ramgati Upozela, Bangladesh
                </Link>
              </div>
              <div className="flex items-center gap-2.5 mx-1.5">
                <div className="h-3 w-3  bg-[#10B981] rounded-full "></div>
                <p className="text-[#707070]">Available for new projectsh</p>
              </div>
            </div>
            {/* Icons */}
            <div className="flex gap-4">
      <img src={darkMode ? darkfacebook : whitefacebook} alt="Facebook"  />
      <img src={darkMode ? darklinkedin : whitelinkedin} alt="LinkedIn" />
      <img src={darkMode ? darkfiverr : whitefiverr} alt="Fiverr" />
      <img src={darkMode ? darkdribbble : whitedribbble} alt="Dribbble" />
      <img src={darkMode ? darkFigma : whiteFigma} alt="Figma" />
    </div>
          </div>

          {/* Right profile image */}
          <div className="flex justify-center md:justify-end">
            <img
              src={profileImg}
              alt="Kabir"
              className="w-64 md:w-80 rounded-2xl shadow border-8 border-white"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
