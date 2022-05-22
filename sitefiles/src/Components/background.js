import React from "react"
import Logo from "./Images/logo.png"


export default function Landing () {

    return (
        <>
        <div className="fpage">
            <nav>
                <a href="" className="name-nav">Jeremiah</a>

                <div className="logo">
                <img src={Logo} width= {'100px'}/>
                </div>

                <a href="" className="name-nav">Ruffin</a>

                <h1 className="nav-link">social links</h1>
            </nav>
            </div>
        </>
    )

}