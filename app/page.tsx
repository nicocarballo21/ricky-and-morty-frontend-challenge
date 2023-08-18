"use client";
import { Skeleton } from "@nextui-org/react";
import useGetCharacters from "./hooks/useGetCharacters";
import ErrorBadge from "./components/ErrorBagde";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";

const Home = () => {
  const { isLoading, error, isError } = useGetCharacters();

  return (
    <section className="flex flex-col h-full gap-10 p-5">
      <Skeleton isLoaded={!isLoading} className="rounded-xl">
        {isError ? <ErrorBadge error={error} /> : <Characters />}
      </Skeleton>

      <Episodes />
    </section>
  );
};

export default Home;
