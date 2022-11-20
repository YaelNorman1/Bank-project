import './App.css';
import React, { Component, useState }  from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Landing from './components/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Operations from './components/Operations';
import ApiCall from '../src/apiModel/apiEndPoints'
import BreakDown from './components/BreakDown';

const api= new ApiCall();

function App() {
  const [balance, setBalance]= useState(0);

  const updateBalance= async() =>{
    api.callGetBalance()
    .then((response) =>{
      setBalance(response.data[0]["amount"]);
    })
  }

  return (
      <Router>
        <div className="App container">
          <Navbar balance={balance} updateBalance={updateBalance}/>
          <Route exact path="/" render={() => <Landing updateBalance={updateBalance} />}/>
          <Route exact path="/operations" render={() => <Operations updateBalance={updateBalance}/>}/>
          <Route exact path="/breakdown" render={() => <BreakDown />}/>
        </div>
      </Router>
  );
}

export default App;
