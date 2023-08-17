"use client";
import CharacterCard from "../CharacterCard";
import { CharactersGridProps } from "./types.d";

const CharactersGrid = ({ boxId, characters }: CharactersGridProps) => {
  return (
    <div
      className={`
      grid rounded-lg justify-center max-h-[200px]
      place-items-center bg-emerald-500 
      grid-cols-[repeat(auto-fill,min(120px))]
      md:grid-cols-[repeat(auto-fill,min(150px))]
      lg:grid-cols-[repeat(auto-fill,min(200px))]
      gap-4 p-4
      w-full aspect-square
    `}
    >
      {characters?.map(character => (
        <CharacterCard boxId={boxId} key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharactersGrid;
