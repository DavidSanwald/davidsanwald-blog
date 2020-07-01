import React from "react"
import { Styled } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

/**
 * Change the content to add your own bio
 */

export default function Bio() {
  const data = useStaticQuery(bioQuery)
  const {
    site: {
      siteMetadata: { author, social },
    },
    avatar,
  } = data
  const twitter = social.filter(platform => platform.name === "twitter")[0]
  return (
    <>
      Personal blog by <Styled.a href={twitter.url}>{author}</Styled.a>.
      <br />
      Stuff that matters to me.
    </>
  )
}
const bioQuery = graphql`
  query BioContentQuery {
    site {
      siteMetadata {
        author
        social {
          url
          name
        }
      }
    }
    avatar: file(absolutePath: { regex: "/avatar.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        fixed(width: 48, height: 48) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
