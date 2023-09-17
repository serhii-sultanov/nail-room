import { FC } from "react";
import { MainButton } from "../ui/MainButton";
import { VerticalText } from "../ui/VerticalText";

export const MainSection: FC = () => {
  return (
    <section className=" bg-pink z-10 h-calc ">
      <div className="relative overflow-hidden max-w-[1320px] w-full h-calc mx-auto px-2.5 flex justify-start items-center">
        <div className="absolute w-[65%] bg-green top-0 right-0 h-calc flex justify-center items-center">
          <div className="w-full h-calc">
            <img
              src="/images/photo4.jpg"
              alt="main-photo"
              className="w-full h-calc object-cover"
            />
          </div>
        </div>
        <div className="max-w-[1320px] w-full mx-auto pl-2.5 relative overflow-hidden">
          <div className="max-w-[600px] p-2.5 w-full bg-pink rounded-full relative pr-28">
            <h1 className="uppercase font-medium text-6xl mb-10 text-black ml-24">
              <span className="text-green text-8xl font-semibold">N</span>ail{" "}
              <br />
              <span className="text-green text-8xl ml-20 font-semibold">R</span>
              oom
            </h1>
            <div className="flex flex-col gap-10 mb-2">
              <MainButton />
            </div>
            <VerticalText />
          </div>
        </div>
      </div>
    </section>
  );
};
