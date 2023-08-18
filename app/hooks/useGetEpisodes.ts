import { useQuery } from "@tanstack/react-query";
import { Episode } from "../apiTypes";
import { BoxId } from "../context/types";

const getEpisodes = async (episodesURLS: string[]) => {
  try {
    const calls = episodesURLS.map(url => fetch(url));
    const responses = await Promise.all(calls);
    const error = responses.find(res => !res.ok);

    if (error) {
      throw new Error("Error on get episodes");
    }

    const data: Episode[] = await Promise.all(responses.map(res => res.json()));

    return data;
  } catch (error) {
    throw new Error("Error on get episodes");
  }
};

interface useGetEpisodesParams {
  episodesURLS: string[];
  boxId: BoxId;
  characterID: string;
}

const useGetEpisodes = ({
  episodesURLS,
  boxId,
  characterID,
}: useGetEpisodesParams) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["episodes", characterID, boxId],
    queryFn: () => getEpisodes(episodesURLS),
    refetchOnWindowFocus: false,
  });

  const typedError = error as Error;

  return { episodes: data, isLoading, isError, error: typedError?.message };
};

export default useGetEpisodes;
