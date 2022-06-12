import React from "react";
import LoginForm from "./loginform";
import {useState} from 'react';

function Login() {

  const [data,setData]=useState({email: "", userPassword: ""});
  const [loginCredentials,setLoginCredentials]=useState({username:'task@gmail.com',password:'12345678'});
  const [error,setError]=useState({name: ""});
  function loginUser(data) {
    try {
      if(loginCredentials.username !==data.email)
      {
        setError({ name:'Incorrect username.' });
      }
      else if(loginCredentials.password !==data.userPassword)
      {
        error.name ='Incorrect password.';
        setError({ name:'Incorrect password.' });
      }
      else{
        alert('User logged in successfully.');
        setError({ name:'' });
        localStorage.setItem("username", data.email);
        window.location = "/dashboard";
      }
      
    } catch (ex) {
      alert(ex);
      setError({ name: ""+ex+"" });
    }
    
  };
  
    return (
      <div className="container" style={{paddingLeft:"15%",paddingTop:"50px",paddingBottom:"20px",marginTop: "5%",backgroundColor:"#ebffd2"}}>
          {error.name ? (
            <div style={{ color: "red" }}>{error.name}</div>
          ) : (
            ""
          )}
          <LoginForm onLogin={loginUser} data={data} />
      </div>
    );
  }


export default Login;
