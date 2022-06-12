import React, { Component } from "react";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { username:null};
  componentDidMount() {
    const username = localStorage.getItem("username");
    this.setState({ username:username});
  }
  render() {
    const { username} = this.state;
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark my-1">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="row navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li>
                 <Link className="navbar-brand" to="/home">Home</Link>
              </li>
              {!username && (
              <Link className="nav-link" to="/login" style={{color:"white"}}>
                LOGIN
              </Link>)
              }
               {username && (
              <Link className="nav-link" to="/dashboard" style={{color:"white"}}>
                DASHBOARD
              </Link>)
              }
            </ul>
        </div>
        
        {username && (
              <Link className="nav-link" to="/logout" style={{color:"white"}}>
                LOGOUT
              </Link>)
        }
      </nav>
    );
  }
}

export default Navbar;
