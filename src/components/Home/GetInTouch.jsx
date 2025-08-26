import React from 'react'
import useMoodToggle from '../../utils/Hooks/useMoodToggle'
import Title from '../Share/Title'
import Container from '../Container'

const GetInTouch = () => {
    const {darkMode}  = useMoodToggle()
  return (
    <section
      className="relative -top-2 md:-top-1 pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#030712" : "#F9FAFB" }}
    >
      <Title
        button={"My UI/UX Design Services"}
        title={
          "I create modern, responsive, and user-friendly designs that focus on real user needs. From wireframes to final UI, I deliver clean and intuitive digital experiences for websites, apps, and dashboards."
        }
      />
      <Container>
        <div className="pt-16">
          
        </div>
      </Container>
    </section>
  )
}

export default GetInTouch