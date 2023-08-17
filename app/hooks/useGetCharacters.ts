import { BASE_URL_API } from "../constants";
import { useInfiniteQuery, useQuery } from "react-query";
import { ApiResponse, Character } from "../apiTypes";
import { useState } from "react";

interface GetCharactersParams {
  nextCursor?: string;
  prevCursor?: string;
  characters: Character[];
}

const getCharacters = async (page: string) => {
  const res = await fetch(page);

  if (!res.ok) throw new Error("Error on get characters");

  const data: ApiResponse = await res.json();

  return {
    characters: data.results,
    nextCursor: data?.info?.next || "",
    prevCursor: data?.info?.prev || "",
  };
};

const useGetCharacters = () => {
  const [currentPage, setCurrentPage] = useState(`${BASE_URL_API}/character`);
  const { isError, data, error, isFetching } = useQuery<GetCharactersParams>({
    queryKey: ["characters", currentPage],
    queryFn: () => getCharacters(currentPage),
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const typedError = error as Error;

  const nextPage = () => {
    setCurrentPage(data?.nextCursor || "");
  };

  const prevPage = () => {
    setCurrentPage(data?.prevCursor || "");
  };

  const setPage = (page: number) => {
    setCurrentPage(`${BASE_URL_API}/character/?page=${page}`);
  };

  const currentPageNumber = Number(currentPage.split("=")[1]);

  return {
    isError,
    isFetching,
    setPage,
    currentPageNumber,
    error: typedError?.message || "",
    nextPage,
    prevPage,
    characters: data?.characters || ([] as Character[]),
  };
};

export default useGetCharacters;
