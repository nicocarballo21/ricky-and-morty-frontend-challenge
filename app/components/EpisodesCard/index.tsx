import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Skeleton,
} from "@nextui-org/react";
import ErrorBadge from "../ErrorBagde";
import { Episode } from "@/app/apiTypes";

interface EpisodeCardProps {
  title: string;
  episodes: Episode[];
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const EpisodeCard = ({
  isLoading,
  episodes,
  title,
  isError,
  error,
}: EpisodeCardProps) => {
  const ListContent = () => {
    if (isLoading) {
      return <Skeleton className="rounded-xl h-full" isLoaded={!isLoading} />;
    }

    if (isError) {
      return <ErrorBadge error={error} />;
    }

    return (
      <ul className="h-full flex flex-col gap-3 py-3 px-2 w-full">
        {episodes?.map(item => (
          <li key={item.id}>
            <Card fullWidth>
              <CardHeader className="flex gap-3 w-full">
                <p className="text-sm md:text-base lg:text-xl">
                  Episode: {item.episode}
                </p>
              </CardHeader>
              <Divider />
              <CardBody className="px-3 py-2 gap-2 text-sm sm:text-base">
                <div className="flex flex-col xl:flex-row">
                  <b className="pr-2">Episode Name:</b>
                  <p className="pl-4 sm:p-0">{item.name}</p>
                </div>

                <div className="flex flex-col xl:flex-row">
                  <b className="pr-2">Air Date:</b>
                  <p className="pl-4 sm:p-0">{item.air_date}</p>
                </div>
              </CardBody>
              <Divider />
            </Card>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="bg-emerald-600 rounded-xl shadow-xl p-3">
      <div className="pb-2">
        <p className="text-sm md:text-lg xl:text-xl">{title}</p>
      </div>
      <Divider />
      <div className="h-[400px] overflow-y-auto">
        <ListContent />
      </div>
    </div>
  );
};

export default EpisodeCard;
