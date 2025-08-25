import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "../Container";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import mood from "../../assets/Icons/mood.png";
import whiteMood from "../../assets/Icons/whiteMood.png";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { darkMode, setDarkMode } = useMoodToggle();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const bgColor = darkMode
    ? isScrolled
      ? "bg-[#030712] shadow-lg py-2" // dark mode scroll color
      : "bg-transparent"
    : isScrolled
    ? "bg-[#AC9DB8] shadow-lg py-2" // light mode scroll color
    : "bg-transparent";
  return (
     <nav className={`fixed top-0 w-full transition-all duration-500 z-[100] ${bgColor}`}>
      <Container>
        <div className="flex justify-between items-center text-white">
          <h1 className="text-3xl font-bold">{"<SS />"}</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none md:hidden"
          >
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>

          <div className="hidden md:flex items-center space-x-4 text-base">
            <ScrollLink to="/" className="text-white cursor-pointer ">
              Home
            </ScrollLink>

            <ScrollLink to="/about" className="text-white cursor-pointer">
              About
            </ScrollLink>
            <ScrollLink to="/resume" className="text-white cursor-pointer">
              Work
            </ScrollLink>
            <ScrollLink to="/skills" className="text-white cursor-pointer">
              Testimonials
            </ScrollLink>
            <ScrollLink to="/services" className="text-white cursor-pointer">
              Contacts
            </ScrollLink>

            {/* Divider */}
            <span className="border-l border-[#F0F0F0] h-6"></span>

            {/* Image */}
            <img
              src={darkMode ? mood : whiteMood}
              alt="toggle theme"
              className="w-6 h-6 cursor-pointer"
              onClick={() => setDarkMode(!darkMode)}
            />

            {/* Button */}
            <button className="bg-white px-5 py-2 rounded-xl text-[#111827]">
              Download CV
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed z-50 top-0 right-0 h-full bg-[#1E1E1E] w-4/5 shadow-lg transform transition-transform duration-[500ms] ease-in-out ${
            isOpen ? "translate-x-0 z-50" : "translate-x-full z-50"
          } md:hidden`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-white"
          >
            <FiX size={28} />
          </button>
          <div className="mt-16 space-y-6 py-6 px-10 text-lg flex flex-col">
            <ScrollLink
              to="/"
              className="text-white cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="/about"
              className="text-white cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </ScrollLink>
            <ScrollLink
              to="/resume"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Work
            </ScrollLink>
            <ScrollLink
              to="/skills"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Testimonials
            </ScrollLink>
            <ScrollLink
              to="/services"
              className="hover:text-white text-[#cacaca] cursor-pointer"
              activeClass="text-white"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </ScrollLink>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
