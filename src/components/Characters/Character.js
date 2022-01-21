import React from 'react';
import PropTypes from 'prop-types';

export default function Character({ image, name }) {
    return (
        <li className="character">
         <img src={image} alt={name} />
         <p className="character__game">{name}</p>
        </li>
    );
}

Character.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};