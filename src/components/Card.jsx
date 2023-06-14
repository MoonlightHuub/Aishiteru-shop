import styles from '../css/card.module.css'
import placeholder from '../mocks/placeholder.json'

function Card() {
  return (
    <div className={styles.cardContainer}>
      {placeholder.map((e) => (
        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={e.image} alt={e.title} className={styles.image} />
          </div>
          <div>
            <h3>
              {e.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card