"use client";
import { Button, Pagination, Skeleton } from "@nextui-org/react";
import useGetCharacters from "./hooks/useGetCharacters";
import { useContext } from "react";
import { CharactersContext } from "./context/charactersContext";
import ErrorBadge from "./components/ErrorBagde";
import Characters from "./components/Characters";

const Home = () => {
  const { isFetching, error, isError } = useGetCharacters();

  const { characterOne, characterTwo } = useContext(CharactersContext);

  return (
    <section className="flex flex-col h-full gap-10 p-5">
      <Skeleton isLoaded={!isFetching} className="rounded-xl">
        {isError ? <ErrorBadge error={error} /> : <Characters />}
      </Skeleton>

      {characterOne && characterTwo ? (
        <div className="grid grid-cols-3 h-[700px] gap-5 bg-[yellow]">
          <div className="bg-slate-600">1</div>
          <div className="bg-red-400">1</div>
          <div className="bg-lime-950">1</div>
        </div>
      ) : null}
    </section>
  );
};

export default Home;
