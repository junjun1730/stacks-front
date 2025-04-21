import React, { FC } from "react";
import { CardData, CardDataList } from "../../type/CardData";

type CardDataProps = {
  cardData: CardDataList;
};

export function Card({ cardData }: CardDataProps) {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cardData
        ? cardData.map((e, i) => (
            <div className="bg-gray-200 p-2" key={i}>
              <div className="flex flex-row gap-2">
                <div>image</div>
                <div>
                  <span>company name</span>
                  <span>location</span>
                </div>
                <div>Link icon</div>
              </div>
              <div>divider</div>
              <div>
                <div>language</div>
              </div>
              <div className="flex flex-row gap-2">
                <div>stacks image</div>
                <div>abbreviate</div>
              </div>
            </div>
          ))
        : "No Data"}
    </main>
  );
}
