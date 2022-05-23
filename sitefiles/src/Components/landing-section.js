import React from "react"
import Logo from "./Images/logo.png"
import { TiSocialLinkedin } from 'react-icons/ti'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

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
                    <br>
                    </br>
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