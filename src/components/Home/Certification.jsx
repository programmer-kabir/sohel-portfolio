import React from "react";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
import Title from "../Share/Title";
import Container from "../Container";
import certificate from '../../assets/certification/certificate.png'
const Certification = () => {
  const { darkMode } = useMoodToggle();
  return (
    <section
      className="relative -top-2 md:-top-1 pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#030712" : "#F9FAFB" }}
    >
      <Title
        button={"UI/UX Design Certification"}
        title={
          "Successfully completed a comprehensive, project-based UI/UX Design course under the guidance of industry experts through the Ostad platform."
        }
      />
      <Container>
<div
  className="pt-12"
  
>
<div style={{
    backgroundColor: darkMode ? "#1F2937" : "#E9EEF3",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
  }}>
asf
</div>

        </div>
      </Container>
    </section>
  );
};

export default Certification;
