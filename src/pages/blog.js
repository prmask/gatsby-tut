import React from "react"
import Layout from "../components/Layout"
import styles from "../components/blog.module.css"
const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is blog</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          facilis aperiam, commodi ea voluptas unde magni blanditiis esse
          sapiente distinctio deleniti voluptate, eaque, totam consequatur!
        </p>
      </div>
    </Layout>
  )
}

export default blog
