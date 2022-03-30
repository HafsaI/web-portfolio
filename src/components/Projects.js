import React from "react"
import Cards from "./Cards"
import NWProjects from "./NWProjects"
import data from "../data"
// or "../components/Cards"

export default function Projects() {
  
    const uni_proj = data.map(item => {
        if (item.id < 6)
        return (
            <Cards
                key={item.id}
                {...item}
                
            />
        )
    })  
     const p_proj = data.map(item => {
        if (item.id > 5 && item.id < 8)
        return (
            <Cards
                key={item.id}
                {...item}
                
            />
        )
    })
     
     const nwprojects = data.map(item => {
        if (item.id > 7)
        return (
            <NWProjects
                key={item.id}
                {...item}
                
            />
        )
    }) 
    return (
        <div className = "projects" >
            <p className = 'main--title'>my work</p>
           <div className = "main" >
                <div >
                    <p className = 'heading'> university projects</p>
                    {uni_proj}
                </div>
                <hr className="solid"/> 
                <div>
                    <p className = 'heading'> personal projects</p>
                    {p_proj}
                </div>
               
           </div>
           
            <p className = 'main--title'>other noteworthy projects</p>
           <div className = "sub-main">
           
              <section className="nwcards-list">
                {nwprojects}
            </section>
            
            </div>
        </div>
    )
}

