import React from "react"
import "../index.css"
import location_logo from "../assets/location-dot-solid.svg"

export default function Journal(props){
    return(
        <main>
        <div className="journal">
           <img src={props.item.coverImg} className="journal--image"/>
           <div>
                <div className="journal--header">
                    <img src={location_logo} className="location--logo" />
                    <h3>{props.item.location}</h3>
                    <a href={props.item.map_link}  className="link_info">View on Google Maps</a>
                </div>
                <div className="journal--info">
                    <h1 className="journal--title">{props.item.title}</h1>
                    <h3 className="journal--date">{props.item.date.start_date} - {props.item.date.end_date}</h3>
                    <p className="journal--description">{props.item.description}</p>
                </div>
            </div>
        </div>
        <hr className="hr--line"/>
        </main>
    )
}