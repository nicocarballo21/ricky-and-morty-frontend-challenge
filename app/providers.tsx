"use client";
import { NextUIProvider } from "@nextui-org/react";
import CharactersContextProvider from "./context/charactersContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Add providers here //

const queryClient = new QueryClient();

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CharactersContextProvider>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </NextUIProvider>
    </CharactersContextProvider>
  );
};

export default Providers;
