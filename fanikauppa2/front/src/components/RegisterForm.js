import { useState } from "react";

const RegisterForm = ({addUser}) => {
    const [newFirstname, setNewFirstname] = useState("");
    const [newLastname, setNewLastname] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newPhone, setNewPhone] = useState("");
    const [newEmail, setNewEmail] = useState("");
    
    return(
        <div className="Lomake">
        <form onSubmit={e=> addUser(e, newFirstname, newLastname, newPassword, newAddress, newPhone, newEmail)}>
            <input onChange={e=>setNewFirstname(e.target.value)} 
                   name="firstname" value={newFirstname} type="text" placeholder="etunimi"/><br></br>
            <input onChange={e=>setNewLastname(e.target.value)} 
                   name="lastname" value={newLastname} type="text" placeholder="sukunimi"/><br></br>
              <input onChange={e=>setNewPassword(e.target.value)} 
                   name="password" value={newPassword} type="password" placeholder="password"/><br></br>    
            <input onChange={e=>setNewAddress(e.target.value)} 
                   name="address" value={newAddress} type="text" placeholder="osoite"/><br></br>
            <input onChange={e=>setNewPhone(e.target.value)} 
                   name="phone" value={newPhone} type="number" placeholder="puhelinnumero"/><br></br>       
            <input onChange={e=>setNewEmail(e.target.value)}
                    name="email" value={newEmail} type="text" placeholder="sähköposti"/><br></br>               
            <input className="tallennus" type="submit" value="tallenna" />
        </form>
    </div>
    )
}

export {RegisterForm};