import { Card, Row } from "react-bootstrap"
import DeleteTransaction from "./DeleteTransaction"
import Money from "./Money/Money"


export default function Transaction(props) {
    
    
    return (
      <Row>
        <Card>
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