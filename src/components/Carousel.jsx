import carouselJson from "../data/carousel.json";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../css/carousel.module.css";

function CarouselImg() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className={styles.carouselContainer}>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {carouselJson.map((e) => (
            <Carousel.Item>
            <img
              className={styles.img}
              src={e.img}
              alt={e.name}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default CarouselImg;
