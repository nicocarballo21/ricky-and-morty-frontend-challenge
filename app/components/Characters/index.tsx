import { Button, Divider, Pagination } from "@nextui-org/react";
import CharactersGrid from "../CharactersGrid";
import CharactersGridHeader from "../CharactersGridHeader";
import { BoxId } from "@/app/context/types.d";
import useGetCharacters from "@/app/hooks/useGetCharacters";
import { useMemo } from "react";

const { CHARACTER_ONE, CHARACTER_TWO } = BoxId;

const Characters = () => {
  const { characters, setPage, nextPage, prevPage, currentPageNumber } =
    useGetCharacters();

  const Controls = useMemo(() => {
    return (
      <div className="flex flex-col md:flex-row gap-3 px-3 py-2 justify-center items-center">
        <Button onClick={prevPage}>Previus</Button>
        <Pagination
          color="success"
          page={currentPageNumber}
          onChange={page => setPage(page)}
          total={41}
        />
        <Button onClick={nextPage}>Next</Button>
      </div>
    );
  }, [currentPageNumber, nextPage, prevPage, setPage]);

  return (
    <div className="h-full bg-zinc-800">
      {Controls}
      <Divider />
      <div className="grid grid-cols-2 h-full rounded-lg w-full gap-5 p-3">
        <div className="h-full">
          <CharactersGridHeader boxId={CHARACTER_ONE} />
          <CharactersGrid
            characters={characters.slice(0, 10)}
            boxId={CHARACTER_ONE}
          />
        </div>

        <div className="h-full">
          <CharactersGridHeader boxId={CHARACTER_TWO} />
          <CharactersGrid
            characters={characters.slice(10, 20)}
            boxId={CHARACTER_TWO}
          />
        </div>
      </div>
    </div>
  );
};

export default Characters;
