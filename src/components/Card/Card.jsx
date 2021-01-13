import React from 'react';
import styles from './Card.module.css';

function Card({character, onClickButton}) {

  return (
    <div className={styles.Card}>
      {/* <img src={character.image} alt=""/> */}
      <h3>{character.name}</h3>
      <button onClick={() => onClickButton(character)} type="button">
        Add to favorite
      </button>
    </div>
  )
}


export default Card;
