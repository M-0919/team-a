import React from "react"
import "./linkToBuy.scss"
import { Link } from "gatsby"

const LinkToBuy = () => (
  <div className="links">
    <div className="links__content">
      <p className="links__text">Purchase your copy here!</p>
      <ul className="links__list">
        <li>
          <Link to="/" className="links__button">
            Buy
          </Link>
        </li>
        <li>
          <Link to="/" className="links__button">
            Buy
          </Link>
        </li>
        <li>
          <Link to="/" className="links__button">
            Buy
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default LinkToBuy
