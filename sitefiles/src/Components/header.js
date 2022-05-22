import React from "react";
import Logo from "./Images/logo.png"

function Navbar () {
    return (
      <div>
          <nav>
                <a href="" className="name-nav">Jeremiah</a>
                <div className="logo">
                    <img src={Logo} width={ '200px' }/>
                </div>
                <a href="" className="name-nav">Ruffin</a>
            </nav>
      </div>
    );
  };
export default Navbar