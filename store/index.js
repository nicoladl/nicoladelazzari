export const state = () => ({
  bio: 'Nicola is a frontend developer specialized in javascript development currently working in Lugano. Enthusiastic about all Vue.js ecosystem.',
  menu: [
    {
      label: '2017-<br />-2011',
      slug: 'intro'
    },
    {
      label: 'About',
      slug: 'about'
    },
    {
      label: 'Bio',
      slug: 'cv'
    },
    {
      label: 'Works',
      slug: 'works'
    },
    {
      label: 'Awards',
      slug: 'awards'
    },
    {
      label: 'Contact',
      slug: 'contact'
    }
  ],
  works: {
    years: [
      {
        label: '2019',
        content: [
          {
            label: 'Durisch+Nolli',
            image: './images/durischnolli.jpg',
            href: 'https://durischnolli.ch'
          }
        ]
      },
      {
        label: '2018',
        content: [
          {
            label: 'Mistretta Coiffure',
            image: './images/mistretta.jpg',
            href: 'https://mistretta.ch'
          },
          {
            label: 'Axure Broker',
            image: './images/axure.jpg',
            href: 'https://axure-broker.ch'
          },
          {
            label: 'Charly Zenger',
            image: './images/charlyzenger.jpg',
            href: 'https://charlyzenger.ch'
          }
        ]
      },
      {
        label: '2017',
        content: [
          {
            label: 'H-Farm',
            image: './images/hfarm.jpg',
            href: 'https://h-farm.com'
          }
        ]
      }
    ]
  },
  experiences: [
    {
      label: 'Octoplus Group',
      dateStart: 'Present -',
      dateEnd: '2017'
    },
    {
      label: 'AKQA',
      dateStart: '2017 -',
      dateEnd: '2011'
    }
  ],
  awards: [
    {
      title: 'CSS Design Awards',
      lenght: 2,
      type: 'WOTD'
    },
    {
      title: 'Awwwards',
      lenght: 2,
      type: 'Mobile Excellence'
    }
  ],
  contacts: [
    {
      label: 'Github',
      href: 'https://github.com/nicoladl'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nicoladelazzari/'
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/nicoladelazzari'
    }
  ]
})
