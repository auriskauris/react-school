import { useState } from "react";

const OrderForm = ({submitHandler}) => {
    const [newCart, setNewCart] = useState("");

    return(
        <div>
            <form onSubmit={e=>submitHandler(e, itemdata.id, itemdata.name, itemdata.price, amount)}>
                <input className="amount" onChange={e=>setAmount(e.target.value)} type="number" min="0"/><br></br><br></br>
                <input className="btn" type="submit" value="Lisää tuote" />

            </form>
        </div>
    )}

export default {OrderForm};