export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e8e21e95ca10c7ef2c90026',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rx49pd2d',
                  apiId: '2ecd3245-0b05-40a4-a66b-b6f4463fb55c'
                },
                {
                  buildHookId: '5e8e21e9285c40394999a5e7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-yesns53g',
                  apiId: 'ab5d750d-5558-4e04-be71-fa5c86690725'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/UK090483/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-yesns53g.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
