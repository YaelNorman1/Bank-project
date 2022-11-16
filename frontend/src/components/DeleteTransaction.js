import axios from "axios";
import { Button } from "react-bootstrap";

export default function DeleteTransaction(props) {

    const deleteTransaction = () => {
        callDeleteServer();
        props.renderTrensaction();
    }

    const callDeleteServer= async() =>{
        axios.delete(`http://localhost:8080/transactions?id=${props.transactionId}`)
        .then((response) =>{
            console.log("trensaction deleted");
        })
    }


    return (
        <Button variant="danger" onClick={deleteTransaction}>Delete</Button>
    )
  }