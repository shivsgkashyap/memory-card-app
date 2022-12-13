import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import Score from "./Score";

const Main = () => {
  const POKEMONS_AMOUNT = 12;
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setPokemons(shuffleArray(await fetchPokemons(POKEMONS_AMOUNT)));
    };

    loadCards();
  }, []);

  const fetchPokemons = async (amount) => {
    const pokemons = [];

    for (let i = 1; i <= amount; i++) {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(pokemonUrl);
      const pokemon = await response.json();
      const id = pokemon.id;
      const name = capitalizeFirstLetter(pokemon.name);
      const image = pokemon.sprites.front_default;
      pokemons.push({ id, name, image });
    }

    return pokemons;
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const shuffleArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  return (
    <main className="flex flex-col items-center p-14 gap-14 mb-12 font-quicksand">
      <Score currentScore={currentScore} />
      <CardGrid />
    </main>
  );
};

export default Main;
