import React, { createContext, useState } from "react";
import { Character } from "../apiTypes";
import { BoxId, CharactesContextProps } from "./types.d";

export const CharactersContext = createContext<CharactesContextProps>({
  characterOne: null,
  characterTwo: null,
  setCharacterOne: () => {},
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
  };

  const setters = {
    setCharacterOne,
    setCharacterTwo,
    resetCharacterSelection,
  };

  return (
    <CharactersContext.Provider value={{ ...values, ...setters }}>
      {children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
