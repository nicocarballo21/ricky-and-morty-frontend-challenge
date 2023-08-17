export interface CharactesContextProps {
  characterOne: Character | null;
  characterTwo: Character | null;
  setCharacterOne: (character: Character) => void;
  setCharacterTwo: (character: Character) => void;
  resetCharacterSelection: (boxId: BoxId) => void;
}

export enum BoxId {
  CHARACTER_ONE,
  CHARACTER_TWO,
}
