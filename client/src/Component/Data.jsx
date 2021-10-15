import React, { useEffect, useState } from 'react'
import Table from './Table'
import { useHistory, Link } from "react-router-dom";



const Data = () => {
const [input , setinput]= useState([])
    const getdata = async()=>{
            const res = await fetch("/get")
            
            const data = await res.json()
            console.log(data);
            setinput(data)
    }

    useEffect(()=>{
        getdata()
    },[])
    return (
        <>
        <div className="navbar">
     <div className="navlink">
     <button className= "btn nav"> <Link className="link" to="/register">  register </Link></button>
        <button className="btn nav" > <Link className="link" to="/data">    Data  </Link>   </button>
      </div>
     </div>
       {input.map((ele)=>{
         return(
             <>

<Table name={ele.username} 
email={ele.email}
Address = {ele.address}
Phone={ele.phone}
_id = {ele._id}
/>
             </>

         )
       })}

      
        </>
    )
}

export default Data
