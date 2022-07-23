import React from "react"
import "../index.css"
import earth from "../assets/earth-africa-solid.svg"

export default function Nav(){
    return (
        <nav className="navbar">
           <img src={earth} className="earth-logo" />
            <h3 className="title-nav">my travel journal.</h3>
        </nav>
    )
}