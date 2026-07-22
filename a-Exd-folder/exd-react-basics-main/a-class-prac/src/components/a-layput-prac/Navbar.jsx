import React from 'react'

const Navbar = () => {
  return (
    <div style={{padding:"30px",background:"teal",color:"white"}}>
      <nav style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <h1>Logo</h1>
        <ul style={{display:"flex",alignItems:"center",gap:"10px"}}>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
