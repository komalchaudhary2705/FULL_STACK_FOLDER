import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import BasicCart from './components/BasicCart.jsx';
import Products from './components/a-class-prac/Products.jsx';
// import BasicCart from './components/BasicCart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Cart /> */}
    {/* <BasicCart/> */}
    <Products/>

  </StrictMode>,
)
