import * as React from "react"
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  return (
    <main>
      Home page
    </main>
  )
}

export { Head } from '../components/organisms/seo'

export const query = graphql`
  query homepage($id: String!) {
    wpPage(id: {eq: $id}) {
      ...SEO
    }
  }
`