import React from "react"
import "./linkToBuy.scss"
import { Link } from "gatsby"
import amazonIcon from "../../images/amazon-icon.png"
import googleIcon from "../../images/play-icon.png"

const LinkToBuy = () => (
  <div className="links">
    <div className="links__content">
      <p className="links__text">Where you can find the book</p>
      <ul className="links__list">
        <li>
          <Link to="/" className="links__button">
            <img className="button__icon" alt="amazon" src={amazonIcon} />
            Amazon
          </Link>
        </li>
        <li>
          <Link to="/" className="links__button">
            <img className="button__icon" alt="Google Books" src={googleIcon} />
            Google Play
          </Link>
        </li>
        <li>
          <Link to="/" className="links__button">
            Book store
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default LinkToBuy
