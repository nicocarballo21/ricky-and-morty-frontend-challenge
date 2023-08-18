import { Episode } from "../apiTypes";

const useGetSharedEpisodes = (
  characterOneEpisodes: Episode[],
  characterTwoEpisodes: Episode[],
) => {
  const episodes = characterOneEpisodes.filter(episode =>
    characterTwoEpisodes.some(
      characterTwoEpisode => characterTwoEpisode.id === episode.id,
    ),
  );

  return episodes;
};

export default useGetSharedEpisodes;
