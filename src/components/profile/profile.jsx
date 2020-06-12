import React from "react"
import "./profile.scss"
import ProfileImg from "../../images/LJL-Formal.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Profile = () => (
  <div className="profile">
    <div className="profile__left">
      <h2 className="profile__left__title">LARRY LINTON</h2>
      <p className="profile__left__discription">
        Now ten years in, I live a life with Parkinson's that is more rewarding and meaningful. 
        It’s been a difficult road, but I have learned to manage the symptoms through diet, exercise and living mindfully. 
        Looking to share my insights and practice
      </p>
      <p className="profile__left__address">
        Toronto, Canada <br />
        larry@livewellwithpd.com  <br />
        (+1)(416)710-6546
      </p>
    </div>
    <div className="profile__right">
      <div className="profile__right__image">
      <img
          className="profile__right__content__image"
          src={ProfileImg}
          alt=""
        />
      </div>
      <ul className="profile__right__list">
        <li className="profile__right__list__item">
          <a href="https://www.facebook.com/larry.linton/"
            className="facebook social">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </li>
        <li className="profile__right__list__item">
        <a href="https://www.twitter.com/" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        </li>
        <li className="profile__right__list__item">
        <a href="https://www.instagram.com/"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        </li>
      </ul>
    </div>
  </div>
)

export default Profile
