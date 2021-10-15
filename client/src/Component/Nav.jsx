import React from 'react'
import { useHistory, Link } from "react-router-dom";
import "./style.css"


const Nav = () => {
    return (
        <>
     <div className="navbar">
     <div className="navlink">
     <button className= "btn nav"> <Link className="link" to="/register">  register </Link></button>
        <button className="btn nav" > <Link className="link" to="/data">    Data  </Link>   </button>
      </div>
     </div>
        </>
    )
}

export default Nav
