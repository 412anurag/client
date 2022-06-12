import { Component } from "react";
class Logout extends Component {
  state = {};

  render() {
    localStorage.removeItem("username");
    window.location = "/home";
    return "";
  }
}

export default Logout;
