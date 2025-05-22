"use client";

import React from "react";
import { CardData } from "../../type/company/CardData";
import Image from "next/image";
import "remixicon/fonts/remixicon.css";
import { Divider } from "../common/Divider";

type CardDataProps = {
  cardData: CardData[];
};

export function Card({ cardData }: CardDataProps) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cardData
        ? cardData.map((e, i) => (
            <div
              className="rounded-lg border border-gray-300 p-2 hover:scale-100 
              hover:translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer"
              key={e.id}
            >
              <div className="p-4 flex-col flex gap-5">
                <div className="flex flex-row gap-2">
                  <div>
                    <Image
                      src={`/assets/img/company/${e.image}`}
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
                    <i className="ri-share-box-line opacity-50 self-center"></i>
                  </div>
                </div>
                <Divider />
                <div>
                  <span className="text-sm font-light text-gray-400">
                    total : {e.techStacks.length} stacks
                  </span>
                </div>
                <div className="flex flex-row gap-2.5">
                  {e.techStacks.length > 6 ? (
                    <div className="flex flex-row gap-1.5">
                      {e.techStacks.slice(0, 6).map((e, i) => {
                        return (
                          <Image
                            key={e.id}
                            src={`/assets/img/stacks_logo/${e.imageUrl}`}
                            alt={`${i}stackslogo`}
                            width={35}
                            height={35}
                            className="border border-gray-100 rounded-lg"
                          />
                        );
                      })}
                      <div className="flex items-center">
                        <span className="text-base text-sm font-extralight text-gray-400">
                          + {e.techStacks.length - 6} stacks
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          ))
        : "No Data"}
    </main>
  );
}
