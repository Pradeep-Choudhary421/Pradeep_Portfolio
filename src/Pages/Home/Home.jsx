import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Skills from '../../Components/Skill/Skills'
import Project from '../../Components/Projects/Project'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Arrow from '../../Components/arrow/Arrow'
const Home = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  },[]);
  return (
    <>
    <section className='main-container '>
        <Navbar/>
        <Arrow/>
        <Hero/>
        <About/>
        <Skills/>
        <Project/>
        <Contact/>
        <Footer/>
    </section>
    </>
  )
}

export default Home
