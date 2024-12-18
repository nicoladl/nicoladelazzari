export const state = () => ({
  menu: [
    {
      label: '1985<br />2024',
      slug: 'intro'
    }
  ],
  about: 'I am an Engineering Manager <s>Senior Frontend Engineer</s> with Certified Scrum Master and Product Owner certifications. Specializing in leading high-performing teams and driving successful product development. Based in <s>Venice</s><span style="padding-right: 15px"><s>Lugano</s></span>Zurich, I focus on delivering scalable, user-centric frontend software solutions by combining strategic leadership, agile methodologies, and modern web technologies.<br/><br/>',
  quote: '"It never gets easier, you just go faster"',
  quoteSource: 'Greg LeMond',
  experience: [
    {
      label: 'Palisis AG',
      dateStart: '2025',
      dateEnd: 'now',
      role: 'Engineering Manager',
      location: 'Zurich'
    },
    {
      label: 'Health Info Net AG',
      dateStart: '2024',
      dateEnd: '2025',
      role: 'Technical Manager',
      location: 'Zurich'
    },
    {
      label: 'Arcual AG',
      dateStart: '2022',
      dateEnd: '2024',
      role: 'Frontend Team Leader',
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
  contacts: [
    {
      label: 'Github',
      href: 'https://github.com/nicoladl'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nicoladelazzari/'
    }
  ]
})
