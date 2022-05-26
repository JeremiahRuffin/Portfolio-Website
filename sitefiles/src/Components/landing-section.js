import React from "react"
import Logo from "./Images/logo.png"


export default function Landing() {

    return (
        <>
            <div className="fpage">
                <nav>
                    <div className="logo">
                        <img src={Logo} width={'150px'} />
                    </div>
                </nav>
                <div className="sub-heading">
                    <p>Hi, I'M <span className="sub-heading-detail">Jeremiah</span></p>
                    <h2 className="sub-heading-h2"> A Frontend Developer and Marketing Specialist <br></br>from Detroit, MI</h2>
                </div>
                <ul className="nav-link">
                    <a href="">About</a>
                    <a href="">Work</a>
                    <a href="">Contact</a>
                </ul>
            </div>
        </>
    )

}