import React, { useState } from 'react';
import { getCharacterInfo } from '../api/amiiboApi';

const SearchCharacter = ({ setSearchedCharacter }) => {
  const [characterName, setCharacterName] = useState('');

  const handleSearch = async () => {
    try {
      const data = await getCharacterInfo(characterName);
      setSearchedCharacter(data);
    } catch (error) {
      console.error('Error fetching character info:', error);
    }
  };

  return (
    <div className="mb-4">
      <div className="input-group">
        <input
          type="text"
          value={characterName}
          onChange={(e) => setCharacterName(e.target.value)}
          placeholder="Search character"
          className="form-control"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchCharacter;
