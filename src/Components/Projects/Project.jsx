import React from "react";
const Project = () => {
  const proData = [
    {
      title: "Project1",
      skills:"HTML, CSS, React",
      description: "This is a project This is a project This is a project This is a project This is a project This is a project This is a project ",
      image: "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=1024x1024&w=is&k=20&c=U-1aMueiJ5vYIMY-2JTwaSLOXTnoSkAzCVLk1hE6wfE=",
      aosDelay: "0",
    },
    {
      title: "Project2",
      skills:"HTML, CSS, React",
      description: "This is a project This is a project This is a project This is a project This is a project This is a project This is a project ",
      image: "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=1024x1024&w=is&k=20&c=U-1aMueiJ5vYIMY-2JTwaSLOXTnoSkAzCVLk1hE6wfE=",
      aosDelay: "400",
    },
    {
      title: "Project3",
      skills:"HTML, CSS, React",
      description: "This is a project This is a project This is a project This is a project This is a project This is a project This is a project ",
      image: "https://media.istockphoto.com/id/1297349747/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey.jpg?s=1024x1024&w=is&k=20&c=U-1aMueiJ5vYIMY-2JTwaSLOXTnoSkAzCVLk1hE6wfE=",
      aosDelay: "800",
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
                  className=" h-fit rounded-[6px]"
                  src={item.image}
                  alt={item.title}
                />
              </div>
              <div className="my-auto content-center items-start px-4">
                <h2 className="font-link-rob text-4xl text-[#000000] flex justify-start">
                  {item.title}
                </h2>
                <p className="text-[16px] my-2 text-[#000000] flex justify-center">{item.description}</p>
                <p className="text-lg text-[0.9rem] text-[#000000] my-2 flex justify-start font-semibold">{item.skills}</p>
                <div className="flex justify-start my-4">
                  <button className="font-link-rob hover:scale-125 duration-300 bg-[#34CEA1] py-1 px-4 rounded-[8px] text-[1.3em] text-white cursor-pointer content-center">
                    Visit
                  </button>
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
