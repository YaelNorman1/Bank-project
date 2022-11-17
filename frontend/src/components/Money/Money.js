import './Money.css'


export default function Money(props) {

    return (
        <>
            {props.amount > 0 ?
                <span className="plus"> {props.amount}</span>
                : <span className="minus"> {props.amount}</span>}
        </>
    )
  }