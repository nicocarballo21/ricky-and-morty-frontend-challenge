"use client";
import { NextUIProvider } from "@nextui-org/react";
import CharactersContextProvider from "./context/charactersContext";
import { QueryClient, QueryClientProvider } from "react-query";

// Add providers here //

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CharactersContextProvider>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </NextUIProvider>
    </CharactersContextProvider>
  );
};

export default Providers;
