import { Card, Row } from "react-bootstrap"
import DeleteTransaction from "../DeleteTransaction"
import Money from "../Money/Money"
import '../Transaction/Transaction.css'



export default function Transaction(props) {

    return (
      <Row>
        <Card className="card">
            <Card.Header>{props.transaction.vendor}</Card.Header>
            <Card.Body>
                <Card.Text><Money amount={props.transaction.amount}/></Card.Text>
                <Card.Text>{props.transaction.category}</Card.Text>
                <DeleteTransaction transactionId={props.transaction.id} deleteTransaction={props.deleteTransaction} updateBalance={props.updateBalance} />
            </Card.Body>
        </Card>
      </Row>
    )
  }