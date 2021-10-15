import React, { useState, useContext } from "react";
import logo from "./images/undraw_secure_login_pdn4.svg";
import { useHistory, Link } from "react-router-dom";
import "./style.css"

const Login = () => {

  const History = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("please filled properly");
      console.log("plz filled");
    }
    else if(res.status===401){
        window.alert("please enter correct ID and Password")
        console.log("errro in idf and pass");
    } else {
     
      window.alert("login sucessfull");
      console.log("hogya");
      History.push("/nav")

   
    }
  };
  return (
    <>
      <div className="main">
        <div className="card">
          <div className="left">
            <img className="rslogo" src={logo} alt="" />
    
          </div>
          <div className="right">
            <div className="head">
              <h3>Sign In</h3>
            </div>
            <form method="POST">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <br />

                <input
                  type="password"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                <button onClick={loginUser} className="btn">
                  Login
                </button>
                <p>
                  ID: admin@namasys.co
                  <br />
                  password:admin123
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
