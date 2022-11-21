import { useEffect, useState } from "react"
import Transaction from "./Transaction/Transaction"
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
      const response= await api.callDeleteTransaction(id)
      getTransactions();
  }

    return (
      <div>
        {transactions.map((element, index) => {return (<Transaction key={index} transaction= {element} deleteTransaction= {deleteTransaction} updateBalance={props.updateBalance}/>)})}
      </div>
    )
}

