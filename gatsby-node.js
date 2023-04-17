const path = require(`path`)

exports.createPages = async ({
  graphql,
  actions: { createPage }
}) => {
  const createPageInstance = async (TEMPLATE_FILE_NAME, PAGE_ID) => {
    const { data: { wpPage: pageData } } = await graphql(`
      query getPageData ($id: String!){
          wpPage(id: {eq: $id})  {
              title
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
        breadcrumbs: [{
          name: pageData.title,
          url: pageData.uri
        }]
      },
      ownerNodeId: pageData.id // Upgrade Gatsby cloud page render logic
    })
  }

  // ADD NEW PAGES HERE

  createPageInstance('homepage.jsx', 'cG9zdDo1')

  // Create blog

  const { data: { wpPage: blogPage, allWpCategory: categories, allWpPost: posts } } = await graphql(`
      query getPageData {
          wpPage(id: {eq: "cG9zdDo2Mg=="})  {
              title
              slug
              uri
              id
          }
          allWpCategory {
            nodes {
              name
              slug
              uri
              id
            }
          }
          allWpPost {
            nodes {
              title
              slug
              uri
              id
            }
          }
      }
    `)

  // Create blog page
  createPage({
    path: blogPage.uri,
    component: path.resolve(`src/templates/blog.jsx`),
    context: {
      id: blogPage.id,
      slug: blogPage.slug,
      uri: blogPage.uri,
      urlBasis: blogPage.uri,
      archiveUrl: blogPage.uri,
      page: 1,
      breadcrumbs: [
        {
          name: blogPage.title,
          url: blogPage.uri
        }
      ]
    },
    ownerNodeId: blogPage.id
  })

  // Create blog page pagination
  if (posts.nodes.length > 9) {
    for (let i = 0; i < Math.ceil(category.count / 9); i++) {
      let page = i + 2
      createPage({
        path: blogPage.uri + page + '/',
        component: path.resolve(`src/templates/blog.jsx`),
        context: {
          id: blogPage.id,
          slug: blogPage.slug,
          uri: blogPage.uri + page + '/',
          urlBasis: blogPage.uri,
          archiveUrl: blogPage.uri,
          page: page,
          breadcrumbs: [
            {
              name: blogPage.title,
              url: blogPage.uri
            }
          ]
        },
        ownerNodeId: blogPage.id + page
      })
    }
  }

  // Create blog categories pages
  categories.nodes.forEach(category => {
    createPage({
      path: category.uri,
      component: path.resolve(`src/templates/blog-category.jsx`),
      context: {
        id: category.id,
        blogArchiveId: blogPage.id,
        slug: category.slug,
        uri: category.uri,
        urlBasis: category.uri,
        archiveUrl: blogPage.uri,
        page: 1,
        breadcrumbs: [
          {
            name: blogPage.title,
            url: blogPage.uri
          },
          {
            name: category.title,
            url: category.uri
          }
        ]
      },
      ownerNodeId: category.id
    })

    //  Create pagination
    if (category.count > 9) {
      for (let i = 0; i < Math.ceil(category.count / 9); i++) {
        let page = i + 2
        createPage({
          path: category.uri + page + '/',
          component: path.resolve(`src/templates/blog-category.jsx`),
          context: {
            id: category.id,
            blogArchiveId: blogPage.id,
            slug: category.slug,
            uri: category.uri + page + '/',
            urlBasis: category.uri,
            archiveUrl: blogPage.uri,
            page: page,
            breadcrumbs: [
              {
                name: blogPage.title,
                url: blogPage.uri
              },
              {
                name: category.name,
                url: category.uri
              }
            ]
          },
          ownerNodeId: category.id + page
        })
      }
    }
  });



  // Create blog posts pages
  posts.nodes.forEach(post => {
    createPage({
      path: post.uri,
      component: path.resolve(`src/templates/post.jsx`),
      context: {
        id: post.id,
        slug: post.slug,
        uri: post.uri,
        breadcrumbs: [
          {
            name: blogPage.title,
            url: blogPage.uri
          },
          {
            name: post.title,
            url: post.uri
          }
        ]
      },
      ownerNodeId: post.id
    })
  });
}
