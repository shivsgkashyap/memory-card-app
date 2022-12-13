const Card = ({ name, img, handleCardClick }) => {
  console.log(name);
  return (
    <div
      className="flex flex-col rounded-2xl bg-zinc-100 shadow-lg cursor-pointer w-36 transition-transform duration-300 hover:scale-105"
      onClick={handleCardClick}
    >
      <img className="p-2" src={img} alt={name} />
      <p className="p-2 font-semibold text-xl text-center">{name}</p>
    </div>
  );
};

export default Card;
