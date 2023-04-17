import React from "react"

export default function Post({ canonical, data, siteMetadata }) {
  if(!data) return null
  
  return (
    <script type="application/ld+json">
      {JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonical
          },
          "headline": data.seo.title || siteMetadata.title,
          "description": data.seo.metaDesc || siteMetadata.description,
          "image": {
            "@type": "ImageObject",
            "url": data.seo.opengraphImage?.localFile?.publicURL || siteMetadata.image,
          },
          "datePublished": data.dateGtm,
          "dateModified": data.modifiedGmt,
          "author": {
            "@type": "Person",
            "name": siteMetadata.title
          },
          "publisher": {
            "@type": "Organization",
            "name": siteMetadata.title,
            "logo": {
              "@type": "ImageObject",
              "url": `${siteMetadata.siteUrl}/logo.png`, // logo from static folder
              "width": 60,
              "height": 60
            }
          },
          "articleBody": data.content
        }
      )}
    </script>
  )
}