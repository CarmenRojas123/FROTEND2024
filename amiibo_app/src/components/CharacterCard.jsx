import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <div className="card">
      <img src={character.image} className="card-img-top" alt={character.name} />
      <div className="card-body">
        <h5 className="card-title">{character.name}</h5>
        <p className="card-text">Series: {character.amiiboSeries}</p>
        <p className="card-text">Game Series: {character.gameSeries}</p>
        <p className="card-text">Release Date (NA): {character.release.na}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
