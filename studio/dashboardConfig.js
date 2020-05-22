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
                  buildHookId: '5ec7dbe157f7e89bb5d6521c',
                  title: 'Sanity Studio',
                  name: 'walks-today-studio',
                  apiId: 'bd471621-7f52-4792-b07c-a467f534c647'
                },
                {
                  buildHookId: '5ec7dc3d8203aa377862f13a',
                  title: 'Website',
                  name: 'walks-today-web',
                  apiId: 'fb829975-26c2-4bc5-856a-e3b7f5fad53b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nickeblewis/walks-today',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://walks-today-web.netlify.app', category: 'apps'}
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
