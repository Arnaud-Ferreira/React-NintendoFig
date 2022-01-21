import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../styles/logo.png';

import './style.scss';

export default function Header({ gameNumber, inputValue, onChangeInputValue }) {
    return(
        <header className="header">
            <img classname="logo" src={logo} alt="Yoshi Logo" />
            <h1 className="header__title">
                Nintendo - Figurines
            </h1>
            <p className="header__game-number">{gameNumber}{gameNumber > 1 ? 'jeux' : 'jeu'}</p>
            <input
             className="header__input"
             type="text"
             placeholder="Search a figurine..."
             value={inputValue}
             onChange={(event) => onChangeInputValue(event.target.value)}
             />
        </header>
    );
}

Header.propTypes = {
    gameNumber: PropTypes.number.isRequired,
    inputValue: PropTypes.string.isRequired,
    onChangeInputValue: PropTypes.func.isRequired,
};