export const state = () => ({
  bio:
    'Nicola is a Senior Frontend Engineer specialized in Javascript development. Currently working in <strike>Venice</strike><span style="padding-right: 15px"></span><strike>Lugano</strike> Zurich. Enthusiastic about all React.js and Vue.js ecosystem.<br /><br /><span style="font-style: italic">It never gets easier, you just go faster</span><br /><span style="font-family: HelveticaNowDisplay-Th, Arial">Greg LeMond</span>',
  menu: [
    {
      label: '1985<br />2021',
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
      }
    ]
  },
  experiences: [
    {
      label: 'Move Digital AG',
      dateStart: 'Present -',
      dateEnd: '2019'
    },
    {
      label: 'Octoplus Group',
      dateStart: '2019 -',
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
      type: 'Website Of The Day'
    },
    {
      title: 'Awwwards',
      lenght: 3,
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
