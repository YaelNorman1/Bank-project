import { useEffect, useState } from "react"
import Transaction from "./Transaction"
// import axios from 'axios'
import ApiCall from '../apiModel/apiEndPoints'

const api= new ApiCall();

export default function Landing(props) {

    const [transactions, setTransactions]= useState([])

    useEffect(()=>{
      getTransactions();   
    }, []);

    const getTransactions= async() =>{
        api.callgetTransactions()
        .then((response) =>{
            setTransactions(response.data)
        })
    }

  const deleteTransaction= async(id) =>{
      api.callDeleteTransaction(id)
      .then((response) =>{
          console.log("trensaction deleted");
          getTransactions();
      })
  }

    return (
      <div>
        {transactions.map(element => {return (<Transaction transaction= {element} deleteTransaction= {deleteTransaction} updateBalance={props.updateBalance}/>)})}
      </div>
    )
}

