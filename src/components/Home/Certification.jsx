import React from "react";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
import Title from "../Share/Title";
import Container from "../Container";
import certificate from "../../assets/certification/certificate.png";
const Certification = () => {
  const { darkMode } = useMoodToggle();
  return (
    <section
      className="relative pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#030712" : "#F9FAFB" }}
    >
      <Title
        button={"UI/UX Design Certification"}
        title={
          "Successfully completed a comprehensive, project-based UI/UX Design course under the guidance of industry experts through the Ostad platform."
        }
      />
      <Container>
        <div className="pt-12">
          <div
            className="md:flex items-center px-6 py-8 rounded-lg gap-5"
            style={{
              backgroundColor: darkMode ? "#1F2937" : "#E9EEF3",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            }}
          >
            <img src={certificate} alt="" />
            <div style={{ fontFamily: "Poppins" }}>
              <h5
                className="text-2xl font-bold pb-3 pt-4 md:pt-0"
                style={{ color: darkMode ? "#CEEEEA" : "#143171" }}
              >
                What I Learned & Achieved:
              </h5>
              <div className="space-y-2" style={{ color: darkMode ? "#D1D5DB" : "#4B5563" }}>
                <p style={{ fontFamily: "Poppins" }}>
                  1. Gained hands-on experience with the complete UI/UX design
                  process
                </p>
                <p style={{ fontFamily: "Poppins" }}>
                  2. Worked on real-life UX challenges and user-centered project
                  briefs
                </p>
                <p style={{ fontFamily: "Poppins" }}>
                  3. Developed wireframes, prototypes, and responsive layouts
                </p>
                <p style={{ fontFamily: "Poppins" }}>
                  4. Focused on user-centered solutions with attention to
                  accessibility, usability, and responsive behavior{" "}
                </p>
                <p style={{ fontFamily: "Poppins" }}>
                  5. Ranked 14th out of 166 participants in the final course
                  evaluation
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certification;
