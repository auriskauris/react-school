import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import {ProductList} from './components/Products';
import {RegisterForm} from './components/RegisterForm';
import {LoginForm} from './components/LoginForm';
import {CartList} from './components/Cart';
import LoginService from './services/LoginService';
import RegisterService from './services/RegisterService';
import ProductService from './services/ProductService';
import CartService from './services/CartService';
import Etusivu from './components/Frontpage';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';

function App() {

  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  // const [users, setUsers] = useState([]);
  const [errormessage, setErrorMessage] = useState("");
  const [token, setToken] = useState(null);

  const errormessageHook = () => {
    if(errormessage !== ""){
      const timer = setTimeout(()=>setErrorMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }

  useEffect(errormessageHook, [errormessage]);


    // registerHandler
  const addUser = (e, newFirstname, newLastname, newPassword, newAddress, newPhone, newEmail) => {
    e.preventDefault();
    const newUser = {firstname: newFirstname,
                    lastname: newLastname, 
                    password: newPassword,
                    address: newAddress, 
                    phone: newPhone, 
                    email: newEmail};
      RegisterService.register(newUser)
      .then(response => {
      console.log("addUser", response)
      // setUsers(users.concat(response))
    })
    .catch(error => {
      console.log("rekisteröinti ei onnistunut")
      setErrorMessage("rekisteröinti ei onnistunut")
    })
  }

  
  //login handler
  const loginHandler = (e, email, password) => {
    e.preventDefault();
    const newCustomer = {email: email, password: password}
    console.log(newCustomer)
    LoginService.login(newCustomer)
    .then(response => {
      console.log(response)
      setToken(response)
      ProductService.setToken(response.token)
      CartService.setToken(response.token)
      window.localStorage.setItem('notesdemouser', JSON.stringify(response))
    })
    .catch(error => {
      console.log("kirjautuminen ei onnistunut")
      setErrorMessage("kirjautuminen ei onnistunut")
    })
  }

  //logout
  const logout = () => {
    window.localStorage.removeItem('notesdemouser')
    window.location.reload()
  }


  const userHook = () => {
    const loggedCustomerJSON = window.localStorage.getItem('notesdemouser')
    if (loggedCustomerJSON) {
      const customer = JSON.parse(loggedCustomerJSON)
      setToken(customer)
      ProductService.setToken(customer)
      CartService.setToken(customer)
    }
  }

  const startHook = () => {
    
    ProductService.getAll()
      .then(response => {
        const product = response
        setProduct(product)
        console.log("startHook", product)
      })
        .catch(error => {
        console.log("käynnistä JSONserver")
    })
    if (token === null) {
      return
    }
    CartService.getAll()
      .then(response => {
        const cart = response
        setCart(cart)
        console.log("startHook", cart)
      })
        .catch(error => {
        console.log("error")
    })  

  }

  useEffect(userHook, []);
  useEffect(startHook, [token]);
 
  
  return (
    <div>
      <header className="App-header">
      <nav>
        <ul>
          <li>
            <a href='/'>Etusivu</a>
          </li>
          <li>
            <a href='/ProductList'>Tuotteet</a>
          </li>
          {!token && <li>
            <a href='/Login'>Kirjaudu sivulle</a>
          </li> }
          {!token && <li>
            <a href='/Register'>Rekisteröidy asiakkaaksi</a>
          </li>}
          {token && <li>
            <a href='/' onClick={logout}>Kirjaudu ulos</a>
          </li>}
          <li>
            <a href='/CartList'>Ostoskoriin</a>
          </li>
        </ul>
      </nav>
      </header>

      <BrowserRouter>
       <Routes>
        <Route path="/" element={<Etusivu/>} />
         <Route path="/ProductList" element={<ProductList product={product}/>} />
         <Route path="/Login" element={<LoginForm loginHandler={loginHandler}/>} />
         <Route path="/Register" element={<RegisterForm addUser={addUser}/>} />
         <Route path="/CartList" element={<CartList cart_item={cart}/>} />
       </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
