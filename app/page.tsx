"use client";
import { Button, Pagination, Skeleton } from "@nextui-org/react";
import useGetCharacters from "./hooks/useGetCharacters";
import { useContext } from "react";
import { CharactersContext } from "./context/charactersContext";
import ErrorBadge from "./components/ErrorBagde";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import { BoxId } from "./context/types.d";

const Home = () => {
  const { isLoading, error, isError } = useGetCharacters();
  const { characterOne, characterTwo } = useContext(CharactersContext);

  return (
    <section className="flex flex-col h-full gap-10 p-5">
      <Skeleton isLoaded={!isLoading} className="rounded-xl">
        {isError ? <ErrorBadge error={error} /> : <Characters />}
      </Skeleton>

      {/* {!characterOne && !characterTwo ? ( */}
      <div className="grid grid-cols-1 lg:grid-cols-3 h-fit gap-5 p-4 bg-emerald-500 rounded-xl">
        <Episodes boxId={BoxId.CHARACTER_ONE} />
        <div className="bg-red-400">1</div>
        <Episodes boxId={BoxId.CHARACTER_TWO} />
      </div>
      {/* ) : null} */}
    </section>
  );
};

export default Home;
