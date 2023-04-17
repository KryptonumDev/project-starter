import { graphql } from "gatsby";
import React from "react";

export default function PostPage({ data }) {
  return (
    <main>
      Post page
    </main>
  )
}

export { Head } from '../components/organisms/seo'

export const query = graphql`
  query post($id: String!) {
    wpPost(id: {eq: $id}) {
      ...PostSEO
    }
  }
`