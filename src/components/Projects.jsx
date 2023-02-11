import React from "react";
import UnsplashImage from '../assets/image/unsplash-clone.jpeg'
import NextMarketImage from '../assets/image/next_market.jpeg'
import WeatherApp from '../assets/image/weather_app.jpeg'
import { Link } from "react-router-dom";

const Projects = () =>{
    return (
        <div className="project_header mb-[220px]">
        <div className="p-7 text-center">
        <h2 className="lg:text-[45px]   md:text-[30px] text-[25px] font-bold mb-5 ">Projects</h2>
        <p className="text-lg">I show you to all the big and small websites I have done so farI show you to all the big and small websites I have done so far</p>
        <div className="project grid breakpoints_skills:grid-cols-2 laptop:grid-cols-3">
            <div className="project_container ">
                <h3 className="text-2xl mb-5">Unsplash Clone</h3>
                <img src={UnsplashImage} alt="" className="image_project rounded-lg"/>
            </div>
            <div className="project_container">
            <h3 className="text-2xl mb-5">Next Market</h3>
                <img src={NextMarketImage} alt="" className="image_project rounded-lg"/>
            </div>
            <div className="project_container">
            <h3 className="text-2xl mb-5">Weather App</h3>
                <img src={WeatherApp} alt="" className="image_project rounded-lg"/>
            </div>
        </div>
        <Link to='/project' className="hover:text-slate-300">View more of my project {'>'}</Link>
        </div>
        </div>
    )
}

export default Projects