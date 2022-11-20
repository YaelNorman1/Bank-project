import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import ApiCall from '../apiModel/apiEndPoints'

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
                <div key={index}>{category["category"]} : {category["amount"]}</div>)
            })}
        </Container>
    )
  }