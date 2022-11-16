import { Card, Row } from "react-bootstrap"
import DeleteTransaction from "./DeleteTransaction"


export default function Transaction(props) {
    
    
    return (
      <Row>
        <Card>
            <Card.Header>{props.transaction.vendor}</Card.Header>
            <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text>{props.transaction.amount}</Card.Text>
                <Card.Text>{props.transaction.category}</Card.Text>
                <DeleteTransaction transactionId={props.transaction.id}/>
            </Card.Body>
        </Card>
      </Row>
    )
  }