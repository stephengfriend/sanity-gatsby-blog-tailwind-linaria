export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0bb4232ba984baf386ce89',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-test-studio-7usxbbga',
                  apiId: 'f72dba46-febf-4d77-baa0-ef853c51015a'
                },
                {
                  buildHookId: '5e0bb424bb3406573f4e0c84',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-test-web-w9wbuyev',
                  apiId: '7bf3ddbb-42c7-400e-92e8-cecaf610c3bb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stephengfriend/sanity-gatsby-blog-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-test-web-w9wbuyev.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
