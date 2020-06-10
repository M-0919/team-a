import React from "react"
// import { Link } from "gatsby"

/* ------------------------------- COMPONENTS ------------------------------- */
import BookTrailer from "../components/bookTrailer/bookTrailer"
import LinksToBuy from "../components/linksToBuy/linksToBuy"
import BookCover from "../components/bookCover/bookCover"
import ExceptFromFacebook from "../components/excerptFromFacebook/excerptFromFacebook"
import Profile from "../components/profile/profile"

import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <BookTrailer />
    <LinksToBuy />
    <BookCover />
    <ExceptFromFacebook />
    <Profile />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br /> */}
  </Layout>
)

export default IndexPage
