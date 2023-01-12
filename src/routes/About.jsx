import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div
        className="navbar flex text-white justify-between p-5 
         "
      >
        <div>
          <h2 className="ml-12">Josua</h2>
        </div>
        <div>
          <ul className="nav_header flex">
            <li>
              <Link to="/">Home</Link>{" "}
            </li>
            <li>
              <Link to="/project">Projects</Link>{" "}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="about_container mt-[80px] pb-10">
        <h2 className="text-2xl p-5  text-center">About Me</h2>
        <div className="about_me flex justify-center items-start mt-10">
          <div className="about_me_desc w-[450px]  mr-10">
            <p className="">Hello! My full name is josua sitanggang and I like to explore new
            technologies on the internet, especially web development. My
            interest in web development started in 2020 when I was watching
            youtube, and there are some tutorials to become a web programmer for</p>
            beginners and use HTML & CSS language.
            <p className="mt-3">I go through day after day by
            following all the tutorials from YouTube, because I feel that being
            a programmer is an interesting thing and can hone my logic in the
            future.</p>
            <p className="mt-3"> When I was proficient I started creating several new
            projects to hone my skills and I managed to create several websites
            that I developed using programming languages that are currently
            trending.</p>
            <p className="mt-3">Here are a few technologies I've been working with recently:</p>
            <ul className="flex justify-around list-disc mt-3">
                <div className="">
                <li>Javascript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Tailwind Css</li>
                </div>
                <div>
                <li>Boostrap</li>
                <li>CSS</li>
                <li>HTML</li>
                <li>Git</li>
                </div>

            </ul>
          </div>
          <div>
            <img
              src="https://raw.githubusercontent.com/josua-stng/josua-stng.github.io/master/img/my_photo.png"
              alt=""
              className="w-[320px]  p-3"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-7 m-7">
        <p className="pr-1">Created with </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-red-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>{" "}
        <p className="pl-1">by Josua Sitanggang</p>
      </div>
    </div>
  );
};

export default About;
