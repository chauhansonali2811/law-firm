import React from 'react';
import giftImage from '../../assets/gift-img.png';
import styles from './Card.module.css';

function Card({percentage}) {
  return (
    <div className={styles.container}>
        <img src={giftImage} alt="giftImage" width={60} height={60}/>
        <h3>{percentage}% Success Rate</h3>
        <p>Amet minim mollit non deserunt ullamco est
            sit aliqua dolor do amet sint. Velit officia
            consequatduis enim velit mollit Exer.</p>
        <button className={styles.button}>Read More</button>
    </div>
  )
}

export default Card