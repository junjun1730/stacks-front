import React, { FC } from "react";
import { CardData, CardDataList } from "../../type/CardData";
import Image from "next/image";
import ShortCutIcon from "/public/assets/icon/shortcut-icon.svg";

type CardDataProps = {
  cardData: CardDataList;
};

export function Card({ cardData }: CardDataProps) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardData
        ? cardData.map((e, i) => (
            <div
              className="rounded-lg border border-gray-300 p-2 hover:scale-100 
              hover:translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer"
              key={i}
            >
              <div className="p-4 flex-col flex gap-3">
                <div className="flex flex-row gap-2">
                  <div>
                    <Image
                      src={"/assets/img/company/1674.png"}
                      alt={`${e.id}logo`}
                      width={60}
                      height={60}
                      className="rounded-2xl"
                    />
                  </div>
                  <div>
                    <div className="flex flex-col">
                      <span className="text-lg font-semibold">{e.name}</span>
                      <span className="text-base font-extralight text-gray-400">
                        {e.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex ml-auto">
                    <ShortCutIcon className="w-4 h-4 opacity-30 self-center" />
                  </div>
                </div>
                <div className="border border-gray-100"></div>
                <div>
                  <span className="text-base font-light text-gray-400">
                    {"Language Total 4"}
                  </span>
                </div>
                <div className="flex flex-row gap-2">
                  <div className="flex flex-row">
                    {[1, 2, 3, 4].map((e, i) => {
                      return (
                        <Image
                          key={i}
                          src={`/assets/img/stacks/optimize (${e}).webp`}
                          alt={`${i}stackslogo`}
                          width={30}
                          height={30}
                          className="border border-gray-100 rounded-lg"
                        />
                      );
                    })}
                  </div>
                  <div>
                    <span className="text-base font-extralight text-gray-400">
                      {"+ 50stacks"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        : "No Data"}
    </main>
  );
}
