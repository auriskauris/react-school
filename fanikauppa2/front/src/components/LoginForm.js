import { useState } from "react";

const LoginForm = ({loginHandler}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return(
        <div className="Lomake">
        <form onSubmit={e=> loginHandler(e, email, password)}>
            <input onChange={e=>setEmail(e.target.value)} 
                   name="email" value={email} type="text" placeholder="sähköposti"/><br></br>
            <input onChange={e=>setPassword(e.target.value)}
                    name="password" value={password} type="password" placeholder="salasana"/><br></br>
            <input className="tallennus" type="submit" value="kirjaudu" />
        </form>
    </div>
    )
}

export {LoginForm};