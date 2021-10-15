import React from 'react'
import "./table.css"
import Axois from "axios"

const Table = (props) => {
  const deleteData = () =>{
Axois.post("/delete",{_id:props._id}).then((res)=>{window.location.reload()})
}
  
  return (
    <>
      <div className="main3">
        <div className="trow">
          <p> Username: {props.name} </p>
          <p>Address:{props.Address}</p>
          <p>Email:{props.email}</p>
          <p>Phone{props.Phone}</p>
        </div>

      <button  className = "tbtn"onClick={deleteData}><i class="zmdi zmdi-delete"></i></button>
      </div>
    </>
  )
}

export default Table
