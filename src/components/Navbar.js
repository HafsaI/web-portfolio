import React from "react"
import {NavLink} from "react-router-dom"
import pdf from "../resume.pdf";


export default function Navbar() {
     
    return (
        <nav >
            <h6>HAFSA</h6>
          
             {/* <p>ABOUT</p>
             <p className = "bold">WORK</p> */}
             {/* <Link className = "nav--links" to="/">  ABOUT </Link> */}
           {/* <Link className = "nav--links" to="/work">WORK</Link> */}
           

            
            <NavLink
            to="/web-portfolio" className = "nav--links"
            style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "lighter"
            })}
            
            >
            ABOUT
            </NavLink>

            <NavLink
            to="/work" className = "nav--links"
            style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "lighter"
            })}
           
            >
            WORK
            </NavLink>

            <a  className = "nav--links resume" href={pdf} target="_blank" rel="noreferrer"> RESUME</a>

        </nav>
    )
}

// things to do:
// on click on navbar
//  <Link to="/"> ABOUT </Link>
//            <Link to="/work">WORK</Link>