"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Growth {
  id: number;
  name: string;
}
export default function GrowTab() {
  const growthList = [
    {
      id: 0,
      name: "NFTs",
    },
    {
      id: 1,
      name: "DeFi",
    },
    {
      id: 2,
      name: "Payments",
    },
    {
      id: 3,
      name: "Gaming",
    },
    {
      id: 4,
      name: "DAOs",
    },
  ];
  const [activeGrowth, setActiveGrowth] = useState<Growth>(growthList[0]);
  const TabContent = ({ growth }: { growth: Growth }) => {
    const currentTabData = growthList.find((tab) => tab.id === activeGrowth.id);
    return (
      <div className="mt-6 lg:mt-10 flex flex-wrap rounded-lg bg-[#111111]">
        <div className="w-full sm:w-1/2">
          <Image className="w-full h-auto" src={"/growth-01.jpg"} alt="" width={550} height={400} />
        </div>
        <div className="w-full sm:w-1/2 pt-12 pb-12 px-8 sm:pb-0 xl:pt-24 xl:px-16">
          <Image
            className="h-8 xl:h-12 w-auto"
            src={"/growth-01.png"}
            alt=""
            width={240}
            height={53}
          />
          <p className="mt-6 text-md lg:text-xl">
            It&apos;s time to bridge the digital and physical. Anybodies helps established brands
            like Toys&apos;R&apos;Us connect real-life places and products with NFTs.
          </p>
          <Link className="text-purple-500 mt-4 xl:mt-8 block text-md lg:text-xl" href="/">
            Learn more about {growth.name} on Solana
          </Link>
        </div>
      </div>
    );
  };
  return (
    <section className="growth w-full max-w-7xl mx-auto pt-20 xl:pt-40 px-4">
      <div className="flex flex-wrap flex-col xl:flex-row justify-between">
        <h2 className="section-title ">Build for growth.</h2>
        <div className="tab-list flex gap-4 mt-4 xl:mt-0">
          {growthList.map((growth) => {
            return (
              <div
                className={`bg-[#111111] rounded-xl p-2 xl:p-4 cursor-pointer border-2 border-transparent text-sm sm:text-base ${
                  growth.id === activeGrowth.id && "active !border-purple-700"
                }`}
                key={growth.id}
                onClick={() => setActiveGrowth(growth)}
              >
                {growth.name}
              </div>
            );
          })}
        </div>
      </div>
      <TabContent growth={activeGrowth} />
      <div className="mt-8 growth-image-list flex flex-wrap items-center justify-around">
        <Image
          className="h-8 sm:h-10 w-auto"
          src={`/growth-bottom-01.png`}
          alt=""
          width={100}
          height={30}
        />
        <Image
          className="h-8 sm:h-10 w-auto"
          src={`/growth-bottom-02.png`}
          alt=""
          width={39}
          height={46}
        />
        <Image
          className="h-8 sm:h-10 w-auto"
          src={`/growth-bottom-03.png`}
          alt=""
          width={46}
          height={46}
        />
        <Image
          className="h-8 sm:h-10 w-auto"
          src={`/growth-bottom-04.png`}
          alt=""
          width={100}
          height={30}
        />
      </div>
    </section>
  );
}
