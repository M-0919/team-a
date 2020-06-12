import React from "react"
import "./linkToBuy.scss"
import { Link } from "gatsby"
import amazonIcon from "../../images/amazon-icon.png"
import googleIcon from "../../images/play-icon.png"
import koboIcon from "../../images/kobo-icon.png"

const LinkToBuy = () => (
  <div className="links">
    <div className="links__content">
      <p className="links__text">Get your copies here!</p>
      <ul className="links__list">
        <li>
          <Link to="/" className="links__list__button">
            <img className="button__icon" alt="amazon" src={amazonIcon} />
            Amazon
          </Link>
        </li>
        <li>
          <Link to="/" className="links__list__button">
            <img className="button__icon" alt="Google Books" src={googleIcon} />
            Google Play
          </Link>
        </li>
        <li>
          <Link to="/" className="links__list__button">
            <img className="button__icon" alt="kobo" src={koboIcon} />
            Kobo
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default LinkToBuy
