import * as React from "react"
import { graphql } from "gatsby"
import BlogArchive from '../components/templates/blog-archive'

export default function BlogPage({ pageContext, data: { allWpPost, allWpCategory } }) {
  return (
    <main>
      Blog Category Page
      <BlogArchive context={pageContext} posts={allWpPost.nodes} categories={allWpCategory.nodes} />
    </main>
  )
}

export { Head } from '../components/organisms/seo'

export const query = graphql`
  query category($perPage: Int!, $skip: Int!, $id: String!, $slug: String!) {
    wpCategory(id: {eq: $id}) {
      ...CategorySEO
    }
    allWpPost(limit: $perPage, skip: $skip, sort: {_createdAt: DESC}, filter: {categories: {nodes: {elemMatch: {slug: {eq: $slug}}}}}) {
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