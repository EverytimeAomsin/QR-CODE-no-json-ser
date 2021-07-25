import React from 'react'
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <div>
      <div className="dropdown">
  <h3 className="dropbtn">กดที่นี่เพื่อเปลียนหน้า</h3>
  <div className="dropdown-content">
    <a href="/">Home</a>
    <a href="/admin">Admin </a>
  </div>
</div>
    </div>
  )
}

export default Dropdown

