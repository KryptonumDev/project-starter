import * as React from "react"
import { graphql } from "gatsby"

export default function Index({ data }) {
  return (
    <main>
    </main>
  )
}

export { Header } from '../components/organisms/seo'

export const query = graphql`
  query homepage($id: String!) {
    wpPage(id: {eq: $id}) {
      ...SEO
    }
  }
`