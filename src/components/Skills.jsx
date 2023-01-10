import React from "react";

const Skills = () => {
  return (
    <div className="skills text-white mx-auto text-center mb-48 w">
      <div className="p-5">
        <h1 className="skills_header mb-10 mt-5 text-[45px]">About Skills</h1>
        <div className="skills_container grid pb-7 laptop:grid-cols-3 tablet:grid-cols-2 pc:grid-cols-4">
          <div className="skilss_content">
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt=""
            />
            <p>HTML 5</p>
          </div>
          <div className="skilss_content">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx6bbj0wSjIAxFEEL7_S9IMdDYVJkskFjljJqXHCUETfIb2_Di-qoihp8JD8DtIp5fUMk&usqp=CAU"
              alt=""
            />
            <p>CSS 3</p>
          </div>
          <div className="skilss_content">
            <img
              src="https://www.computerhope.com/jargon/j/javascript.png"
              alt=""
            />
            <p>Javascript</p>
          </div>
          <div className="skilss_content">
            <img
              src="https://res.cloudinary.com/arcjet-media/image/upload/v1608734952/z8hzeszc9eb3sp3vp3qc.jpg"
              alt=""
            />
            <p>Tailwind CSS</p>
          </div>
          <div className="skilss_content">
            <img
              src="https://www.drupal.org/files/project-images/bootstrap-stack.png"
              alt=""
            />
            <p>Boostrap</p>
          </div>
          <div className="skilss_content">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt=""
            />
            <p>React Js</p>
          </div>
          <div className="skilss_content">
            <img
              src="https://avatars.githubusercontent.com/u/18133?s=200&v=4"
              alt=""
            />
            <p>Git</p>
          </div>
          <div className="skilss_content">
            <img
              src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
              alt=""
            />
            <p>Github</p>
          </div>
          <div className="skilss_content">
            <img
              src="https://the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png"
              alt=""
            />
            <p>Node Js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
