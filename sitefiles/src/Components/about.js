import React from "react";
import imagecard from "./Images/banner.jpg"


export default function About() {
    return (
        <>
            <div className="about-fpage">
                <h1 className="about-title">About Me </h1> 
                <h2 className="Who">Who Am I?</h2>
                <p className="about-paragraph">My name is <span className="sub-heading-detail">Jeremiah Ruffin</span>, and I am a Digital Marketing Specialist and Front-end Developer based in Detroit, MI. Currently studying CS at Wayne State University specializing in Web 3.0 Development!
                </p>

                <h2 className="Who">What do I do?</h2>
                <p className="about-paragraph">I help companies research and develop marketing strategies to build their social media presence! Additionally, I produce front-end designs to maintain consistent brand identity!
                </p>

                <h2 className="Who">What Am I Passionate About?</h2>
                <p className="about-paragraph"> I have a deep love for spicy food and Minecraft! I am also a Photograph, Je parle francais et J'adore slow music!
                </p>
            </div>
        </>
    )
}