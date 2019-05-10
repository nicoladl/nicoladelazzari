export const state = () => ({
  bio: 'Nicola is a frontend developer specialized in javascript development. He works for the most important swiss agencies.',
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
      label: 'CV',
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
            image: '/images/durischnolli.jpg',
            url: 'https://durischnolli.ch'
          }
        ]
      },
      {
        label: '2018',
        content: [
          {
            label: 'Mistretta Coiffure',
            image: '/images/mistretta.jpg',
            url: 'https://mistretta.ch'
          },
          {
            label: 'Axure Broker',
            image: '/images/axure.jpg',
            url: 'https://axure-broker.ch'
          },
          {
            label: 'Charly Zenger',
            image: '/images/charlyzenger.jpg',
            url: 'https://charlyzenger.ch'
          }
        ]
      },
      {
        label: '2017',
        content: [
          {
            label: 'H-Farm',
            image: '/images/hfarm.jpg',
            url: 'https://h-farm.com'
          }
        ]
      }
    ]
  }
})
