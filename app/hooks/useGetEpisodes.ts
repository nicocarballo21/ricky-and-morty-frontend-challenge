import { useQuery } from "@tanstack/react-query";
import { Episode } from "../apiTypes";
import { useGetEpisodesParams } from "./types.d";
import { useContext } from "react";
import { CharactersContext } from "../context/charactersContext";
import { BoxId } from "../context/types.d";

const getEpisodes = async (episodesURLS: string[]) => {
  try {
    if (!episodesURLS) return [] as Episode[];
    const calls = episodesURLS?.map(url => fetch(url));
    const responses = await Promise.all(calls);
    const error = responses.find(res => !res.ok);

    if (error) {
      console.log(error);

      throw new Error("Error on get episodes.");
    }

    const data: Episode[] = await Promise.all(responses.map(res => res.json()));

    return data;
  } catch (error) {
    console.log(error, "catch");

    throw new Error("Error on get episodes.");
  }
};

const { CHARACTER_ONE } = BoxId;
const useGetEpisodes = ({ episodesURLS, boxId }: useGetEpisodesParams) => {
  const { characterOne, characterTwo } = useContext(CharactersContext);

  const characterID =
    boxId === CHARACTER_ONE ? characterOne?.id : characterTwo?.id;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["episodes", characterID, boxId],
    queryFn: () => getEpisodes(episodesURLS),
    refetchOnWindowFocus: false,
  });

  const typedError = error as Error;

  return {
    episodes: data || [],
    isLoading,
    isError,
    error: typedError?.message,
  };
};

export default useGetEpisodes;
