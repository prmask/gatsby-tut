import React from "react"
import { Link } from "gatsby"

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/product">Product Page</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/examples">Examples</Link>
        </li>
        <li>
          <Link to="/images">Images</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
