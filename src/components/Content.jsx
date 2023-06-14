import styles from '../css/content.module.css'
import Card from '../components/Card'

function Content() {
  return (
    <div className={styles.contentContainer}>
      <h2>
        Content
      </h2>
      <Card />
    </div>
  )
}

export default Content