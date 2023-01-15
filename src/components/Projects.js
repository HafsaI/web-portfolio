import React from "react"
import Cards from "./Cards"
import NWProjects from "./NWProjects"
import data from "../data"
// or "../components/Cards"

export default function Projects() {
  
    const p_proj = data.map(item => {
        if (item.id < 12)
        return (
            <Cards
                key={item.id}
                {...item}
                
            />
        )
    })  
    //  const p_proj = data.map(item => {
    //     if (item.id > 5 && item.id < 8)
    //     return (
    //         <Cards
    //             key={item.id}
    //             {...item}
                
    //         />
    //     )
    // })
     
     const nwprojects = data.map(item => {
        if (item.id > 11)
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
                    {/* <p className = 'heading'> projects</p> */}
                    {p_proj}

                </div>
               
           </div>
           
            <p className = 'main--title'>other noteworthy projects</p>
           <div className = "sub-main">
           
              <section className="nwcards-list">
                {nwprojects}
            </section>
            
            </div>
            <footer className="proj_footer">
                <p >Designed & Built by Hafsa Irfan<br></br>
                hafsairfan80@gmail.com | <a href = "https://github.com/HafsaI"> https://github.com/HafsaI</a> </p>
               
              
            </footer>
        </div>
    )
}

