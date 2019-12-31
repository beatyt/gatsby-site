import React from "react"
export default ({ data }) => (
  <div>
    <h1>About {data.site.siteMetadata.tile}</h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
