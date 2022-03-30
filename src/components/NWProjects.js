import React from "react"
import data from "../data"


export default function NWProjects(props) {
  
    
    return (
      <div className = "sub--main"> 
      <div className = "nw--box">
       <div className = "nw--links">
          {/* <a  href = {props.featuredlink} target="_blank" rel="noreferrer">  <img src= "../images/bookmark.svg" className="nw--icons" /> </a> */}
          <a  href = {props.externallink} target="_blank" rel="noreferrer">  <img src= "../web-portfolio/images/externallink.svg" alt = "link"className="nw--icons" /></a>
        </div>
        <h5 className = "nw-card--title"> {props.title} </h5>
         <p className = "nwcard--desc"> {props.description} </p>
         <div className = "nwcard--tags">
            <span className = "nwcard--tag"> {props.tag1} </span>
              <span className = "nwcard--tag" > {props.tag2} </span>
              <span className = "nwcard--tag" > {props.tag3} </span>
           
         </div>
          </div>
  </div>
    )
}
