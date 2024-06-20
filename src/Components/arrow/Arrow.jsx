import React from 'react'
import { FaArrowUp } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Arrow = () => {
  return (
    <>
      <div className='fixed bottom-20 right-12 z-30'>
      <AnchorLink href="#navbar">
          <FaArrowUp className='text-[3em] text-[#34CEA1]   ' />
          </AnchorLink>
        </div>
    </>
  )
}

export default Arrow
