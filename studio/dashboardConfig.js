export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5ebbdfa5b90924356b3d2e76',
                  title: 'Sanity Studio',
                  name: 'nick-lewis-studio',
                  apiId: '34159c43-8b2e-4424-8a63-9342bf9dd04c'
                },
                {
                  buildHookId: '5ebbdfa57a239b28484cd5a4',
                  title: 'Website',
                  name: 'nick-lewis-web',
                  apiId: '24b8e437-041f-4ca4-b886-760b151c1496'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-uo9uftjp.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
