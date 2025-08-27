import React from "react";
import Container from "../Container";
import Title from "../Share/Title";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
import figma from "../../assets/Skills/figma.svg";
import Framer from "../../assets/Skills/Framer.png";
import { DiPhotoshop } from "react-icons/di";
import { SiAdobephotoshop } from "react-icons/si";
const Skills = () => {
  const { darkMode } = useMoodToggle();
  return (
    <section
      className="relative pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#111827" : "#FFF" }}
    >
      <Title
        button={"Skills"}
        title={"The skills, tools and technologies I am really good at:"}
      />
      <Container>
        <div className="pt-12 flex items-center   justify-center gap-5">
          {/* <div className="p-6 rounded-2xl  border-y border-[#8d8d8d]" style={{ background: darkMode ? "rgba(31, 41, 55, 0.20)" : "#E9EEF3",  boxShadow: "4px 7px 26px #0000001f"   }}>
            <img className="w-10 h-10" src={figma} alt="" />
          </div> */}
          <div
            className={`p-6 rounded-2xl ${
              darkMode ? "border-y border-[#8d8d8d]" : ""
            }`}
            style={{
              background: darkMode ? "rgba(31, 41, 55, 0.20)" : "#E9EEF3",
              boxShadow: darkMode ? "4px 7px 26px #0000001f" : "none",
            }}
          >
            <img className="w-10 h-10" src={figma} alt="" />
          </div>

          <div
            className={`p-6 rounded-2xl ${
              darkMode ? "border-y border-[#8d8d8d] shadow-lg" : ""
            }`}
            style={{
              backgroundColor: darkMode ? "rgba(31, 41, 55, 0.2)" : "#E9EEF3",
            }}
          >
            <img className="w-10 h-10" src={figma} alt="" />
          </div>

          <div
            className={`p-6 rounded-2xl ${
              darkMode ? "border-y border-[#8d8d8d]" : ""
            }`}
            style={{
              background: darkMode ? "rgba(31, 41, 55, 0.20)" : "#E9EEF3",
              boxShadow: darkMode ? "4px 7px 26px #0000001f" : "none",
            }}
          >
            <img className="w-10 h-10" src={Framer} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
