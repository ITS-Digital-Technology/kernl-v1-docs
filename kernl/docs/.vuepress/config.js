module.exports = {
  title: 'kernl(docs)',
  base: '/kernl/docs/.vuepress/dist/',
  themeConfig: {
    nav: [
      {
        text: 'Documentation',
        items: [
          { text: 'WordPress Theme: kernl(wp)', link: '/wp/' },
          { text: 'Frontend Framework: kernl(ui)', link: '/ui/' },
          { text: 'Wordpress Core: kernl(bedrock)', link: '/bedrock/' }
        ]
      },
      {
        text: 'Concepts and Principles',
        link: '/principles/'
      }
    ],
    sidebar: {
      '/principles/': [
        ['', 'Principles Overview'],
        'accessibility',
        'content-strategy',
        'information-architecture',
        'imagery',
        'layout',
        'typography',
        'analytics',
        'security',
      ],

      '/wp/': [
        ['', 'kernl(wp) Overview'],
        {
          title: 'Features',
          collapsable: true,
          children: [
          ['features/search', 'Advanced Search'],
          'features/accessibility',
          'features/authentication',
          'features/brand',
          'features/events',
          'features/import',
          'features/knowledgebase',
          'features/modules',
          'features/profiles',
          'features/shortcodes',
          ]
        },
        {
          title: 'Layouts',
          collapsable: true,
          children: [
            'layouts/overview',
            'layouts/customize',
            'layouts/content',
          ]
        },
        {
          title: 'Views',
          collapsable: true,
          children: [
            'views/homepage',
            'views/pages',
            'views/posts',
            'views/archives',
            'views/404',
            'views/search',
            'views/articles',
            'views/events',
          ]
        },
      ],

      '/ui/': [
        ['', 'kernl(ui) Overview'],
        ['baseline/', 'Baseline Overview'],
        {
          title: 'Components',
          collapsable: true,
          children: [
            ['components/', 'Components Overview'],
            'components/accordions',
            'components/badges',
            'components/breadcrumb',
            'components/buttons',
            'components/cards',
            'components/gallery',
            'components/icon',
            'components/list-groups',
            'components/loader',
            'components/mastheads',
            'components/media-objects',
            'components/modals',
            'components/navs',
            'components/share',
          ]
        },
        {
          title: 'Structure',
          collapsable: true,
          children: [
            ['structure/', 'Structure Overview'],
            'structure/columns',
            'structure/footer',
            'structure/form',
            'structure/sections',
          ]
        },
        {
          title: 'Utilities',
          collapsable: true,
          children: [
            ['utilities/', 'Utilities Overview'],
            'utilities/backgrounds',
            'utilities/borders',
            'utilities/flexbox',
            'utilities/interactivity',
            'utilities/layout',
            'utilities/sizing',
            'utilities/spacing',
            'utilities/typography',
            'utilities/misc',
          ]
        }
      ],

      '/bedrock/': [
        ['', 'kernl(bedrock) Overview'],
      ]
    }
  }
}
