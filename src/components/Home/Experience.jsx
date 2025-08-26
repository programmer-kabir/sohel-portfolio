import React from "react";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
import Title from "../Share/Title";
import Container from "../Container";
import experience from "../../assets/Exprerience/demo.png";
const Experience = () => {
  const { darkMode } = useMoodToggle();
  return (
    <section
      className="relative -top-2 md:-top-1 pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#111827" : "#fff" }}
    >
      <Title
        button={"Professional Experience"}
        title={
          " Freelance UI/UX Designer Bangladesh | January 2023 – Present As a freelance UI/UX designer, I have worked on various real-world and conceptual projects focused on solving user problems through clean, user-centered design."
        }
      />
      <Container>
        <div className="pt-16">
          <div className="md:flex items-center gap-5 px-6 py-8 rounded-lg" style={{ backgroundColor: darkMode ? "#1F2937" : "#E9EEF3", boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)" }}>
            <div>
              <img src={experience} alt="" />
            </div>
            <div className="pt-5 md:pt-0">
              <h5 className="text-2xl font-bold pb-3 " style={{ color: darkMode ? "#CEEEEA" : "#143171" }}>
                Key Responsibilities & Achievements:
              </h5>
             <div className="space-y-2" style={{ color: darkMode ? "#D1D5DB" : "#4B5563" }}>
               <p className="text-base" >
                1. Designed responsive websites and mobile apps using Figma
              </p>
              <p>
                2. Experienced in Wireframing, High-Fidelity Prototyping, and
                building Design Systems
              </p>
              <p>
                3. Completed over 10+ successful projects including landing
                pages, admin dashboards, and e-commerce <br /> platforms
              </p>
              <p>
                4. Focused on user-centered solutions with attention to
                accessibility, usability, and responsive behavior
              </p>
              <p>
                5. Delivered UI designs to both local and international clients
                through Fiverr and direct collaborations
              </p>
             </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
