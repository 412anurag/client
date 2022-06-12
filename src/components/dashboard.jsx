import { Component } from "react";
class Dashboard extends Component {
  state = {
      username:null
  };
  componentDidMount() {
    const username = localStorage.getItem("username");
    this.setState({ username: username});
  }
  render() {
    return (
        <div className="container" style={{textAlign:'center'}}>
                    {this.state.username?<h1 style={{marginTop:'20%',color:'blue'}}>Username : {this.state.username}</h1>:"Please login"}
        </div>
    );
  }
}

export default Dashboard;
