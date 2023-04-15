import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export function Head({ data, pageContext }) {
  const seo = data.wpPage?.seo || data.wpPost?.seo
  const { site: { siteMetadata } } = useStaticQuery(graphql`
  query {
      site {
          siteMetadata {
              title
              description
              image
              siteUrl
          }
      }
  }
`)
  const canonical = siteMetadata.siteUrl + pageContext.uri

  return (
    <>
      <html lang="pl" />
      <meta charSet="utf-8" />
      <meta property="og:site_name" content={seo.opengraphSiteName || siteMetadata.title} />
      <meta name="robots" content="noindex" />  { /* remove on production  */}

      {pageContext?.alternates?.map(el => ( // Only for multi-language sites
        <link rel="alternate" href={el.uri} hreflang={canonical + el.hreflang} />
      ))}

      <link rel="canonical" href={canonical} />
      <meta property="og:url" content={canonical} />

      <title>{seo.title || siteMetadata.title}</title>
      <meta property="twitter:title" content={seo.title || siteMetadata.title} />
      <meta property="og:title" content={seo.title || siteMetadata.title} />

      <meta name="description" content={seo.metaDesc || siteMetadata.description} />
      <meta property="twitter:description" content={seo.metaDesc || siteMetadata.description} />
      <meta property="og:description" content={seo.metaDesc || siteMetadata.description} />

      <meta property="og:image" content={
        seo?.opengraphImage?.localFile?.publicURL
          ? siteMetadata.siteUrl + seo.opengraphImage.localFile.publicURL
          : siteMetadata.image}
      />
      <meta property="twitter:image" content={
        seo?.opengraphImage?.localFile?.publicURL
          ? siteMetadata.siteUrl + seo.opengraphImage.localFile.publicURL
          : siteMetadata.image}
      />
    </>
  )
}