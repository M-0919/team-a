import React from "react"
import { Link } from "gatsby"
import "./header.scss"

const Header = () => (
  <header className="header">
    <div className="header__nav">
      <Link className="header__nav__link" to="/">
        LINK
      </Link>
      <Link className="header__nav__link" to="/">
        HOME
      </Link>
      <Link className="header__nav__link" to="/">
        LINK
      </Link>
    </div>
  </header>
)

export default Header
