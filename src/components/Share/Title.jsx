import React from 'react'
import useMoodToggle from '../../utils/Hooks/useMoodToggle'

const Title = ({button, title}) => {
    const {darkMode} = useMoodToggle()
  return (
    <div className='md:w-[55%] px-3.5 md:px-0 mx-auto'>
        <div className="flex items-center justify-center ">
        <button className="primaryButton cursor-pointer">{button}</button>
      </div>
      <p className="text-center pt-4" style={{color:darkMode?"#F9FAFB":"#707070",  fontFamily: "Poppins, sans-serif"}}>{title}</p>
    </div>
  )
}

export default Title