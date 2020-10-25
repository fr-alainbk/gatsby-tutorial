import React from "react"
import Layout from "../components/layout"
import styles from "../components/blog.module.css"

const blog = () => {
  return (
    <Layout>
      <div className={styles.blog}>
        <h1 className={styles.blog__header}>This is our blog page.</h1>
        <h2>ISJISJID</h2>
      </div>
    </Layout>
  )
}

export default blog
