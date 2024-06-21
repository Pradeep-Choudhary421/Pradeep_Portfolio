import React, { useRef } from "react";
import {toast}  from 'react-toastify';
import gitHub from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import whatsapp from "../../assets/whatsapp.svg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mmwbtsf",
        "template_550l6hk",
        form.current,
        "QzO4hbRoueBowuIY4"
      )
      .then(
        () => {
          toast.success("Message Sent")
        },
        (error) => {
          toast.err("Failed to send message!");
        }
      );
  };

  return (
    <section
      className="lg:px-32 lg:py-12 my-10"
      data-aos="fade-up"
      id="contact"
    >
      <h1 className="font-link-rob text-[48px] text-[#F8F8F8] flex justify-center font-bold py-8">
        Contact Me
      </h1>

      <div className="flex flex-col md:flex-row justify-center px-[83px] py-[34px] bg-[#FFFFFF] rounded-2xl">
        <div
          className=" w-full md:w-1/2 font-link-rob my-auto "
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <h1 className="flex justify-left text-[48px] text-[#161616]">
            Get In Touch!
          </h1>
          <p className="text-[18px]">
            Whether you have a question, a project idea, or just want to say
            hello, feel free to reach out using the contact form below. I look
            forward to hearing from you!
          </p>
          <div className="flex justify-left py-6 ">
            <div className="w-[46px] h-[41px] bg-[#FFFFFF] rounded-[5px] flex justify-center p-2">
              <a
                href="https://github.com/Pradeep-Choudhary421"
                className="inline-block"
              >
                <img
                  src={gitHub}
                  alt="GitHub"
                  className="cursor-pointer block w-[1.7em]"
                />
              </a>
            </div>
            <div className="w-[46px] h-[41px] bg-[#FFFFFF] rounded-[5px] flex justify-center p-2">
              <a
                href="https://www.linkedin.com/in/pradeep-choudhary-65aab326a/"
                className="inline-block"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="cursor-pointer block w-[1.7em]"
                />
              </a>
            </div>
            <div className="w-[46px] h-[41px] bg-[#FFFFFF] rounded-[5px] flex justify-center p-2">
              <a
                href="https://wa.me/9636654403?text=Hello!"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={whatsapp}
                  alt="whatsapp"
                  className="cursor-pointer block w-[1.7em]"
                />
              </a>
            </div>
            <div className="w-[46px] h-[41px] bg-[#FFFFFF] rounded-[5px] flex justify-center p-2">
              <a
                href="https://www.instagram.com/i.pradeep_0007?igsh=MTVsNmhnZ281eXZ2OA== "
                className="inline-block"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  className="cursor-pointer block w-[1.7em]"
                />
              </a>
            </div>
          </div>
        </div>
        <div
          className="w-full md:w-1/2"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className=" w-full border-2 border-opacity-10 rounded-[8px] border-[#000000] p-5">
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="from_name"
                required
                className=" bg-[#000000] bg-opacity-10 text-[#4A4A4A] rounded-[8px] py-[18px] pl-[21px] w-5/6  my-3"
                placeholder="Full Name"
              />
              <br />
              <input
                type="email"
                name="from_email"
                required
                className=" bg-[#000000] bg-opacity-10 text-[#4A4A4A] rounded-[8px] py-[18px] pl-[21px] w-5/6 my-3"
                placeholder="Email"
              />
              <br />
              <textarea
                name="message"
                required
                className=" bg-[#000000] bg-opacity-10 text-[#4A4A4A] rounded-[8px] pt-[18px] pb-[60px] pl-[21px] w-5/6 my-3"
                placeholder="Message"
              />
              <br />

              <input
                type="submit"
                value="Send"
                className="py-2 px-4 bg-[#34CEA1]  text-[#FFFFFF] cursor-pointer hover:text-white duration-500 rounded-[8px]"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
