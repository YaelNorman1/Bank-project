import { useEffect, useState } from "react"
import Transaction from "./Transaction"
import axios from 'axios'

export default function Landing() {
    

    const [transactions, setTransactions]= useState([])

    useEffect(()=>{
      getTransactions();   
    }, []);

    const getTransactions= async() =>{
        axios.get('http://localhost:8080/transactions')
        .then((response) =>{
            setTransactions(response.data)
        })
    }

  //   const deleteTransaction = () => {
  //     callDeleteServer();
  //     props.renderTrensaction();
  // }

  const deleteTransaction= async(id) =>{
      axios.delete(`http://localhost:8080/transactions?id=${id}`)
      .then((response) =>{
          console.log("trensaction deleted");
          getTransactions();
      })
  }

    return (
      <div>
        {transactions.map(element => {return (<Transaction transaction= {element} deleteTransaction= {deleteTransaction}/>)})}
      </div>
    )
}

