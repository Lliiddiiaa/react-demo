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

export const ProductContext = React.createContext(); //10 

function App() {
  const [data,setData] = useState([]);// 10.1 создаем стейт

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
                  localStorage.setItem('catalog',JSON.stringify(data)); //добавлениа данных в локальное хранилище
          });
        }
      }
    }

    getData();
  
  return (
    //10.2
    <ProductContext.Provider value = {{DataTransfer,setData}}> 
      <React.Fragment>
        {/* <Nav/> */}
        <Routes>
          <Route path='/' element ={<Nav/>}>
            <Route index element={<Home/>}/>
            <Route path='catalog/' element ={<Catalog/>}/>
            <Route path='catalog/:productId' element ={<ProductCard/>}/>
            
            
            <Route path='about' element ={<About/>}/>
            <Route path='cart' element ={<Cart/>}/>
          </Route>
        </Routes>
        <Footer/>
      </React.Fragment>
    </ProductContext.Provider>
  );
}

export default App;
