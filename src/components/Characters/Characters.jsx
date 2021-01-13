import React, { useState, useEffect } from 'react';
import Card from '../Card/Card';
import styles from './Characters.module.css';

function Characters() {

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);
  return (
    <div className={styles.Characters}>
      {characters.map((character) => {
        return <Card name={character.name} image={character.image}></Card>
      })}
    </div>
  )
}


export default Characters;
