import styles from '../css/header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <section className={styles.logo}>
            <div>
                <img src="/logo-black.png" alt="Ikari Collection" className={styles.logoImage} />
            </div>
            <div>
                Aishiteru Shop
            </div>
        </section>
        <nav>
            nav section
        </nav>
    </header>
  )
}

export default Header