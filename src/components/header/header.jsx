import React from "react"
import { Link } from "gatsby"
import "./header.scss"

const Header = () => (
  <header className="header">
    <h1 className="header__title">
      <Link to="/">Shaken, not stirred</Link>
    </h1>
  </header>
)

export default Header
