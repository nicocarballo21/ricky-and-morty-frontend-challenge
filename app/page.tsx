"use client";
import { Button, Pagination, Skeleton } from "@nextui-org/react";
import CharactersGrid from "./components/CharactersGrid";
import { BoxId } from "./context/types.d";
import CharactersGridHeader from "./components/CharactersGridHeader";
import useGetCharacters from "./hooks/useGetCharacters";
import { useContext } from "react";
import { CharactersContext } from "./context/charactersContext";

const { CHARACTER_ONE, CHARACTER_TWO } = BoxId;
const Home = () => {
  const {
    characters,
    isFetching,
    error,
    isError,
    nextPage,
    prevPage,
    currentPageNumber,
    setPage,
  } = useGetCharacters();

  const { characterOne, characterTwo } = useContext(CharactersContext);

  return (
    <section className="flex flex-col h-full gap-10 p-5">
      <div className="flex gap-3 items-center">
        <Pagination
          onChange={page => setPage(page)}
          total={41}
          initialPage={currentPageNumber}
        />
        <Button onClick={nextPage}>Next</Button>
        <Button onClick={prevPage}>Prev</Button>
      </div>

      <Skeleton isLoaded={!isFetching} className="rounded-xl">
        {isError ? (
          <div className="bg-danger-400 w-full h-20 flex px-5 items-center rounded-xl">
            <p className="text-white">Something went wrong! {error}</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 rounded-lg w-full gap-5 p-3">
            <div>
              <CharactersGridHeader boxId={CHARACTER_ONE} />
              <CharactersGrid
                characters={characters.slice(0, 10)}
                boxId={CHARACTER_ONE}
              />
            </div>

            <div>
              <CharactersGridHeader boxId={CHARACTER_TWO} />
              <CharactersGrid
                characters={characters.slice(10, 20)}
                boxId={CHARACTER_TWO}
              />
            </div>
          </div>
        )}
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
