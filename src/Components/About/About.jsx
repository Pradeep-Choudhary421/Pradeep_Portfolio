import React from "react";
import MyImg from "../../assets/MineI.jpeg";
const About = () => {
  return (
    <>
      <section className="px-16 md:px-32 md:py-20" data-aos="fade-up" id="about">
        <h1 className="font-link-rob text-4xl md:text-[48px] text-white text-center mb-12">
          About Me
        </h1>
        <div className="flex flex-col md:flex-row justify-center py-7 md:py-12">
          <div className="border-dashed w-5/6 md:w-1/3  flex justify-center items-center border-4   md:border-b-0 md:border-l-4 py-8 mx-6 border-r-0">
            <img
              src={MyImg}
              alt=""
              className="  w-4/5 rounded-2xl "
              data-aos="fade-up"
              data-aos-delay="300"
            />
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="font-link-rob text-[#F8F8F8] text-base md:text-2xl w-5/6 md:w-1/2 flex flex-wrap  justify-center items-center border-4 border-dashed  py-8 px-4 mx-6 border-l-0 border-t-0"
          >
            As a Full Stack Developer, I excel in both front-end and back-end
            development. I design user interfaces and manage databases.
            Proficient in multiple programming languages and frameworks, I
            ensure seamless integration between client and server, delivering
            comprehensive web applications and solutions.
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
