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
                    <main>
                        <span><p>Jeremiah Ruffin</p></span>
                    </main>
                    <h2 className="sub-heading-h2">Frontend Developer 👨‍💻 Digital Marketing Specialist</h2>

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