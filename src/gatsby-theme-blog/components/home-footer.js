import React, { Fragment } from "react"
import { Styled, css } from "theme-ui"
import { Link } from "gatsby"

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3,
    })}
  >
    © {new Date().getFullYear()}, Find me on{" "}
    {socialLinks
      ? socialLinks.map((platform, i, arr) => (
          <Fragment key={platform.url}>
            <Styled.a
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {platform.name}
            </Styled.a>
            {arr.length - 1 !== i && (
              <Fragment>
                {` `}&bull;{` `}
              </Fragment>
            )}
          </Fragment>
        ))
      : null}
    {` `}&bull;{` `}
    {` `}&bull;{` `}
    <Styled.a as={Link} to="/legal">
      legal notice
    </Styled.a>
  </footer>
)
export default Footer
