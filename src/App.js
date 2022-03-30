import React from "react"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import About from "./components/About"
import Cards from "./components/Cards"

import "./style.css"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
export default function App() {  
    
    return (
        <div className = "navbar">
             <Navbar/>
                <div className = "content">
                <Routes>
                <Route path = "/web-portfolio" element = { <About/>}/>
                <Route path="/work" element = {  <Projects />}  />
                </Routes>
                </div>
        </div>
    )
}

{/* <Routes>
<Route path = "/" element = { <About/>}/>
<Route path="/work" element = {  <Projects />}  />
</Routes> */}