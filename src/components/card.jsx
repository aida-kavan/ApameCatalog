import styles from "../components.style/card.module.scss";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useScroll, motion, useTransform } from "framer-motion";

const Card = ({ title, link, description, src, url, color, i }) => {
  const container = useRef(null);

  // Use useScroll and pass the ref to track
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <>
      <div className={styles.cardContainer} ref={container}>
        <Link to={link}>
          <motion.div
            className={styles.card}
            style={{ backgroundColor: color, top: `calc(-5vh + ${i * 10}px)` }}
          >
            <h1>{title}</h1>
            <div className={styles.cardContent}>
              <motion.div className={styles.imgContainer} style={{ imgScale }}>
                <img src={src} alt={title} className={styles.img} />
              </motion.div>
              <p>{description}</p>
              <a href={url}>برای مشاهده کلیک کنید!</a>
            </div>
          </motion.div>
        </Link>
      </div>
    </>
  );
};

export default Card;
