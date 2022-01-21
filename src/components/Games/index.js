import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Games({ gamestitle, onClickGame, selected }) {
    return(
        <ul className="games">
            {gamestitle.map((title) => ( 
             <li
               className={`games__title ${selected === title ? 'games__title--selected' : ''}`}
               key={title}
               onClick={() => onClickGame(title)} 
             >
              {title}
             </li>
              ))}
        </ul>
    );
}

Games.propTypes = {
    gamestitle: PropTypes.array.isRequired,
    onClickGame: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
}

