import { useEffect, useState } from "react"
import { Card, Container, Row } from "react-bootstrap"
import ApiCall from '../../apiModel/apiEndPoints'
import '../BreakDown/BreakDown.css'


const api= new ApiCall();

export default function BreakDown() {
    const [categories, setCategories]= useState([])

    useEffect(() => {
        async function fetchData() {
          const response = await api.callBreakdownCategories();
          setCategories(response.data)
        }
        fetchData();
      }, []);

    return (
        <Container>
            {categories.map((category, index) => {
                return(
                  <Row>
                    <Card key={index} className='card'>
                        <Card.Header>{category["category"]} : {category["amount"]}</Card.Header>
                    </Card>
                </Row>
                )
            })}
        </Container>
    )
  }