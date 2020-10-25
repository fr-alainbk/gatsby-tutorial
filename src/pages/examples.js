import React from "react"
import Header from "../examples/Header"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      siteMetadata: { author },
    },
  } = data
  return (
    <div>
      <h1>Hello from examples page</h1>
      <Header />
      <h4>Author: {author}</h4>
    </div>
  )
}

export const data = graphql`
  query MyQuery {
    site(siteMetadata: {}) {
      id
      siteMetadata {
        author
        data
        description
        title
        person {
          age
          name
        }
      }
    }
  }
`

export default examples
