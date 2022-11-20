import axios from 'axios'

export default class ApiCall{

    callgetTransactions= () =>{
        return axios.get('http://localhost:8080/transactions')
    }

    callDeleteTransaction= (id) =>{
        return axios.delete(`http://localhost:8080/transactions?id=${id}`)
    }

    callPostTransaction= (newTransaction) => {
        return axios.post('http://localhost:8080/transactions',newTransaction)
    }

}
