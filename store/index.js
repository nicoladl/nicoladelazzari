export const state = () => ({
  menu: [
    {
      label: '1985<br />2023',
      slug: 'intro'
    },
    {
      label: 'About',
      slug: 'about'
    },
    {
      label: 'Experience',
      slug: 'experience'
    },
    {
      label: 'Projects',
      slug: 'projects'
    },
    {
      label: 'Technology',
      slug: 'technology'
    },
    {
      label: 'Contact',
      slug: 'contact'
    }
  ],
  about: 'Nicola is a Senior Frontend Engineer with a focus on Javascript. Currently working in <s>Venice</s><span style="padding-right: 15px"></span><s>Lugano</s> Zurich. Enthusiastic about all React.js and Vue.js ecosystem.<br/><br/>',
  quote: '"It never gets easier, you just go faster"',
  quoteSource: 'Greg LeMond',
  experience: [
    {
      label: 'Arcual',
      dateStart: '2022',
      dateEnd: 'now',
      role: 'Senior Frontend Engineer',
      location: 'Zurich'
    },
    {
      label: 'Move Digital AG',
      dateEnd: '2022',
      dateStart: '2019',
      role: 'Senior Frontend Engineer / Team Leader',
      location: 'Zurich'
    },
    {
      label: 'Octoplus Group',
      dateEnd: '2019',
      dateStart: '2017',
      role: 'Senior Frontend Developer',
      location: 'Lugano'
    },
    {
      label: 'AKQA',
      dateEnd: '2017',
      dateStart: '2011',
      role: 'Frontend Developer',
      location: 'Venice'
    }
  ],
  projects: {
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
  technologies: {
    technology: [['React', 'Hooks', 'Redux', 'Redux Toolkit'], ['VueJs', 'Nuxt', 'VueX'], ['GraphQL', 'Rest API', 'GSAP', 'Storybook']]
  },
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
