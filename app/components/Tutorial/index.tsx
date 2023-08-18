"use client";
import { Button, Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const Tutorial = () => {
  const [step, setStep] = useState(1);
  const [hasSeenTutorial, setHasSeenTutorial] = useState(() => {
    const hasSeenTutorial = window.localStorage.getItem("tutorial");
    return hasSeenTutorial === "true";
  });

  useEffect(() => {
    const hasSeenTutorial = window.localStorage.getItem("tutorial") === "true";
    setHasSeenTutorial(hasSeenTutorial);
  }, []);

  if (hasSeenTutorial) return null;

  const stepsCommonStyles =
    "w-full flex flex-col h-full justify-between items-center gap-2 py-2 text-center";

  const StepOne = () => {
    return (
      <div className={stepsCommonStyles}>
        <h1 className="text-2xl">Step 1</h1>
        <Divider />
        <h3 className="text-md lg:text-lg">
          You will arrive at the page, here you will see all the Ricky and Morty
          characters along 41 pages.
        </h3>
        <p className="text-md lg:text-lg">
          {`Select "character #1" and "character #2" to continue!`}
        </p>
        <Divider />

        <Image
          src="/screenShoot.webp"
          alt="Step one"
          height={200}
          width={600}
        />
      </div>
    );
  };

  const StepTwo = () => {
    return (
      <div className={stepsCommonStyles}>
        <div className="flex w-full flex-col gap-4">
          <h1 className="text-2xl">Step 2</h1>
          <Divider />
          <h3 className="text-md lg:text-lg">
            Once you select the two chacters, the episodes will be loaded at the
            bottom of the page.
          </h3>
          <p className="text-md lg:text-lg">
            Here you can see episodes for charactes #1, character#2 and episodes
            shared between them.
          </p>

          <Divider />
        </div>
        <div className="grid h-full place-content-center">
          <Image
            src="/screenShoot_2.webp"
            alt="Step two"
            height={400}
            width={800}
          />
        </div>
      </div>
    );
  };

  const onNext = () => {
    if (step >= 2) {
      window.localStorage.setItem("tutorial", "true");
      setHasSeenTutorial(true);
      return;
    }
    setStep(step + 1);
  };

  const onPrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const StepToShow = () => {
    if (step === 1) return <StepOne />;
    if (step === 2) return <StepTwo />;
  };

  const nextButtonText = step === 2 ? "Lets start!" : "Next";

  const handleClose = () => {
    setHasSeenTutorial(true);
    window.localStorage.setItem("tutorial", "true");
  };

  return (
    <div className="z-50 w-full h-full bg-transparent backdrop-blur-lg grid  place-items-center fixed">
      <div className="w-full h-full relative flex flex-col gap-4 max-w-[1200px] max-h-[800px] bg-slate-700 rounded-xl p-8">
        <h1 className="text-xl lg:text-2xl text-center ">
          Welcome to the Ricky and Morty challenge
        </h1>
        <Button
          onClick={handleClose}
          className="rounded-full bg-emerald-500 absolute top-7 right-7 min-w-[15px]  h-10"
        >
          x
        </Button>

        <h2 className="text-lg text-center ">
          Lets start and see how it works!!
        </h2>

        <div className="bg-slate-600 p-3 rounded-xl h-[80%]">
          <StepToShow />
        </div>

        <div className="w-full flex items-center justify-center gap-5">
          <Button className="bg-emerald-500" onClick={onPrev}>
            Prev
          </Button>
          <Button className="bg-emerald-500" onClick={onNext}>
            {nextButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
