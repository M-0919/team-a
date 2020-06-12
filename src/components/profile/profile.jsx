import React from "react"
import "./profile.scss"
const Profile = () => (
  <div className="profile">
    <div className="profile__left">
      <h2 className="profile__left__title">LARRY LINTON</h2>
      <p className="profile__left__discription">
        am sed ex rutrum, consectetur dui eu, rhoncus dui. Vivamus in tincidunt
        libero. Integer enim massa, mollis auctor lacus non, dapibus rhoncus
        lorem. Donec accumsan ligula quis purus maximus, eget fringilla libero
        fermentum.
      </p>
      <p className="profile__left_address">
        816 Granville St, Vancouver, BC V6Z 1K3 <br />
        larrylinton@sample.com (+1) <br />
        778-123-1234
      </p>
    </div>
    <div className="profile__right">
      <div className="profile__right__image"></div>
      <ul className="profile__right__list">
        <li className="profile__right__list__item"></li>
        <li className="profile__right__list__item"></li>
        <li className="profile__right__list__item"></li>
      </ul>
    </div>
  </div>
)

export default Profile
