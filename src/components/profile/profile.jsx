import React from "react"
import "./profile.scss"
import ProfileImg from "../../images/LJL-Formal.png"
import larrySign from "../../images/larrySign.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const Profile = () => (
  <div className="profile">
    <div className="profile__left">
      <p className="profile__left__text">
        Now ten years in, I live a life with Parkinson's that is more rewarding
        and meaningful. It’s been a difficult road, but I have learned to manage
        the symptoms through diet, exercise and living mindfully. Looking to
        share my insights and practice
      </p>
      <img
        className="profile__left__name"
        alt="larry-signature"
        src={larrySign}
      />
      <p className="profile__left__address">
        Toronto, Canada <br />
        larry@livewellwithpd.com <br />
        (+1)(416)710-6546
      </p>
    </div>
    <div className="profile__right">
      <img
        className="profile__right__image"
        alt="larry-relax"
        src={ProfileImg}
      />

      <ul className="profile__right__list">
        <li className="profile__right__list__item">
          <a href="https://www.facebook.com/larry.linton/">
            <FontAwesomeIcon icon={faFacebook} size="4x" />
          </a>
        </li>
        <li className="profile__right__list__item">
          <a href="https://www.twitter.com/">
            <FontAwesomeIcon icon={faTwitter} size="4x" />
          </a>
        </li>
        <li className="profile__right__list__item">
          <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} size="4x" />
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Profile
