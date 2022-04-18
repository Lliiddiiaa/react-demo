import React, { useContext } from "react";
import './productCard.css';
import {Link, useParams} from 'react-router-dom'; //7.1
import {ProductContext} from "../App"
import {CartContext} from "../App" 

function ProductCard(props) {
    const {data,setData} = useContext(ProductContext); 
    const {cart,setCart} = useContext(CartContext);
    const id = useParams() 
    const product = data.find(elem => elem.id === +id.productId);
    console.log(product)
    
    return (
            <div className='product-image'>
                <div className='product-image'> 
                        <img src={product.image} alt="### " />
                </div>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => props.add(+id.productId)}> Add {cart.includes(+id.productId) ? '-' : '+'}</button>
            </div>
        )
}

function ProductPreview(props) {
    const {title, image, price, id} = props; 
    return (
        <div className='product-preview'>
            <div className='product-image'> 
                <Link to={`${id}`}> 
                    <img src={image} alt="### " />
                </Link>
            </div>
            <Link to={`${id}`}><h2> {title} </h2></Link>
            <p>{price}</p>
            <button onClick={() => props.add(+id.productId)}> Add {cart.includes(+id) ? '-' : '+'}</button>
            {/* <Outlet/> */}
        </div>
    )
}

export {ProductCard,ProductPreview}