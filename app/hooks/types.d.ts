export interface useGetEpisodesParams {
  episodesURLS: string[];
  boxId: BoxId;
}

export interface GetCharactersParams {
  nextCursor?: string;
  prevCursor?: string;
  characters: Character[];
}
