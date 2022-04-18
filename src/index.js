import React from 'react';
// import ReactDOM from 'react-dom/client';
import {createRoot} from 'react-dom/client';
// import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// const root = document.getElementById('root');
// render(
//   <React.StrictMode>
//      <BrowserRouter>
//       <App/>
//      </BrowserRouter>
//   </React.StrictMode>,
//   root
// );

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
     <BrowserRouter>
     {/* <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='catalog/' element ={<Catalog/>}>
          <Route path=':productId' element ={<ProductCard/>}/>
        </Route>
        <Route path='about' element ={<About/>}/>
        <Route path='cart' element ={<Cart/>}/>
      </Routes> */}
       <App/>
      </BrowserRouter>
    </React.StrictMode>
);