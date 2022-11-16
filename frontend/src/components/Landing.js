import Transaction from "./Transaction"

export default function Landing() {
    
    const transactions= [
        {amount: 50, category: "Grocery", vendor: "Shupersal"},
        {amount: 50, category: "Grocery", vendor: "Shupersal"}
    ]
    return (
      <div>
        {transactions.map(element => {return (<Transaction transaction= {element}/>)})}
      </div>
    )
  }