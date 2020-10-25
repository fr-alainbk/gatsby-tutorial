import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"
import { Link } from "gatsby"
import styles from "../components/products.module.css"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data
  console.log("Products", products)

  return (
    <Layout>
      <section className={styles.products}>
        {products.map(product => (
          <article key={product.id}>
            <Image fluid={product.image.fluid} alt={product.title} />
            <h3>
              {product.title} <span>$ {product.price}</span>
            </h3>
            <Link to={`/products/${product.slug}`}>more details...</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid_noBase64
          }
        }
      }
    }
  }
`

export default ComponentName
