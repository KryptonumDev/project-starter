import { graphql } from "gatsby";

export const wpPageSeoFragment = graphql`
    fragment SEO on WpPage {
        seo {
            title
            metaDesc
            opengraphSiteName
            opengraphImage {
                localFile {
                    publicURL
                }
            }
        }
    }
`

export const wpPostSeoFragment = graphql`
    fragment PostSEO on WpPost {
        dateGmt
        modifiedGmt
        seo {
            title
            metaDesc
            opengraphSiteName
            opengraphImage {
                localFile {
                    publicURL
                }
            }
        }
    }
`

export const wpCategorySeoFragment = graphql`
    fragment CategorySEO on WpCategory {
        seo {
            title
            metaDesc
            opengraphSiteName
            opengraphImage {
                localFile {
                    publicURL
                }
            }
        }
    }
`