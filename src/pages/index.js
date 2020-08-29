import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Image from "../components/image"

export default function Home({ data }) {
  return (
    <div>
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "images/opening.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
