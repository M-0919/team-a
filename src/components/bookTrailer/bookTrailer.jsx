import React from "react"
import "./bookTrailer.scss"
import youtube from "../../images/youtube_placeholder.png"

const BookTrailer = () => (
  <div className="bookTrailer">
    <div className="trailer">
      {/* <iframe
        title="videoPlaceholder"
        width="720"
        height="405"
        src="https://www.youtube.com/embed/y2Ky3Wo37AY?controls=0"
        frameBorder="0"
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
      <img alt="" src={youtube} />
    </div>
  </div>
)

export default BookTrailer
