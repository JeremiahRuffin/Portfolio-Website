import React from "react";
import aboutimg from "./Images/banner.png"
import { TiSocialLinkedin } from 'react-icons/ti'
import { BsGithub } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

export default function About() {
    return (
        <>
            <div className="about-fpage">
                <h1 className="about-title">About Me</h1>
                <img src={aboutimg} width={'300px'} />
                <h2 className="about-subtitle">A Creative Figure</h2>
            </div>
        </>
    )
}