"use client";
import { Divider } from "@nextui-org/react";
import CharactersGrid from "./components/CharactersGrid";

const Home = () => {
  return (
    <section className="flex flex-col h-full gap-10 p-5">
      <div className="grid grid-cols-2 rounded-lg bg-emerald-400 w-full gap-5 p-3">
        <CharactersGrid />
        <CharactersGrid />
      </div>

      <div className="grid grid-cols-3 h-[700px] gap-5  bg-[yellow]">
        <div className="bg-slate-600">1</div>
        <div className="bg-red-400">1</div>
        <div className="bg-lime-950">1</div>
      </div>
    </section>
  );
};

export default Home;
