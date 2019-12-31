import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MyEditor from "../components/editor"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <MyEditor />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
