import React from 'react';
import { MDBInput } from 'mdb-react-ui-kit';
import { Container, Form } from 'react-bootstrap';

export default function Operations(props) {

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Transaction Amount</Form.Label>
                    <Form.Control type="number" placeholder="" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Transaction Vendor</Form.Label>
                    <Form.Control as="textarea" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Transaction Category</Form.Label>
                    <Form.Control as="textarea"  />
                </Form.Group>
            </Form>
        </Container>

    )
  }