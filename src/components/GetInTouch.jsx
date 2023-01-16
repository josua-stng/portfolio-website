import React from "react";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <div className="get_touch text-center mb-[100px]  w-[420px] p-5  m-auto">
      <h2 className="mb-5 font-bold text-2xl">Get In Touch</h2>
      <p className="w-[320px] mx-auto mb-5">
        Want to know me more? contact me on social media and i will always be
        open to be around you
      </p>
      <Link to='/contact'>
      <button className=" button_slide slide_right p-3  w-[250px] rounded-lg">
        Let 's Connect
      </button>
      </Link>
    </div>
  );
};

export default GetInTouch;
