import React from "react";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
import Title from "../Share/Title";
import Container from "../Container";
import contactImg from "../../assets/contact/contact.png";
const Contact = () => {
  const { darkMode } = useMoodToggle();
  return (
    <section
      className="relative -top-2 md:-top-1 pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#111827" : "#FFF" }}
    >
      <Title
        button={"CALL"}
        title={
          "Open to exciting collaborations and ready to bring value to your upcoming projects with creativity, dedication, and user-focused design solutions."
        }
      />
      <Container>
        <div className="pt-16 md:flex items-center md:gap-5">
          <img className="scale-x-[-1]" src={contactImg} alt="" />
        <div className="w-full space-y-6">
  {(() => {
    const inputStyle = {
      backgroundColor: darkMode ? "#1F2937" : "#E9EEF3",
      border: darkMode ? "1px solid #D1D5DB" : "none",
      color: darkMode ? "#D1D5DB" : "#4B5563",
      fontFamily: "Poppins",
    };

    const baseClass =
      "px-4 py-2 outline-none rounded-lg w-full";

    return (
      <>
        <input
          type="text"
          name="name"
          id="name"
          className={baseClass}
          placeholder="Your Name*"
          style={inputStyle}
        />
        <input
          type="email"
          name="email"
          id="email"
          className={baseClass}
          placeholder="Your Email*"
          style={inputStyle}
        />
        <textarea
          name="message"
          id="message"
          className={baseClass}
          placeholder="Your Message*"
          rows={6}
          style={inputStyle}
        />
                <button className="bg-[#4E6CFF] p-4 text-white rounded-lg ">Send Message</button> 

      </>
    );
  })()}
</div>

        </div>
        
      </Container>
    </section>
  );
};

export default Contact;
