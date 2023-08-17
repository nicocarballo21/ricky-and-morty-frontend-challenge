import { CharactersContext } from "@/app/context/charactersContext";
import { BoxId } from "@/app/context/types.d";
import { Button } from "@nextui-org/react";
import { useContext } from "react";

interface CharactersGridHeaderProps {
  boxId: BoxId;
}

const CharactersGridHeader = ({ boxId }: CharactersGridHeaderProps) => {
  const title = boxId === BoxId.CHARACTER_ONE ? "Character #1" : "Character #2";
  const { resetCharacterSelection } = useContext(CharactersContext);

  const onReset = () => {
    resetCharacterSelection(boxId);
  };

  return (
    <div
      className={`flex items-center gap-3 mb-3 ${
        boxId === BoxId.CHARACTER_TWO && "justify-end"
      }`}
    >
      <h1 className="text-2xl">{`${title}`}</h1>
      <Button onClick={onReset} variant="bordered">{`Reset ${title}`}</Button>
    </div>
  );
};

export default CharactersGridHeader;
