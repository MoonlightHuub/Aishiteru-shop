import styles from '../css/Hero.module.css'
import CarouselImg from './Carousel'
import socialMedias from '../data/socialMedias.json'

function Hero() {
  return (
    <section>
      <CarouselImg />
      <section className={styles.presentationContainer}>
        <h2 className={styles.title}>
          Aishiteru Shop
        </h2>
        <p className={styles.text}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque sit suscipit corrupti ipsa ipsam id mollitia recusandae nemo. Quam ab tempore sint officiis expedita tempora quod dicta vitae itaque. Recusandae.
        </p>
        <section className={styles.socialMediasContainer}>
          {socialMedias.map((e) => (
            <div className={styles.socialCard}>
              <img src={e.img} alt={e.name} className={styles.image} />
              <h3 className={styles.name}>
                {e.name}
              </h3>
            </div>
          ))}
        </section>
      </section>
    </section>
  )
}

export default Hero