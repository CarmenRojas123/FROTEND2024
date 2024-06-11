import React, { useState, useEffect } from 'react';
import SearchCharacter from './components/SearchCharacter';
import CharacterCard from './components/CharacterCard';
import { getRandomCharacter } from './api/amiiboApi';
import './assets/CSS/index.css';

const App = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [searchedCharacter, setSearchedCharacter] = useState(null);

  useEffect(() => {
    const fetchRandomCharacter = async () => {
      const randomCharacter = await getRandomCharacter();
      setRandomCharacter(randomCharacter);
    };
    fetchRandomCharacter();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Amiibo Characters App</h1>
      <SearchCharacter setSearchedCharacter={setSearchedCharacter} />
      <div className="row">
        {randomCharacter && (
          <div className="col-md-6">
            <h4 className="text-center ">Random Character</h4>
            <CharacterCard character={randomCharacter} />
          </div>
        )}
        {searchedCharacter && (
          <div className="col-md-6">
            <h4 className="text-center">Searched Character</h4>
            <CharacterCard character={searchedCharacter} />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
