import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
import logo from '../../assets/Logo1.png'
const Navbar = () => {
  const [ham, setHam] = useState(false);
  const handleToggle = () => {
    setHam(!ham);
  };

  return (
    <>
      <section className="py-8" data-aos="fade-down" id="navbar">
        <nav className="flex justify-between mx-8 sm:mx-16 md:mx-24 lg:mx-32 py-[28px] bg-gray-300 rounded-t-[1rem] lg:rounded-[1rem] px-4 bg-opacity-10 text-white">
          <div>
            <img src={logo} alt="" className="ml-8"/>
          </div>
          <div className="flex">
            <div>
              <ul className="gap-6 mr-12 text-[16px] align-middle pt-2 hidden lg:flex">
                <AnchorLink href="#home">
                  <li className="cursor-pointer hover:text-[#34CEA1] duration-700">
                    Home
                  </li>
                </AnchorLink>
                <AnchorLink href="#about">
                  <li className="cursor-pointer hover:text-[#34CEA1] duration-700">
                    About
                  </li>
                </AnchorLink>
                <AnchorLink href="#skills">
                  <li className="cursor-pointer hover:text-[#34CEA1] duration-700">
                    Skills
                  </li>
                </AnchorLink>
                <AnchorLink href="#projects">
                  <li className="cursor-pointer hover:text-[#34CEA1] duration-700">
                    Projects
                  </li>
                </AnchorLink>
                <Link to="/resume">
                  <li className="cursor-pointer hover:text-[#34CEA1] duration-700">
                    Resume
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <button className="mx-6 px-[16px] py-[10px] bg-white cursor-pointer text-gray-900 rounded-[8px] text-[16px] font-semibold hover:text-white hover:bg-[#34CEA1] duration-700">
                <AnchorLink href="#contact">
                Hire Me

                </AnchorLink>
              </button>
            </div>
            <div className="block lg:hidden pt-1 cursor-pointer" onClick={handleToggle}>
              <RxHamburgerMenu className="text-4xl" />
            </div>
          </div>
        </nav>

        {/* Mobile screen */}
        <div
          className={`transition-max-height duration-500 ease-in-out ${
            ham ? "max-h-72" : "max-h-0"
          } overflow-hidden md:hidden`}
        >
          <div className="grid grid-cols-1 mx-24 lg:mx-32 py-[28px] bg-gray-300 rounded-b-[1rem] px-4 bg-opacity-10 text-white text-[24px]">
            <AnchorLink href="#home">
              <div className="flex justify-center py-3 cursor-pointer">Home</div>
            </AnchorLink>
            <AnchorLink href="#about">
              <div className="flex justify-center py-3 cursor-pointer">About</div>
            </AnchorLink>
            <AnchorLink href="#skills">
              <div className="flex justify-center py-3 cursor-pointer">Skills</div>
            </AnchorLink>
            <AnchorLink href="#projects">
              <div className="flex justify-center py-3 cursor-pointer">Projects</div>
            </AnchorLink>
            <Link to="/resume">
              <div className="flex justify-center py-3 cursor-pointer">Resume</div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
