import React from "react";
import adminImg from "../../assets/project/adminDash.png"
import carImg from "../../assets/project/carRent.png";
import getStyle from "../../assets/project/getStyle.png"
const Project = () => {
  const proData = [
    {
      title: "Get-Styled",
      skills:"React.js, Tailwind CSS, Node.js, Express.js",
      description: "Create a modern e-commerce website using React and Tailwind CSS for a sleek, responsive front-end. Implement the backend with Node.js, Express, and MongoDB for robust data handling and server-side operations. This stack ensures high performance, scalability, and a seamless shopping experience for users.",
      image: getStyle,
      aosDelay: "0",
      link:"https://github.com/Pradeep-Choudhary421/Get-Styled-Backend"
    },
    {
      title: "Admin-Dashboard",
      skills:"React.js, Bootstrap",
      description: "The admin dashboard UI website, built with React and Bootstrap, offers a sleek interface for managing data and operations. It features user management, analytics, and customizable widgets, ensuring efficient and user-friendly administration.",
      image: adminImg,
      aosDelay: "400",
      link:"https://admin-dashboard-puce-omega.vercel.app/"
    },
    {
      title: "Car-Rental",
      skills:"React.js, Tailwind CSS",
      description: "This webpage is devloped  using React for dynamic user interactions, Tailwind CSS for responsive and modern styling, and AOS (Animate On Scroll) for engaging animations. ",
      image: carImg,
      aosDelay: "800",
      link:"https://car-rental-tau-pink.vercel.app/"
    },
  ];

  return (
    <>
      <section data-aos="fade-up" id="projects" className="px-12 lg:px-32">
        <h1 className="font-link-rob text-[48px] text-[#F8F8F8] flex justify-center py-8">
          Projects
        </h1>
        <div className="grid grid-cols-1  md:grid-cols-3 gap-12">
          {proData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={item.aosDelay}
              className="bg-[#FFFFFF] rounded-[8px] p-3"
            >
              <div className="rounded-[6px] overflow-hidden flex justify-center mb-2  w-12/12">
                <img
                  className=" h-60 rounded-[6px]"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="my-auto content-center items-start px-4">
                <h2 className="font-link-rob text-3xl text-[#000000] flex justify-start">
                  {item.title}
                </h2>
                <p className="text-[16px] h-30 md:h-[480px] lg:h-[380px] xl:h-[230px] 2xl:h-[170px] my-4  mt-2 text-[#000000] flex justify-center">{item.description}</p>
                <p className="text-lg text-[0.9rem] text-[#000000] my-2 flex justify-start font-semibold">{item.skills}</p>
                <div className="flex justify-start my-4">
                  <a href={item.link}>
                  <button className="font-link-rob hover:scale-125 duration-300 bg-[#34CEA1] py-1 px-4 rounded-[8px] text-[1.3em] text-white cursor-pointer content-center">
                    Visit
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Project;
