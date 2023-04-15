import React from "react"

const createBreadcrumbs = (siteMetadata, breadCrumbs) => {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": siteMetadata.title,
      "item": siteMetadata.siteUrl
    }
  ]

  breadCrumbs.forEach((el, index) => {
    items.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": el.name,
      "item": el.url
    })
  });

  return items
}

export default function BreadCrumbs({ siteMetadata, pageContext }) {
  if (!pageContext.breadcrumbs) return null
  
  const breadCrumbsItems = createBreadcrumbs(siteMetadata, pageContext.breadcrumbs)
  return (
    <>
      {breadCrumbsItems.length > 1 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": breadCrumbsItems
          })}
        </script>
      )}
    </>
  )
}