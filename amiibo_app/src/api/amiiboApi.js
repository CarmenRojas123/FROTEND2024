const apiUrl = 'https://amiiboapi.com/api/amiibo';

export const getCharacterInfo = async (characterName) => {
  const response = await fetch(`${apiUrl}/?character=${characterName}`);
  const data = await response.json();
  if (data && data.amiibo && data.amiibo.length > 0) {
    return data.amiibo[0];
  } else {
    throw new Error('Character not found');
  }
};

export const getRandomCharacter = async () => {
  const characters = ['Mario', 'Link', 'Zelda', 'Samus', 'Pikachu', 'Mewtwo', 'Yoshi', 'Kirby'];
  const randomCharacterName = characters[Math.floor(Math.random() * characters.length)];
  return await getCharacterInfo(randomCharacterName);
};
