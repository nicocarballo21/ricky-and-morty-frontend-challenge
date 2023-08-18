import { BASE_URL_API } from "../constants";
import { useQuery } from "@tanstack/react-query";
import { ApiResponse, Character } from "../apiTypes";
import { useContext, useState } from "react";
import { CharactersContext } from "../context/charactersContext";
import { BoxId } from "../context/types.d";
import { GetCharactersParams } from "./types.d";

const getCharacters = async (page: string) => {
  try {
    const res = await fetch(page);

    if (!res.ok) throw new Error("Error on get characters");

    const data: ApiResponse = await res.json();

    return {
      characters: data.results,
      nextCursor: data?.info?.next || "",
      prevCursor: data?.info?.prev || "",
    };
  } catch (error) {
    return {
      characters: [],
      nextCursor: "",
      prevCursor: "",
    };
  }
};

const useGetCharacters = () => {
  const [currentPage, setCurrentPage] = useState(`${BASE_URL_API}/character`);
  const { resetCharacterSelection } = useContext(CharactersContext);

  const { isError, data, error, isLoading } = useQuery<GetCharactersParams>({
    queryKey: ["characters", currentPage],
    queryFn: () => getCharacters(currentPage),
    keepPreviousData: true,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const typedError = error as Error;

  const resetBothCharacters = () => {
    resetCharacterSelection(BoxId.CHARACTER_ONE);
    resetCharacterSelection(BoxId.CHARACTER_TWO);
  };

  const nextPage = () => {
    setCurrentPage(data?.nextCursor || "");
    resetBothCharacters();
  };

  const prevPage = () => {
    setCurrentPage(data?.prevCursor || "");
    resetBothCharacters();
  };

  const setPage = (page: number) => {
    setCurrentPage(`${BASE_URL_API}/character/?page=${page.toString()}`);
    resetBothCharacters();
  };

  const currentPageNumber = Number(currentPage.split("=")[1]);

  return {
    isError,
    isLoading,
    setPage,
    currentPageNumber,
    error: typedError?.message || "",
    nextPage,
    prevPage,
    characters: data?.characters || ([] as Character[]),
  };
};

export default useGetCharacters;
