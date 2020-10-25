import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const {
    site: {
      info: {
        author,
        title,
        person: { name },
      },
    },
  } = useStaticQuery(graphql`
    {
      site(siteMetadata: {}) {
        id
        info: siteMetadata {
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
  `)
  return (
    <>
      <h2>Title : {title}</h2>
      <h2>Author : {author}</h2>
      <h2>Name : {name}</h2>
    </>
  )
  //   return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default Header
