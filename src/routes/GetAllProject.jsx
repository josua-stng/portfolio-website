import React from "react";
import { Link } from "react-router-dom";
import UnsplashImage from "../assets/image/unsplash-clone.jpeg";
import NextMarketImage from "../assets/image/next_market.jpeg";
import WeatherApp from "../assets/image/weather_app.jpeg";
import IdmbMovie from "../assets/image/idmb_movie.jpeg";

const GetAllProject = () => {
  return (
    <div className="getallproject">
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

      <div className="project_header mt-[120px] mb-10">
        <div className="p-7 text-center">
          <h2 className="text-[45px] font-bold mb-5">Projects</h2>
          <p className="text-lg">
            I show you to all the big and small websites I have done so farI
            show you to all the big and small websites I have done so far
          </p>
          <div className="project grid breakpoints_skills:grid-cols-2 laptop:grid-cols-3">
            <div className="project_container ">
              <h3 className="text-2xl mb-5">Unsplash Clone</h3>
              <img
                src={UnsplashImage}
                alt=""
                className="image_project rounded-lg"
              />
            </div>
            <div className="project_container">
              <h3 className="text-2xl mb-5">Next Market</h3>
              <img
                src={NextMarketImage}
                alt=""
                className="image_project rounded-lg"
              />
            </div>
            <div className="project_container">
              <h3 className="text-2xl mb-5">Weather App</h3>
              <img
                src={WeatherApp}
                alt=""
                className="image_project rounded-lg"
              />
            </div>
            <div className="project_container">
              <h3 className="text-2xl mb-5">Idmb Movie</h3>
              <img
                src={IdmbMovie}
                alt=""
                className="image_project rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-10">
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

export default GetAllProject;
