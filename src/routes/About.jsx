import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about_container mt-[100px] pb-10 mb-7">
        <h2 className="text-[45px] font-bold text-center pt-5">About Me</h2>
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
     <Footer/>
    </div>
  );
};

export default About;