import React, { useContext } from "react";
import './productCard.css';
import {Link, useParams} from 'react-router-dom'; //7.1
import {ProductContext} from "../App"
import {CartContext} from "../App" //вешаем плюсик при добавлнии товара в корзину

//пишем две функции, первая - сам card, вторая превью

//в app.js в качестве пропсов прокинута кнопка 

function ProductCard(props) {
    const {data,setData} = useContext(ProductContext); //КОНТЕКСТ - К
    const {cart,setCart} = useContext(CartContext);
    const id = useParams() //через id можно все отрисовать
    //создадим то, что нам нужно отрисовать
    const product = data.find(elem => elem.id === +id.productId);
    console.log(product)
    
    return (
        // <h1>Product {id.productId}</h1> //ошибки выдавались потому что пробовали ренедерить объект
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
    const {title, image, price, id} = props; //7.3 добавляем id
    return (//7.4 добавляем линку
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

//делаем так, чтобы по клику на изображение и тайтл переходило по нужной ссылке

//после создания глобального контекста выносим функцию getData из каталога в App.js чтобы создавать каталог и при переходе на товар дата не была пустой