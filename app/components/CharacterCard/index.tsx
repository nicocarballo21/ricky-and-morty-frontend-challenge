"use client";
import { CARD_SIZE } from "@/app/constants";
import { Character } from "@/app/types";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import NextImage from "next/image";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard = ({ character }: CharacterCardProps) => {
  const { name, image, species, status } = character;

  return (
    <Card
      className={`min-w-[150px] lg:min-w-[${CARD_SIZE}px] min-h-[${CARD_SIZE}px]`}
      shadow="sm"
      isPressable
      onPress={() => console.log("item pressed")}
    >
      <CardBody className="p-0 overflow-hidden">
        <NextImage
          fill
          alt={name}
          src={image}
          className="object-cover hover:scale-110 transition-all min-w-[100px] min-h-[100px]"
        />
      </CardBody>
      <CardFooter className="text-small justify-between">
        <b>{species}</b>
        <p className="text-sm text-gray-400">{status}</p>
      </CardFooter>
    </Card>
  );
};

export default CharacterCard;
