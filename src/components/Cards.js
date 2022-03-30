import React from "react"
export default function Projects(props) {
    return (
        
        <div className="card">
            
        <img 
                src={props.image}
                className="card--image" 
        />
        
        <div className = "card--info" >
                <h6 className="card--title">{props.title}</h6>
                <div className = "card--boxes">
                    <span className="card--box "> {props.tech1} </span>
                    <span className="card--box "> {props.tech2}  </span>
                     <span className="card--box "> {props.tech3}  </span> 
                </div>
                <p className = "card--desc">{props.description} </p>
                <div className = "card--code">
                <a className="bold" href = {props.link}target="_blank"> <span>View Code</span></a>
                </div>

               
            </div>
        </div>
    )
}