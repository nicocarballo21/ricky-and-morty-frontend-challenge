import { useQuery } from "react-query";
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

const useGetEpisodes = (episodesURLS: string[], boxId: BoxId) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["episodes", boxId],
    queryFn: () => getEpisodes(episodesURLS),

    refetchOnWindowFocus: false,
  });

  return { episodes: data, isLoading, isError, error };
};

export default useGetEpisodes;
