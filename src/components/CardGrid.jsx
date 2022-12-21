import Card from "./Card";

const CardGrid = ({ pokemons, handleCardClick }) => {
  const pokemonCards = pokemons.map((pokemon) => (
    <Card
      key={pokemon.id}
      name={pokemon.name}
      img={pokemon.image}
      handleCardClick={handleCardClick}
    />
  ));

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-3 gap-8">
      {pokemonCards}
    </div>
  );
};

export default CardGrid;
