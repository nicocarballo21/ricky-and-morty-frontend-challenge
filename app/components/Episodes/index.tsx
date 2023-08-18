import { CharactersContext } from "@/app/context/charactersContext";
import { BoxId } from "@/app/context/types.d";
import useGetEpisodes from "@/app/hooks/useGetEpisodes";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";
import { useContext } from "react";

interface EpisodesProps {
  boxId: BoxId;
}

const Episodes = ({ boxId }: EpisodesProps) => {
  const { characterOne, characterTwo } = useContext(CharactersContext);

  const episodesURLS: string[] =
    boxId === BoxId.CHARACTER_ONE
      ? characterOne?.episode
      : characterTwo?.episode;

  const { episodes, isError, isLoading } = useGetEpisodes(episodesURLS, boxId);

  const title = boxId === BoxId.CHARACTER_ONE ? "Character #1" : "Character #2";
  return (
    <div className="bg-emerald-600 rounded-xl  p-3">
      <div className="h-10">
        <p className="text-2xl">{`${title} - Only Episodies`}</p>
      </div>
      <Divider />
      <div className="h-[400px] overflow-y-auto">
        <ul className="h-full flex flex-col gap-3 p-3 w-full">
          {episodes?.map(item => (
            <li key={item.id}>
              <Card fullWidth>
                <CardHeader className="flex gap-3 w-full">
                  <p className="text-lg">Episode: {item.episode}</p>
                </CardHeader>
                <Divider />
                <CardBody className="px-3 py-2">
                  <p>Episode Name: {item.name}</p>
                  <p>Air Date: {item.air_date}</p>
                </CardBody>
                <Divider />
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Episodes;
