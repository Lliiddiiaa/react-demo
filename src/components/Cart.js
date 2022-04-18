import React, { useContext } from "react";
import {CartContext} from "../App"
import {Link} from "react-router-dom"
import  "./cart.css";


function CartWidget() {
    const {cart,setCart} = useContext(CartContext); 

    return (
        <div>
            <Link to='cart'> Cart </Link>
            <span> {cart.length}</span>
        </div>
    )
}

function Cart(){

    const {cart,setCart} = useContext(CartContext); 
    const {data,setData} = useContext(ProductContext);
    const dataCart = data.filter(item => cart.includes(item.id));
    const price = dataCart.reduce((summ,item) => summ += parseFloat(item.price), 0) || '0';

    console.log(dataCart);

    return(
        <div className='cart-container'>
            {dataCart.map((item,i) => {
                return(
                    <div className='cart-item' key={i.toString()}>
                        <div className='cart-image'> 
                            <img src={item.image} alt="### " />
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                    </div>
                )
            })}
            <span> Total price:{price}</span>
        </div>
    )
}

export default Cart;
export {CartWidget}; 