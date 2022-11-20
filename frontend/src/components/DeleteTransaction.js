import { Button } from "react-bootstrap";

export default function DeleteTransaction(props) {

    const deleteTransaction = async () => {
        await props.deleteTransaction(props.transactionId);
        props.updateBalance();
    }

    return (
        <Button variant="danger" onClick={deleteTransaction}>Delete</Button>
    )
  }