import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// for routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// custom component
import Landing from "./components/Landing/Landing";
import CoachRouter from "./components/Coach/CoachRouter";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/coach" component={CoachRouter} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
