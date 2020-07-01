import React from "react"
import Layout from "gatsby-theme-blog/src/components/layout"
import CookieConsent from "react-cookie-consent"

export default props => (
  <Layout {...props}>
    {props.children}
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics"
    >
      This site uses cookies in combination with google analytics, so I can
      learn how you find the blog and which content you like best.
    </CookieConsent>
  </Layout>
)
