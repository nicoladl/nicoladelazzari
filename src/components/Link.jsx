import Arrow from './Arrow'

function LinkItem({ item }) {
  return (
    <a href={item.href} className="text arrow" target="_blank" rel="noreferrer">
      <span className="reveal">
        <span className="item">
          <span className="arrow__label">{item.label}</span>
        </span>
      </span>
      <span className="arrow__icon">
        <Arrow />
      </span>
    </a>
  )
}

export default LinkItem
