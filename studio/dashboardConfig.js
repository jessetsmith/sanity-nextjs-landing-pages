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
                  buildHookId: '5ee80d8e0fb2a402622d7e95',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-wytmccof',
                  apiId: '0c6ef6db-f480-4c8d-831e-78bd179b549d'
                },
                {
                  buildHookId: '5ee80d8eee13870197b951eb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u7kj1sz5',
                  apiId: 'f5666a52-e79a-4114-b4db-171cc4e691e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jessetsmith/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u7kj1sz5.netlify.app', category: 'apps'}
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
