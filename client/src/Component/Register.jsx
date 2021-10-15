import React, { useEffect, useState } from "react";
import logo from "./images/undraw_Hello_re_3evm.svg";
import "./style.css";
import { useHistory, Link } from "react-router-dom";



const Register = () => {
  
  
  const [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
   
  });
  
  const history = useHistory()
  let name, value;

  const inputhandle = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const postdata = async (e) => {
    e.preventDefault();
    const {username , phone , email , address} = user; 

    const res = await fetch("/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        phone,
        address
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
     window.alert("please fill data properly")
      console.log("invalid Registration");
    }else if(phone.length!==10){
        window.alert("please enter correct numder")
    
    } else if (res.status === 421) {
      window.alert("Email is already registered");
    
    }else if(email.indexOf('@')<=0) {
            window.alert("enter correct email")
    }else {
      window.alert(" Registration Successful");
      console.log(" Registration Successful");

      
    }

  };
         

  
  return (
    <>
     <div className="navbar">
     <div className="navlink">
     <button className= "btn nav"> <Link className="link" to="/register">  register </Link></button>
        <button className="btn nav" > <Link className="link" to="/data">    Data  </Link>   </button>
      </div>
     </div>
      <div className="main">
        <div className="card">
          <div className="left">
            <div className="head">

              <h3>Enter Data</h3>
            </div>
            <form method="post">
              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  placeholder="Your name"
                  value={user.username}
                  onChange={inputhandle}
                />
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Your Email"
                  value={user.email}
                  onChange={inputhandle}
                />
                <br />
                <input
                  type="text"
                  name="phone"
                  placeholder="phone"
                  value={user.phone}
                  onChange={inputhandle}
                />
                <br />
                <input
                  type="text"
                  name="address"
                  placeholder="Your Address"
                 value={user.address}
                  onChange={inputhandle}
                />
                <br />
              
              </div>
              <button className="btn" onClick={postdata}>
                Register
              </button>
            </form>
          </div>
          <div className="right">
            <img className="rslogo" src={logo} alt="" />
            <br />

          </div>
        </div>
      </div>
     
    </>
  );
};

export default Register;