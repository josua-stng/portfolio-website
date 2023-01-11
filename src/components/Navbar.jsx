import React from "react";
import { Link } from "react-router-dom";

const Navbar =() =>{
    return(
        <div className="navbar flex text-white justify-between p-5 
         ">
          <div>
                <h2 className="ml-12">Josua</h2>
            </div>  
            <div>
                <ul className="nav_header flex">
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='/project'>Projects</Link> </li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar