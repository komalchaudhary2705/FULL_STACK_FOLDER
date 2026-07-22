import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App.jsx";
import Cart from "./components/Cart.jsx";
import BasicCart from "./components/BasicCart.jsx";
import Products from "./components/a-class-a-prac/Products.jsx";
import EffectPrac from "./components/a-topic-prac/useeffect-hook/Parent.jsx";
import HighOrderComponent from "./components/a-topic-prac/HighOrderComponents/HighOrderComponent.jsx";
// import Layout from "./components/a-layput-prac/Layout.jsx";
import Home from "./components/a-layput-prac/Home.jsx";
import About from "./components/a-layput-prac/About.jsx";
import Todo from "./CalssPracticeFolder/todo/Todo.jsx";
// import Home from "./components/a-layput-prac/Home.jsx";
// import BasicCart from './components/BasicCart.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Cart /> */}
    {/* <BasicCart/> */}
    {/* ================ */}
    {/* <Products/> */}
    {/* =============== */}
    {/* <EffectPrac/> */}

    {/* ============================= */}
    {/* higher order practice */}
    {/* ============================= */}
    {/* <HighOrderComponent>
      <h1>I am heading from HOC</h1>
      <p>I am Paragraph from HOC</p>
    </HighOrderComponent> */}
  
    {/* <Home/> */}
    {/* <About/> */}
    {/* ============================= */}
    {/* ============================= */}
    <Todo/>

   
  </StrictMode>,
);
