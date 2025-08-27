import React from 'react'
import Container from '../Container'
import Title from '../Share/Title'
import useMoodToggle from '../../utils/Hooks/useMoodToggle'
const Studies = [
  {
    id: "1",
    image: "https://iili.io/KdyHmns.png",
    title: "Prattayon",
    subTitle:
      "Mobile App Redesign",
  },
  {
    id: "2",
    image: "https://iili.io/KdyHmns.png",
    title: "Prattayon",
    subTitle:
      "Mobile App Redesign",
  },
  {
    id: "3",
    image: "https://iili.io/KdyHmns.png",
    title: "Prattayon",
    subTitle:
      "Mobile App Redesign",
  },
  {
    id: "4",
    image: "https://iili.io/KdyHmns.png",
    title: "Prattayon",
    subTitle:
      "Mobile App Redesign",
    eduction:[
      "EduLearn – Online Learning Platform Redesign",
      [
         "Objective: Improve navigation & user engagement",
         "Tools Used: Figmaplatforms",  
      ]
      
    ]
  },
];
const CaseStudies = () => {
    const {darkMode}  = useMoodToggle()
  return (
    <section
      className="relative pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#030712" : "#F9FAFB" }}
    >
      <Title
        button={"Completed Case Studies"}
        title={
          "A showcase of real-world design challenges I’ve solved—highlighting my practical skills, user-centered thinking, and problem-solving approach in UI/UX projects."
        }
      />
      <Container>
        <div className="pt-12">
          
        </div>
      </Container>
    </section>
  )
}

export default CaseStudies