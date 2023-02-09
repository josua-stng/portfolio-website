import React from "react";

import UnsplashImage from "../assets/image/unsplash-clone.jpeg";
import NextMarketImage from "../assets/image/next_market.jpeg";
import WeatherApp from "../assets/image/weather_app.jpeg";
import IdmbMovie from "../assets/image/idmb_movie.jpeg";
import RecipeApp from '../assets/image/recipe_app.jpeg';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GetAllProject = () => {
  return (
    <div className="getallproject">
      <Navbar />
      <div className="project_header mt-[120px] mb-10">
        <div className="p-7 text-center">
          <h2 className="text-[45px] font-bold mt-1 mb-9">Projects</h2>
          <p className="text-lg">
            I show you to all the big and small websites I have done so farI
            show you to all the big and small websites I have done so far
          </p>
          <div className="project grid breakpoints_skills:grid-cols-2 laptop:grid-cols-3">
            <a
              className="project_container"
              href="https://unsplash-clone-apps.netlify.app/ "
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3 className="text-2xl mb-5">Unsplash Clone</h3>
                <img
                  src={UnsplashImage}
                  alt=""
                  className="image_project rounded-lg"
                />
              </div>
            </a>
            <a
              className="project_container"
              href="https://nextmarket.netlify.app/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <div className="project_container">
                <h3 className="text-2xl mb-5">Next Market</h3>
                <img
                  src={NextMarketImage}
                  alt=""
                  className="image_project rounded-lg"
                />
              </div>
            </a>
            <a
              className="project_container"
              href="https://indonesia-weather-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <h3 className="text-2xl mb-5">Weather App</h3>
                <img
                  src={WeatherApp}
                  alt=""
                  className="image_project rounded-lg"
                />
              </div>
            </a>
            <a
              href="https://sharing-session-react-001.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project_container"
            >
              <div>
                <h3 className="text-2xl mb-5">Idmb Movie</h3>
                <img
                  src={IdmbMovie}
                  alt=""
                  className="image_project rounded-lg"
                />
              </div>
            </a>
            <a
              href="https://recipe-apps-clone.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="project_container"
            >
              <div>
                <h3 className="text-2xl mb-5">Recipe App</h3>
                <img
                  src={RecipeApp}
                  alt=""
                  className="image_project rounded-lg"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GetAllProject;
