import * as React from "react"
import { graphql } from "gatsby"
import BlogArchive from '../components/templates/blog-archive'

export default function BlogPage({ pageContext, data: { allWpPost, allWpCategory } }) {
  return (
    <main>
      Blog Page
      <BlogArchive context={pageContext} posts={allWpPost.nodes} categories={allWpCategory.nodes} />
    </main>
  )
}

export { Head } from '../components/organisms/seo'

export const query = graphql`
  query blog($id: String!) {
    wpPage(id: {eq: $id}) {
      ...SEO
    }
    allWpPost {
      nodes {
        uri
        title
      }
    }
    allWpCategory {
      nodes {
        uri
        name
      }
    }
  }
`