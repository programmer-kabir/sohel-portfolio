import React from 'react'
import useMoodToggle from '../../utils/Hooks/useMoodToggle'

const Experience = () => {
    const {darkMode} = useMoodToggle()
  return (
   <section
         className="relative -top-2 md:-top-1 pt-16 pb-20"
         style={{ backgroundColor: darkMode ? "#111827" : "#fff" }}
       >
         
      asf
       </section>
  )
}

export default Experience