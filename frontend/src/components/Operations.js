import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import ApiCall from '../apiModel/apiEndPoints'
// import axios from 'axios';

const api= new ApiCall();

export default function Operations(props) {
    const [inputs, setInputs]= useState({amount: 0, vendor: "", category: ""});
   
    const handleInput= (event) => {
        const newInputValue={...inputs}
        let newValue=event.target.value
        const valueName= event.target.name
        if(valueName === "amount"){
            newValue=Math.abs(newValue)
        }
        newInputValue[valueName]=newValue
        setInputs(newInputValue)
    }
    
    const saveTransaction= (event) => {
        const newTransaction = {
            amount: event.target.name === "withdraw"? -(inputs.amount) : inputs.amount,
            category: inputs.category,
            vendor: inputs.vendor
        };
        api.callPostTransaction(newTransaction)
        .then((res)=>{
            setInputs({amount:0,vendor:"",category:""});
            props.updateBalance();
        })
        .catch((error) => {
            console.log(error)
        });
    }

 
    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Transaction Amount</Form.Label>
                    <Form.Control type="number" name="amount" placeholder="Type Amount" value={inputs.amount} onChange={handleInput}/>
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Transaction Vendor</Form.Label>
                    <Form.Control as="textarea" name="vendor" placeholder="Type Vendor" value={inputs.vendor} onChange={handleInput}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Transaction Category</Form.Label>
                    <Form.Control as="textarea" name="category" placeholder="Type Category" value={inputs.category} onChange={handleInput}/>
                </Form.Group>
                <Button variant="success" name="deposit" onClick={saveTransaction}>Deposit</Button>
                <Button variant="danger" name="withdraw" onClick={saveTransaction}>Withdraw</Button>
            </Form>
        </Container>

    )
  }