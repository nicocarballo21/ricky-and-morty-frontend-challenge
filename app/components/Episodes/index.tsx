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
  Skeleton,
} from "@nextui-org/react";
import { useContext } from "react";
import ErrorBadge from "../ErrorBagde";

interface EpisodesProps {
  boxId: BoxId;
}

const { CHARACTER_ONE, CHARACTER_TWO } = BoxId;

const Episodes = ({ boxId }: EpisodesProps) => {
  const { characterOne, characterTwo } = useContext(CharactersContext);

  const episodesURLS: string[] =
    boxId === CHARACTER_ONE ? characterOne?.episode : characterTwo?.episode;

  const characterID =
    boxId === CHARACTER_ONE ? characterOne?.id : characterTwo?.id;

  const title = boxId === CHARACTER_ONE ? "Character #1" : "Character #2";

  const { episodes, isError, isLoading, error } = useGetEpisodes({
    episodesURLS,
    boxId,
    characterID,
  });

  const ListContent = () => {
    if (isLoading) {
      return <Skeleton className="rounded-xl h-full" isLoaded={!isLoading} />;
    }

    if (isError) {
      return <ErrorBadge error={error} />;
    }

    return (
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
    );
  };

  return (
    <div className="bg-emerald-600 rounded-x p-3">
      <div className="h-10">
        <p className="text-2xl">{`${title} - Only Episodies`}</p>
      </div>
      <Divider />
      <div className="h-[400px] overflow-y-auto">
        <ListContent />
      </div>
    </div>
  );
};

export default Episodes;
