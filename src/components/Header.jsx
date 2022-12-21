import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className="flex justify-center bg-[#ee1515] w-full">
        <img className="w-96 max-w-2xl" src={logo} alt="pokemon logo" />
      </header>
      <div className="flex justify-center items-center h-5 bg-neutral-700">
        <div className="flex justify-center items-center h-14 w-14 border-4 border-neutral-700 rounded-[50%] bg-zinc-100">
          <div className="flex justify-center items-center h-10 w-10 border-4 border-neutral-700 rounded-[50%] bg-zinc-100"></div>
        </div>
      </div>
    </>
  );
};

export default Header;
