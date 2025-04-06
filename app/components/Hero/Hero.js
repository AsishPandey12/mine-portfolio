import React from "react";
import Reveal from "../Reveal";

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center z-20 mx-auto md:gap-[37px] md:mx-10">
      {/* Text Section */}
      <div className="flex flex-col gap-[13px] items-center md:gap-[34px] md:my-[58px] md:items-start">
        <Reveal initialX={-25}>
          <h1 className="text-2xl/1 text-center font-semibold block md:text-[40px] md:text-start md:inline">
            <span className="-ml-3">👋</span>Hello I'm Asish Pandey, I'm a{" "}
            <span className="block text-[27px] highlight mt-2 md:text[45px] md:inline md:mt-0 text-nowrap">
              Full Stack Developer
            </span>
          </h1>
        </Reveal>

        <Reveal initialX={-30} delay={0.2}>
          <p className="text-center text-sm mx-6 md:text-[16px] md:text-start md:mx-0">
            I’m a passionate frontend developer dedicated to crafting
            responsive, intuitive, and visually engaging web applications. With
            a solid foundation in React, HTML, CSS, Tailwind CSS, and
            JavaScript, I focus on building seamless user interfaces that
            enhance user experience. I also bring beginner-level experience in
            backend development using Node.js, SQL, MongoDB, and Express.js,
            enabling me to contribute effectively to full-stack projects. My
            goal is to develop innovative digital solutions that prioritize
            performance, usability, and design.
          </p>
        </Reveal>

        <Reveal initialX={-40} delay={0.4}>
          <div className="flex gap-4">
            <a
              href="/Asish_pandey_.pdf"
              className="self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl"
            >
              <img src="/file_download.svg" alt="Arrow right icon" />
              Resume
            </a>
            <a
              href="mailto:asishpandey9163@gmail.com"
              className="self-center bg-primary text-white p-2.5 rounded flex gap-2.5 items-center text-sm md:self-start md:text-xl"
            >
              Let's Connect
              <img src="/arrow_right_icon.svg" alt="Arrow right icon" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Image Section */}
      <div className="relative group mb-6 md:mb-0">
        <Reveal>
          <img
            src="/profile_light_purple.png"
            alt="Light purple rectangle"
            width={372}
            height={430}
            className="hidden md:block w-[372px] h-[430px] absolute right-0 top-0 -z-10 group-hover:scale-[102%] group-hover:-rotate-2 ease-in-out duration-300"
          />
          <img
            src="/profile_dark_purple.png"
            alt="Dark purple rectangle"
            width={372}
            height={430}
            className="hidden md:block w-[372px] h-[430px] absolute right-0 top-0 -z-10 group-hover:scale-[102%] group-hover:rotate-2 ease-in-out duration-300"
          />
          <img
            src="/Asish passport .png"
            alt="Asish profile picture"
            width={357}
            height={417}
            className="block w-full max-w-[357px] h-auto md:h-[417px] z-10 mr-0 md:mr-[7.7px] my-[6.5px] rounded-md group-hover:scale-[102%] ease-in-out duration-300"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default Hero;
