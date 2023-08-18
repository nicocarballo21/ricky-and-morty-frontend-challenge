import { CharactersContext } from "@/app/context/charactersContext";
import { useContext } from "react";
import { BoxId } from "@/app/context/types.d";
import useGetEpisodes from "@/app/hooks/useGetEpisodes";
import EpisodeCard from "../EpisodesCard";
import useGetSharedEpisodes from "@/app/hooks/useGetSharesEpisodes";

const { CHARACTER_ONE, CHARACTER_TWO } = BoxId;

const Episodes = () => {
  const { characterOne, characterTwo } = useContext(CharactersContext);

  const {
    episodes: characterOneEpisodes,
    isError: isErrorOne,
    error: errorOne,
    isLoading: isLoadingOne,
  } = useGetEpisodes({
    episodesURLS: characterOne?.episode,
    boxId: CHARACTER_ONE,
  });

  const {
    episodes: characterTwoEpisodes,
    isLoading: isLoadingTwo,
    isError: isErrorTwo,
    error: errorTwo,
  } = useGetEpisodes({
    episodesURLS: characterTwo?.episode,
    boxId: CHARACTER_TWO,
  });

  const sharedEpisodes = useGetSharedEpisodes(
    characterOneEpisodes,
    characterTwoEpisodes,
  );

  return (
    <>
      {characterOne && characterTwo ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 h-fit gap-5 p-4 bg-zinc-800 rounded-xl">
          <EpisodeCard
            title="Character #1 - Only Episodes"
            episodes={characterOneEpisodes}
            isError={isErrorOne}
            error={errorOne}
            isLoading={isLoadingOne}
          />
          <EpisodeCard
            title="Shared Episodes"
            episodes={sharedEpisodes}
            isError={isErrorOne && isErrorTwo}
            error="Error finding shared episodes."
            isLoading={isLoadingOne && isLoadingTwo}
          />
          <EpisodeCard
            title="Character #2 - Only Episodes"
            episodes={characterTwoEpisodes}
            isError={isErrorTwo}
            error={errorTwo}
            isLoading={isLoadingTwo}
          />
        </div>
      ) : null}
    </>
  );
};

export default Episodes;
