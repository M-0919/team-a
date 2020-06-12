import React from "react"
import "./excerptFromFacebook.scss"
import Larry2 from "../../images/Larry_relax.jpg"
import FbIcon from "../../images/fb_icon.png"

const excerptFromFacebook = () => (
  <div className="excerpt">
    <div className="card">
      <div className="card__title">
        <img className="card__title__img" src={Larry2} alt="" />
        <img className="card__title__img2" src={FbIcon} alt="" />
        <a
          className="card__title__txt"
          href="https://www.facebook.com/lintonwellness/"
          target="_blank"
          rel="noreferrer"
        >
          Shaken, not Stirred: Living With Parkinson's Disease
        </a>
      </div>
      <p className="card__content">
        May 8, 2012 is an important date on my calendar. It doesn’t commemorate
        a date of birth. That date is not a wedding anniversary either. It’s the
        date of my formal diagnosis with Parkinson’s Disease. A day that
        traumatized me to the core in 2012, but a date that, in 2020, I forgot
        to commemorate.
        <br />A diagnosis is always a defining moment in one’s life. Life lived
        to that point is usually bucketed into a “before” and an “after” and a
        negative change to a quality in life enjoyed up to that point in time.
        In my case however, in many respects, it has proved to be the opposite.
        Without any element of control over the diagnosis with Parkinson’s
        Disease, I have, in more recent years, focused on what I can control. I
        have focused on the...
        {/* physicality of my condition. I have focused on my
        thought patterns, and I have focused on forging deeper relationships
        with my family and friends. */}
        <a
          className="card__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/lintonwellness/posts/158786448988160"
        >
          Read more
        </a>
      </p>
    </div>
    <div className="card">
      <div className="card__title">
        <img className="card__title__img" src={Larry2} alt="" />
        <img className="card__title__img2" src={FbIcon} alt="" />
        <a
          className="card__title__txt"
          href="https://www.facebook.com/lintonwellness/"
          target="_blank"
          rel="noreferrer"
        >
          Shaken, not Stirred: Living With Parkinson's Disease
        </a>
      </div>
      <p className="card__content">
        As I reflected on the completion of my manuscript on my life with
        Parkinson’s disease, I asked myself a question whether, given the
        choice, I would have chosen to have it. Who would want to be diagnosed
        with a chronic, neurodegenerative illness, for which there is no cure?
        Who would want to experience a continuous tremor in one hand, and a
        dropped foot making walking difficult? Who would want to experience
        anxiety, depression and insomnia? Who would want to have cognitive
        impairment making communication difficult at times? Over the past ten
        years I have experienced many of these symptoms so I do feel that I have
        enough authority to have asked that question. And, as strange as it may
        seem, I came to the conclusion that I ...
        {/*  would have chosen to have it. Let
        me explain why. */}
        <a
          className="card__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/lintonwellness/posts/150212259845579"
        >
          Read more
        </a>
      </p>
    </div>
  </div>
)

export default excerptFromFacebook
