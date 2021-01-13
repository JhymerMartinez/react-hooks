import React from 'react';
import styles from './Card.module.css';

function Card({image, name}) {

  return (
    <div className={styles.Card}>
      <img src={image} alt=""/>
      <h3>{name}</h3>
    </div>
  )
}


export default Card;
