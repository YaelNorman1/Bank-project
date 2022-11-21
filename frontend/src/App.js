import './App.css';
import React, { useState }  from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Landing from './components/Landing';
import 'bootstrap/dist/css/bootstrap.min.css';
import Operations from './components/Operations/Operations';
import ApiCall from '../src/apiModel/apiEndPoints'
import BreakDown from './components/BreakDown/BreakDown';

const api= new ApiCall();

function App() {
  const [balance, setBalance]= useState(0);

<<<<<<< HEAD
  const updateBalance= () => {
    async function fetchData() {
      const response = await api.callGetBalance();
      setBalance(response.data["amount"]);
    }
    fetchData();
  };
         
=======
  const updateBalance= async() =>{
    api.callGetBalance()
    .then((response) =>{
      console.log(response.data[0]["amount"]);
      setBalance(response.data[0]["amount"]);
    })
  }

>>>>>>> 107682c465789c7bee76c802dc5ccf03d5a3b114
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
