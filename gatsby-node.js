const path = require(`path`)

exports.createPages = async ({
  graphql,
  actions: { createPage }
}) => {
  const createPageInstance = async (TEMPLATE_FILE_NAME, PAGE_ID) => {
    const { data: { wpPage: pageData } } = await graphql(`
      query getPageData ($id: String!){
          wpPage(id: {eq: $id})  {
              slug
              id
              uri
          }
      }
    `, { id: PAGE_ID })

    createPage({
      path: pageData.uri,
      component: path.resolve(`src/templates/${TEMPLATE_FILE_NAME}`),
      context: {
        id: pageData.id, // Gatsby GraphQL page id - not the same as WP page id
        slug: pageData.slug, // Page slug from wordpress example : 'o-tworzeniu-wiki'
        uri: pageData.uri, // Page url from wordpress example : '/blog/post/o-tworzeniu-wiki/'
      },
      ownerNodeId: pageData.id // Upgrade Gatsby cloud page render logic
    })
  }

  createPageInstance('homepage.jsx', 'cG9zdDo1')
}
