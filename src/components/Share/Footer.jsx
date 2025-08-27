import React from 'react'
import useMoodToggle from '../../utils/Hooks/useMoodToggle'

const Footer = () => {
  const {darkMode} = useMoodToggle()
  return (
    <section
      className="relative  pt-16 pb-20"
      style={{ backgroundColor: darkMode ? "#030712" : "#F9FAFB" }}
    >
      </section>
  )
}

export default Footer