import React from "react"
import "./bookCover.scss"
import BookCoverImg from "../../images/BookCoverMockup.png"

const BookCover = () => (
  <div className="bookCover">
    <div className="bookCover__left">
      <div className="bookCover__left__content">
        <img
          className="bookCover__left__content__image"
          src={BookCoverImg}
          alt=""
        />
      </div>
    </div>
    <div className="bookCover__right">
      {/* <h2 className="bookCover__right__title">Book cover</h2> */}
      <p className="bookCover__right__content">
        <span style={{ fontWeight: 700 }}>
          SHAKEN, NOT STIRRED: Living with Parkinson’s Disease
        </span>{" "}
        is the story of a reluctant hero navigating the trauma of a
        life-altering diagnosis. After going through a long-term, debilitating
        stage of grief, Linton emerges to find life worth living and enjoying
        again.
        {/* Read how simple changes Linton made to his daily life have improved his
        physical and mental health, his happiness, his life, and the lives of
        his family members, who stood bravely by him as he waged his battle. Despite the
        seriousness of the subject, Linton shares inspir- ing stories and
        important information about Parkinson’s Disease in a surprisingly
        entertaining and engaging manner. */}
      </p>
    </div>
  </div>
)

export default BookCover
