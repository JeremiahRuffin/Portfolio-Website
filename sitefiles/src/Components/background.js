import React from "react"
import Background_Img from "./Images/background.png"


export default function Background () {

    return (
        <>
        <div className="background">
            <img classname="bg" src={Background_Img} width={ '2048px' } height= { '1145px' } />
        </div>
        </>
    )

}