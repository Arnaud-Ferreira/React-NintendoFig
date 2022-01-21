// Imports
import React from 'react';
import Header from '../Header';
import Games from '../Games';
import Characters from '../Characters';

// Importing fake datas to test
import gamesData from '../../data/games';
import charactersData from '../../data/character-full';

import './style.scss';


export default class App extends React.PureComponent {
  state = {
    games: gamesData,
    characters: charactersData,
    selectedGame: '',
    search: '',
  }

  // function who's gonna modify the selectedGame state
  setSelectedGame = (value) => {
    this.setState({
      selectedGame: value,
    });
  }

  setSearch = (value) => {
    this.setState({
      search: value,
    });
  }

  getFilteredGames = () => {
    const { games, search } = this.state;

    if (!search){
      return games;
    }
    return games.filter((game) => game.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
  }
    render () {
      const {characters, selectedGame, search } = this.state;
      const filteredGames = this.getFilteredGames();
      let filteredCharacters = characters;

      if (selectedGame) {
        filteredCharacters = characters.filter((character) => character.game === selectedGame)
      }


      return (
        <div className="app">
          <div className="app__container">
            <Header
              gameNumber={filteredCharacters.length}
              inputValue={search}
              onChangeInputValue={this.setSearch}/>
            <Games
              gamestitle={filteredGames}
              selected={selectedGame}
              onClickGame={this.setSelectedGame}
            />
            <Characters characters={filteredCharacters} />
          </div>
        </div>
      );
    }
}

