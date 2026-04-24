import { contacts } from '../data/siteData'
import LinkItem from './Link'

function Contact() {
  return (
    <section className="section row end-xs" data-id="5">
      <ul className="list col-xs-12 col-md-9">
        <li>
          {contacts.map((contact, index) => (
            <div key={index} className="social">
              <LinkItem item={contact} />
            </div>
          ))}
        </li>
      </ul>
    </section>
  )
}

export default Contact
