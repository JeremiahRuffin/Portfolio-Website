import React from "react"
import Logo from "./Images/logo.png"


export default function Landing() {

    return (
        <>
            <div className="fpage">
                <nav>
                    <h2 className="name-nav">Jeremiah</h2>

                    <div className="logo">
                        <img src={Logo} width={'150px'} />
                    </div>

                    <h2 className="name-nav">Ruffin</h2>
                </nav>
                <div className="title">
                    <main>
                        <span><p>let name = Miah;</p></span>
                    </main>
                    <h2 className="title-h2">Console.log("Hello 👋");</h2>
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