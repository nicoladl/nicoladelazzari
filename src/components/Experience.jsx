import { experiences } from '../data/siteData'

function Experience() {
  return (
    <section className="section" data-id="2">
      <ul className="list">
        {experiences.map((experience, index) => (
          <li key={index} className="row">
            <div className="col-xs-3 no-padding-right nomobile">
              <div className="text text--right text--light">
                <span className="reveal">
                  <span className="item">{experience.dateEnd}</span>
                </span>
                <span className="reveal">
                  <span className="item">{experience.dateStart}</span>
                </span>
              </div>
            </div>
            <div className="col-xs-12 col-md-9">
              <div className="text reveal">
                <span className="item">{experience.label}</span>
              </div>
              <div className="text reveal meta">
                <span className="item text--light text--side">
                  <strong>{experience.role}</strong> - {experience.location}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
