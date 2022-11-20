import axios from "axios";
import { Button } from "react-bootstrap";

export default function DeleteTransaction(props) {

    const deleteTransaction = () => {
        props.deleteTransaction(props.transactionId);
    }

    return (
        <Button variant="danger" onClick={deleteTransaction}>Delete</Button>
    )
  }