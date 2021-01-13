import React, { useState, useEffect, useReducer } from 'react';
import Card from '../Card/Card';
import styles from './Characters.module.css';

const initialState = {
  favorites: []
}

const favotireReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      }
    default:
      return state;
  }
}

function Characters() {

  const [characters, setCharacters] = useState([]);
  const [favorites, dispatch] = useReducer(favotireReducer, initialState)
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, []);

  const handleClick = favorite => {
    dispatch({
      type: 'ADD_TO_FAVORITE',
      payload: favorite
    });
  }

  return (

    <div className={styles.Characters}>
      <div>
        {favorites.favorites.map(favorite => (
          <li key={favorite.id}>
            { favorite.name }
          </li>
        ))}
      </div>
      {characters.map((character) => (
        <Card key={character.id}
          character={character}
          onClickButton={handleClick}>
        </Card>
      ))}
    </div>
  )
}


export default Characters;
