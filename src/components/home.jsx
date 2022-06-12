import React, { Component } from "react";
import "./style.css";
class Home extends Component {
  state = {};
  render() {
    return (<div>
        <div className="" style={{backgroundImage: `url("https://orangematter.solarwinds.com/wp-content/uploads/2018/06/iStock-823686906.jpg")`,
        backgroundSize:"cover",height:"850px", marginBottom: "1px"}}>
		   	<h1 style={{textAlign:"center",padding:"10px",color:"white"}}>WELCOME SCREEN</h1>
        </div>
        </div>);
  }
}

export default Home;
