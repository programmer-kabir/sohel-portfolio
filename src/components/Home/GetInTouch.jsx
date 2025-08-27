import React from "react";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
import Title from "../Share/Title";
import Container from "../Container";
import { HiOutlineMail } from "react-icons/hi";
import { FiCopy, FiPhone } from "react-icons/fi";
import SocialMedia from "../Share/SocialMedia";
import toast, { Toaster } from "react-hot-toast";

const GetInTouch = () => {
  const { darkMode } = useMoodToggle();

  // Copy handler with toast
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success(`${text} copied!`, {
      style: {
        background: darkMode ? "#1F2937" : "#F9FAFB",
        color: darkMode ? "#E5E7EB" : "#111827",
        borderRadius: "8px",
        padding: "10px 16px",
      },
      iconTheme: {
        primary: "#05C6FE",
        secondary: "#fff",
      },
    });
  };

  return (
    <section
      className="pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#030712" : "#F9FAFB" }}
    >
      {/* Toaster for toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      <Title
        button={"Get in touch"}
        title={
          "If you’re looking for a passionate UI/UX designer, have a question, or simply want to connect — feel free to reach out. I’m always open to new opportunities and meaningful conversations."
        }
      />
      <Container>
        <div className="pt-16 flex flex-col gap-5 items-center justify-center">
          {/* Email */}
          <div className="flex items-center md:gap-5 gap-3 justify-center">
            <HiOutlineMail
              className="md:w-14 md:h-12 w-7 h-6"
              color={darkMode ? "#D1D5DB" : "#4B5563"}
            />
            <h1
              className="md:text-4xl text-lg font-semibold"
              style={{ color: darkMode ? "#CEEEEA" : "#143171" }}
            >
              sohel672rana@gmail.com
            </h1>
            <FiCopy
              className="cursor-pointer md:w-14 md:h-12 w-7 h-6"
              color={darkMode ? "#D1D5DB" : "#4B5563"}
              onClick={() => handleCopy("sohel672rana@gmail.com")}
            />
          </div>

          {/* Phone */}
          <div className="flex items-center gap-5 justify-center">
            <FiPhone
              className="md:w-14 md:h-12 w-7 h-6"
              color={darkMode ? "#D1D5DB" : "#4B5563"}
            />
            <h1
              className="md:text-4xl text-lg font-semibold"
              style={{ color: darkMode ? "#CEEEEA" : "#143171" }}
            >
              01922272631
            </h1>
            <FiCopy
              className="cursor-pointer md:w-14 md:h-12 w-7 h-6"
              color={darkMode ? "#D1D5DB" : "#4B5563"}
              onClick={() => handleCopy("01922272631")}
            />
          </div>

          <p style={{ color: darkMode ? "#D1D5DB" : "#4B5563" }}>
            You may also find me on these platforms!
          </p>
          <SocialMedia />
        </div>
      </Container>
    </section>
  );
};

export default GetInTouch;
