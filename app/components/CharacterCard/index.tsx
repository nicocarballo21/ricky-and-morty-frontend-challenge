"use client";
import { CharactersContext } from "@/app/context/charactersContext";
import { Character } from "@/app/apiTypes";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import NextImage from "next/image";
import { useContext } from "react";
import { BoxId } from "@/app/context/types.d";

interface CharacterCardProps {
  character: Character;
  boxId: BoxId;
}

const CharacterCard = ({ character, boxId }: CharacterCardProps) => {
  const { name, image, species, status } = character;
  const { setCharacterOne, setCharacterTwo, characterOne, characterTwo } =
    useContext(CharactersContext);

  const onSelectCharacter = () => {
    if (boxId === BoxId.CHARACTER_ONE) {
      setCharacterOne(character);
    } else {
      setCharacterTwo(character);
    }
  };

  const isSelected =
    characterOne?.id === character.id || characterTwo?.id === character.id;

  const showOpacity =
    !isSelected &&
    ((boxId === BoxId.CHARACTER_ONE && characterOne) ||
      (boxId === BoxId.CHARACTER_TWO && characterTwo));

  return (
    <Card
      className={`
      min-w-full sm:min-w-[200px] min-h-[200px] 
      ${isSelected && "scale-110 xl:scale-125 z-20 opacity-100"}
      ${showOpacity && "scale-100 z-0 opacity-40"}
      `}
      shadow="sm"
      isPressable
      onPress={onSelectCharacter}
    >
      <CardBody className="p-0 overflow-hidden">
        <NextImage
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt={name}
          src={image}
          priority
          className="object-cover hover:scale-110 transition-all min-w-[100px] min-h-[100px]"
        />
      </CardBody>
      <CardFooter className="text-small p-1 flex flex-col sm:flex-row sm:p-3 justify-between">
        <b>{species}</b>
        <p className="text-sm text-gray-400">{status}</p>
      </CardFooter>
    </Card>
  );
};

export default CharacterCard;
