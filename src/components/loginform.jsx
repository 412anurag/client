import React from "react";
import {useState} from 'react';
let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
function LoginForm(props) {

  const [data,setData]=useState(props.data);
  const [error,setError]=useState({});
  
  function handleChange(e) {
    let errString = validateInput(e);
    setData({...data,[e.currentTarget.name]: e.currentTarget.value});
    setError({...error,[e.currentTarget.name]: errString});
  };

  function handleLogin(e) {
    e.preventDefault();
    let error = validate();
    setError({error});
    let errCount = Object.keys(error).length;
    if (errCount > 0) return;
    props.onLogin(data);
  };

  function validate() {
    let err = {};
    if (reg.test(data.email) === false)
      err.email = "Enter valid email";
    if (data.userPassword.length < 8)
      err.userPassword = "Password must be of atleast 8 characters.";
    return err;
  };

  function validateInput(e) {
    switch (e.currentTarget.name) {
      case "email":
        if (reg.test(e.currentTarget.value) === false) return "Enter valid email";
        break;
      case "userPassword":
        if (e.currentTarget.value.length <8)
          return "Password must be of atleast 8 characters.";
        break;
      default:
        break;
    }
    return "";
  };

  function isFormInvalid() {
    let err = validate();
    let errCount = Object.keys(err).length;
    return errCount > 0;
  };
  
    return (
      <div>
        <h3 style={{color:"#0000ff"}}>Login</h3>
        <form className="border bg-light" style={{width:"80%",padding:"10px",marginBottom:"100px"}}>
          <div className="form-group" style={{marginBottom:0}}>
              <label htmlFor="email">Email</label><span style={{color:"red"}}>*</span><br></br>
              <input
                placeholder="Enter your Email ID"
                value={data.email}
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
          </div>
          <div>
              <small>
              We will never share your email with anyone else.
              </small>
          </div>
          {error.email ? (
            <div style={{color:'red'}}>
                {error.email}
              </div>
          ) : (
            ""
          )}
          <div className="form-group">
              <label htmlFor="userPassword">Password</label><span style={{color:"red"}}>*</span><br></br>
              <input
                placeholder="Enter your password"
                value={data.userPassword}
                onChange={handleChange}
                type="password"
                id="userPassword"
                name="userPassword"
                className="form-control"
              />
          </div>
          {error.userPassword ? (
            <div style={{color:'red'}}>
                {error.userPassword}
            </div>
          ) : (
            ""
          )}
          <div style={{textAlign:"center"}}>
          <button
            className="btn btn-primary"
            disabled={isFormInvalid()}
            onClick={handleLogin}
          >
            Login
          </button>
          </div>
        </form>
      </div>
    );
  }


export default LoginForm;
