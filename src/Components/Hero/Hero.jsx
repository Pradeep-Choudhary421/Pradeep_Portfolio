import React from 'react'
import HeroImg from '../../assets/Hero.png'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <>
      <section id='home' data-aos="fade-up">
        <div className='flex flex-col md:flex-row justify-center px-16 md:px-32 md:py-12 py-10'>
          <div className='my-auto order-2 md:order-1' data-aos="fade-up" data-aos-delay="300">
            <h1 className='font-link-mon text-4xl md:text-5xl text-white pr-0 pb-4 xl:pr-52'>Pradeep Choudhary</h1>
            <h1 className='font-link-mon text-2xl md:text-2xl text-white'>Passionate Mern Stack Developer</h1>
            <button className='px-[16px] py-[10px] mt-[50px] cursor-pointer rounded-[8px] text-[16px] font-semibold text-white bg-[#34CEA1] duration-700'>
              <AnchorLink href='#about'>
              Explore More

              </AnchorLink>
            </button>
          </div>
          <div className='bg order-1 md:order-2' data-aos="fade-up" data-aos-delay="300">
            <img src={HeroImg} alt="Hero" />
          </div>
        </div>
      </section>
        
    </>
  )
}

export default Hero
