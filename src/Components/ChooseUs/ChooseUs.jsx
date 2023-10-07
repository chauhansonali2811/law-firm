import React from 'react';
import styles from './ChooseUs.module.css';
import Card from '../Card/Card';

const ChooseUs = () => {
  return (
    <div className={styles.container}>
        <h1>Why choose us?</h1>
        <div className={styles.cardWrapper}>
        <Card percentage="98"/>
        <Card percentage='98'/>
        <Card percentage='98'/>
        </div>
        
    </div>
  )
}

export default ChooseUs