import React from "react";

const Navbar =() =>{
    return(
        <div className="flex text-white justify-between p-5 border-2 
         ">
          <div>
                <h2 className="ml-12">Josua</h2>
            </div>  
            <div>
                <ul className="nav_header flex">
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar