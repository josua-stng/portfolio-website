import React, { useEffect, useState } from "react";

import HeaderImage from "../assets/image/header-img.png";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Team Leader"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="banner mt-32 flex pt-5 ">
      <div className="tagline p-[100px]  border-white">
        <h2 className="tagline_header w-[250px] p-2 text-center text-xl mb-5">
          Welcome to my Porfolio
        </h2>
        <h1 className="tagline_desc text-[50px] mb-5">
          {`Hi! I'm Josua`}{" "}
          <span
            className="txt-rotate"
            dataperiod="1000"
            data-rotate='[ "Web Developer", "Web Designer", "Team Leder" ]'
          >
            <span className="wrap">{text}</span>
          </span>
        </h1>
        <p className="tagline_paragraph">
          Hi my name is Josua. I'm from Indonesia and now I'm 20
          years old year. I study at Mikroskil University. I started my journey
          in programming as a front-end developer and able to create interactive
          and interesting website, and I continue to learn because in my opinion
          the knowledge I get is still lacking in understanding the concept of
          website development{" "}
        </p>
      </div>
      <div className="image">
        <img className="max-w-[400px]" src={HeaderImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
