import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/pic-3.jpg"
import Images from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "pic-2.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "pic-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Imgs = () => {
  const data = useStaticQuery(getImages)

  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%" />
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Images fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Images fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Imgs
