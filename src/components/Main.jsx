import CardGrid from "./CardGrid";
import Score from "./Score";

const Main = () => {
  return (
    <main className="flex flex-col justify-center align-center p-14 gap-14 mb-12">
      <Score />
      <CardGrid />
    </main>
  );
};

export default Main;
