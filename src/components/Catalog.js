import React, { useContext, useEffect, useState } from "react";
import { ProductPreview } from "./ProductCard";
import './catalog.css';
import {ProductContext} from '../App';


function Catalog(props){

    // const [data,setData] = useState([]); //2 

    const [data,setData] = useContext(ProductContext);

//     function getData(){
//         if(data.length === 0) {
//         if(JSON.parse(localStorage.getItem('catalog')).length > 0) {
//             setData([...JSON.parse(localStorage.getItem('catalog'))])
//             console.log(JSON.parse(localStorage.getItem('catalog')))
//             return
//         } else {
//             fetch('https://fakestoreapi.com/products/')
//                 .then(resp => resp.json())
//                 .then(data => {
//                     setData([...data])
//                     localStorage.setItem('catalog',JSON.stringify(data)); //добавлениа данных в локальное хранилище
//             });
//         }
//     }
// }

    useEffect(() => { //3
        // console.log(data); 
    })

    // getData();

    return(
       <div className='product-container'>
           {data.map((product,index) => {
               return <ProductPreview 
                key={index.toString()}
                title={product.title}
                price={product.price}
                image={product.image} 
                id={product.id} 
                add = {props.add} 
               />})
           }
       </div>
    )
}

export default Catalog;

