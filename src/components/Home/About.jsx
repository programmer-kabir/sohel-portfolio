import React from "react";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
import profileImg from "../../assets/Banner/sohel.png";
import Container from "../Container";

const About = () => {
  const { darkMode } = useMoodToggle();
  return (
    <section
      className="relative  pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#111827" : "#fff" }}
    >
      <div className="flex items-center justify-center ">
        <button className="primaryButton cursor-pointer">About Us</button>
      </div>
      <p className="text-center pt-4" style={{color:darkMode?"#F9FAFB":"#707070"}}>Curious about me? Here you have it:</p>
      <Container>
        <div className="pt-12 z-10 container mx-auto md:flex gap-7 items-center  md:px-12">
          {/* Right profile image */}
          <div className="flex w-full items-center justify-center md:w-[25%] relative z-auto px-8 md:px-0">
            <img
              src={profileImg}
              alt="Kabir"
              className="md:w-80 rounded-2xl shadow border-2 md:border-8 border-white z-50"
            />
            <div className="absolute  top-10 right-14 md:right-10 w-[80%] md:w-full h-full rounded-2xl shadow border-4 border-[#777] md:border-[#E9EEF3] bg-white z-0"></div>

          </div>


          {/* Left text content */}
          <div className="text-white space-y-6  md:w-[75%] pt-16 md:pt-0">
            <p
              style={{ color: darkMode ? "#D1D5DB" : "#707070" }}
              className="text-base  "
            >
              I’m Sohel Rana, a passionate and detail-oriented UI/UX Designer
              with over 2 years of hands-on experience in designing responsive,
              user-centric, and visually engaging digital products. I specialize
              in crafting intuitive interfaces that blend aesthetics with
              functionality—ensuring meaningful user experiences across web and
              mobile platforms. Throughout my career, I’ve worked on various
              projects, taking ideas from concept to high-fidelity prototypes.
              My key strengths lie in Wireframing & Prototyping, where I convert
              rough ideas into structured, interactive designs that guide both
              product teams and developers effectively. I also focus on
              Responsive Web & Mobile App Design, ensuring that each design
              adapts flawlessly to different screen sizes while maintaining a
              consistent user experience. Additionally, I have experience
              creating and managing Design Systems & Style Guides to help teams
              maintain visual harmony and scalability across products. My
              primary design tool is Figma, which I use for everything from
              low-fidelity wireframes to pixel-perfect UI designs. I value
              collaboration, design thinking, and a user-first mindset in every
              project I take on. I’m always excited to collaborate with
              forward-thinking teams and contribute to building products that
              are not just visually polished but truly solve user problems.
            </p>

            {/* Icons */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
