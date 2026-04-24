import { about, quote, quoteSource } from '../data/siteData'

function Bio() {
  return (
    <section className="section row end-xs" data-id="1">
      <div className="col-xs-12 col-md-9">
        <div className="text js-split-text" dangerouslySetInnerHTML={{ __html: about }} />
      </div>
      <div className="col-xs-12 col-md-9">
        <div className="text text--light text--italic js-split-text" dangerouslySetInnerHTML={{ __html: quote }} />
      </div>
      <div className="col-xs-12 col-md-9">
        <div className="text text--light js-split-text" dangerouslySetInnerHTML={{ __html: quoteSource }} />
      </div>
    </section>
  )
}

export default Bio
