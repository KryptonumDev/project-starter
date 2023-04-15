import React from 'react';
import Layout from "./src/layout"
// import CorinthiaRegular from "./src/resources/fonts/Corinthia-Regular.woff2"

export const wrapPageElement = ({ props, element }) => {
  return <Layout {...props}>{element}</Layout>
}

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "pl" })
  setHeadComponents([
    <link
      rel="preload"
      // href={CorinthiaRegular}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />
  ])
}