import React from "react";
import useMoodToggle from "../../utils/Hooks/useMoodToggle";
import Title from "../Share/Title";
import Container from "../Container";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
const services = [
  {
    id: "1",
    image: "https://i.ibb.co.com/JwkPb4QY/first.png",
    title: "Web & Mobile App UI Design",
    subTitle:
      "I design clean, modern, and responsive interfaces for websites and mobile applications (both iOS & Android), ensuring a smooth and visually appealing user experience.",
  },
  {
    id: "2",
    image: "https://i.ibb.co.com/RGqMzg34/second.png",
    title: "Web & Mobile App UI Design",
    subTitle:
      "I create low to high-fidelity wireframes and clickable prototypes using Figma, helping you visualize the final product before development begins.",
  },
  {
    id: "3",
    image: "https://i.ibb.co.com/JjJzY51f/third.png",
    title: "Web & Mobile App UI Design",
    subTitle:
      "I plan user journeys, design intuitive flows, and solve UX problems to improve usability and make your product simple, engaging, and enjoyable to use.",
  },
  {
    id: "4",
    image: "https://i.ibb.co.com/DfbDQc2n/fouth.png",
    title: "Web & Mobile App UI Design",
    subTitle:
      "I improve websites and apps by studying user behavior and identifying key usability issues.hrough thoughtful redesign I enhance clarity, boost conversions and ensure full mobile responsiveness.",
  },
];
const Services = () => {
  const { darkMode } = useMoodToggle();

  return (
    <section
      className="relative  pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#030712" : "#F9FAFB" }}
    >
      <Title
        button={"My UI/UX Design Services"}
        title={
          "I create modern, responsive, and user-friendly designs that focus on real user needs. From wireframes to final UI, I deliver clean and intuitive digital experiences for websites, apps, and dashboards."
        }
      />
      <Container>
        <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service) => (
            <div
              key={service?.id}
              className="p-6 rounded-2xl"
              style={{ backgroundColor: darkMode ? "#1F2937" : "#E9EEF3" }}
            >
              <div className="md:flex  gap-4">
                {/* Image Container with fixed size */}
                <div className="md:w-[350px] md:h-[230px] flex-shrink-0">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={service?.image}
                    alt={service?.title}
                  />
                </div>

                <div className="pt-3 md:pt-0">
                  <h5
                    style={{ color: darkMode ? "#CEEEEA" : "#000" }}
                    className="text-base font-semibold"
                  >
                    {service?.title}
                  </h5>
                  <p
                    style={{ color: darkMode ? "#D1D5DB" : "#484848", fontFamily: "Poppins, sans-serif" }}
                    className="text-sm text-gray-500 pt-2"
                  >
                    {service?.subTitle}
                  </p>
                </div>
              </div>

              <div className="w-full flex items-center justify-center pt-2 text-center">
                <IoArrowForwardCircleOutline
                  style={{ color: darkMode ? "#fff" : "#000" }}
                  size={25}
                />
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Services;
