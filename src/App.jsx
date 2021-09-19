import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Navbar from "./Navbar";
import { Switch , Redirect, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import About from "./About";
import Formation from "./Formation";
import Contact from "./Contact";
import Signup from "./components/Signup";
import Login from "./components/Login"



const App = () => {
  return (
    <>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/formations" component={Formation} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
      </Router>
    </>
  )
}

export default App;