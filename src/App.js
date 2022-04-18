import React, {useState} from 'react';
import './App.css';
import Nav from './components/nav';
import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Catalog from "./components/Catalog"
import About from "./components/About"
import Cart from "./components/Cart"
import Footer from './components/Footer';
import { ProductCard } from './components/ProductCard';

export const ProductContext = React.createContext(); 
export const CartContext = React.createContext(); 

function App() {
  const [data,setData] = useState([]);
  const [cart, setCart] = useState([]); 

    function getData(){
      if(data.length === 0) {
        if(JSON.parse(localStorage.getItem('catalog')).length > 0) {
          setData([...JSON.parse(localStorage.getItem('catalog'))])
          console.log(JSON.parse(localStorage.getItem('catalog')))
          return
      } else {
          fetch('https://fakestoreapi.com/products/')
              .then(resp => resp.json())
              .then(data => {
                  setData([...data])
                  localStorage.setItem('catalog',JSON.stringify(data)); 
          });
        }
      }
    }


    function getCart() {
      if(cart.length === 0) {
        if(localStorage.getItem('cart')) {
          setCart([...JSON.parse(localStorage.getItem('cart'))])
        } else {
          return
        }
      }
    }

    getCart();
    getData();

  function addCart(id) { 
    console.log(id)
    let value = cart;
    if(!cart.includes(id)) {
      value.push(id)
      setCart(value)
    };
    localStorage.setItem('cart',JSON.stringify(value))
  }
  
  return (
    
    <CartContext.Provider value = {{cart,setCart}}> 

      <ProductContext.Provider value = {{data,setData}}> 

        <React.Fragment>
          {/* <Nav/> */}
          <Routes>
            <Route path='/' element ={<Nav/>}>
              <Route index element={<Home/>}/>
              <Route path='catalog/' element ={<Catalog add={addCart}/>}/> 
              <Route path='catalog/:productId' element ={<ProductCard add={addCart}/>}/>
              
              <Route path='about' element ={<About/>}/>
              <Route path='cart' element ={<Cart/>}/>
            </Route>
          </Routes>
          <Footer/>
        </React.Fragment>

      </ProductContext.Provider>
      
    </CartContext.Provider>
  );
}

export default App;
