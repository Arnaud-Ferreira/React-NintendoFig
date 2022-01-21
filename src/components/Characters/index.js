import React from 'react';
import PropTypes from 'prop-types';

import Character from './Character';

import './style.scss';

export default function Characters({ characters }) {
    return (
        <ul className="characters">
            {characters.map((character) => (
                <Character
                  key={character.id}
                  {...character}
                />
            ))}
        </ul>
    );
}

Characters.propTypes = {
    characters: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
    })).isRequired,
  };