import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"
import "./Layout.css"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
