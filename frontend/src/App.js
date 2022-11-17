import './App.css';
import React, { Component }  from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Landing from './components/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Operations from './components/Operations';




function App() {
  return (
   <Router>
        <div className="App container">
          <Navbar/>
          <Route exact path="/" render={() => <Landing/>}/>
          <Route exact path="/operations" render={() => <Operations/>}/>
        </div>
      </Router>
  );
}

export default App;
