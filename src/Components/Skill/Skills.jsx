import React from "react";
import boot from "../../assets/bootstrap.png";
import html from "../../assets/html.png";
import css from "../../assets/cssS.png";
import tailwind from "../../assets/tailwind.png";
import react from "../../assets/react.png";
import javaScript from "../../assets/js.png";
import node from "../../assets/node.png";
import express from "../../assets/express.png";
import mongoDB from "../../assets/db.png";
import api from "../../assets/api.png";
const Skills = () => {
  const skillData = [
    {
      name: "HTML",
      img: html,
      aosDelay:"75"
    },
    {
      name: "CSS",
      img: css,
      aosDelay:"75"
    },
    {
      name: "BootStrap",
      img:boot,
      aosDelay:"75"
    },
    {
      name: "Tailwind",
      img: tailwind,
      aosDelay:"75"
    },
    {
      name: "JavaScript",
      img: javaScript,
      aosDelay:"150"
    },
    {
      name: "React",
      img: react,
      aosDelay:"150"
    },
    {
      name: "API",
      img: api,
      aosDelay:"150"
    },
    {
      name: "Node JS",
      img: node,
      aosDelay:"150"
    },
    {
      name: "Express JS",
      img: express,
      aosDelay:"300"
    },
    {
      name: "Mongo DB",
      img: mongoDB,
      aosDelay:"300"
    },
  ];
  return (
    <>
      <section id="skills"
        data-aos="fade-up"
        className=".font-link-rob px-20 lg:px-32 py-12"
      >
        <h1 className="font-link-rob text-[48px] text-[#F8F8F8] flex justify-center font-bold py-8">
          Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8">
          {skillData.map((item, index) => (
            <div
            data-aos="fade-up"
            data-aos-delay={item.aosDelay}
              className="w h-[200px] bg-[#F8F8F8] rounded-2xl flex justify-center"
              key={index}
            >
              <div className="my-auto">
                <img className=" w-[100px] h-[100px]" src={item.img} alt="" />
                <h2 className="flex justify-center text-2xl font-semibold">
                  {item.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
