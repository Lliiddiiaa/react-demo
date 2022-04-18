import React, { useContext, useEffect, useState } from "react";
import { ProductPreview } from "./ProductCard";
import './catalog.css';
import {ProductContext} from '../App';//10.4 в качестве value передаем объект


function Catalog(){

    // const [data,setData] = useState([]); //2 

    // function getData(){   //1 - функция получения информации
    //         fetch('https://fakestoreapi.com/products/')
    //             .then(resp => resp.json())
    //             // .then(data => console.log(data)
    //             // .then(data => setData(data))//4
    //             .then(data => setData([...data]))//5
    // }

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
            // if(localStorage.getItem('catalog')) {
        //     setData([...JSON.parse(localStorage.getItem('catalog'))])
        // }

        //  {fetch('https://fakestoreapi.com/products/')
        //     .then(resp => resp.json())
        //     .then(data => setData([...data]))
        //     localStorage.setItem('catalog',JSON.stringify(data)) //добавлениа данных в локальное хранилище
        //     }
        // }
    

    useEffect(() => { //3
        // console.log(data); //5
    })

    // getData();

    return(
       <div className='product-container'>
           {data.map((product,index) => {
               return <ProductPreview 
               key={index.toString()}
               title={product.title}
               price={product.price}
               image={product.image} //props
                id={product.id} //7.2
               />})
           }
       </div>
    )
}

export default Catalog;

//6 - приводим гет дата в конечноу варианту, чтобы избавиться от бесконечного цикла