import React, { createContext, useState } from "react";
import { Character, Episode } from "../apiTypes";
import { BoxId, CharactesContextProps } from "./types.d";

export const CharactersContext = createContext<CharactesContextProps>({
  characterOne: null,
  characterTwo: null,
  sharedEpisodes: [],
  setCharacterOne: () => {},
  setSharedEpisodes: () => {},
  setCharacterTwo: () => {},
  resetCharacterSelection: () => {},
});

const CharactersContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [characterOne, setCharacterOne] = useState<Character | null>(null);
  const [characterTwo, setCharacterTwo] = useState<Character | null>(null);
  const [sharedEpisodes, setSharedEpisodes] = useState<Episode[]>([]);

  const resetCharacterSelection = (boxID: BoxId) => {
    if (boxID === BoxId.CHARACTER_ONE) {
      setCharacterOne(null);
    } else {
      setCharacterTwo(null);
    }
  };

  const values = {
    characterOne,
    characterTwo,
    sharedEpisodes,
  };

  const setters = {
    setCharacterOne,
    setCharacterTwo,
    setSharedEpisodes,
    resetCharacterSelection,
  };

  return (
    <CharactersContext.Provider value={{ ...values, ...setters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
