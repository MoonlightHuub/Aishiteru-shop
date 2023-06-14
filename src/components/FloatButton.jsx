import styles from '../css/floatButton.module.css'

function FloatButton() {
  return (
    <div className={styles.floatContainer}>
        <a href="#">
            <img src="/whats-btn.png" alt="floatButtonWhattsapp" className={styles.floatButton} />
        </a>
    </div>
  )
}

export default FloatButton