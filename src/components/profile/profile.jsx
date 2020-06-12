import React from "react"
import "./profile.scss"
const Profile = () => (
  <div className="profile">
    <div className="profile__left">
      <h2 className="profile__left__title">LARRY LINTON</h2>
      <p className="profile__left__discription">
        Now ten years in, I live a life with Parkinson's that is more rewarding and meaningful. 
        It’s been a difficult road, but I have learned to manage the symptoms through diet, exercise and living mindfully. 
        Looking to share my insights and practice.
      </p>
      <p className="profile__left__address">
        Toronto, Canada <br />
        larry@livewellwithpd.com  <br />
        (+1)(416)710-6546
      </p>
    </div>
    <div className="profile__right">
      <div className="profile__right__image">

      </div>
      <ul className="profile__right__list">
        <li className="profile__right__list__item"></li>
        <li className="profile__right__list__item"></li>
        <li className="profile__right__list__item"></li>
      </ul>
    </div>
  </div>
)

export default Profile
