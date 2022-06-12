import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./navbar";
import Home from './home';
import Login from "./login";
import Logout from "./logout";
import Dashboard from "./dashboard";
import ProtectedRoute from "./protectedRoute";
import "../App.css";


function App() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="content">
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />

            <Redirect to="/home" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }

export default App;
