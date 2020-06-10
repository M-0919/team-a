import React from "react"
import "./linkToBuy.scss"
import { Link } from "gatsby"

const LinkToBuy = () => (
  <div className="links">
    <div className="links__text-box">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt (Links to buy)
      </p>
    </div>

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
)

export default LinkToBuy
