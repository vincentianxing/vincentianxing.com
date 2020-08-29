import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Image() {
  const data = useStaticQuery(
    graphql`
      query image($path: String) {
        file(relativePath: { eq: $path }) {
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )
  return (
    <div>
      <Img fixed={data.file.childImageSharp.fixed} />
    </div>
  )
}
