import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GroceryApp from './components/b-practice/GroceryApp.jsx'
import GroceryList from './components/b-practice/GroceryList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <GroceryApp/> */}
    {/* <GroceryList/> */}
  </StrictMode>,
)
