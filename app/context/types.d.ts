import { Episode } from "../apiTypes";

export interface CharactesContextProps {
  characterOne: Character | null;
  characterTwo: Character | null;
  sharedEpisodes: Episode[];
  setCharacterOne: (character: Character) => void;
  setCharacterTwo: (character: Character) => void;
  resetCharacterSelection: (boxId: BoxId) => void;
  setSharedEpisodes: (episodes: Episode[]) => void;
}

export enum BoxId {
  CHARACTER_ONE,
  CHARACTER_TWO,
}
