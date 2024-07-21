"use client";
import useSeamlessScroll from "../hooks/useSeamlessScroll";
import Image from "next/image";

const SeamlessScroll: React.FC = () => {
  const { containerRef, contentRef } = useSeamlessScroll(100);
  const NumberContent = ({
    reverse = false,
    number,
    content,
    color,
    image,
  }: {
    reverse?: boolean;
    number: string;
    content: string;
    color: string;
    image: string;
  }) => {
    return (
      <div
        className={`flex-shrink-0 w-80 flex gap-4 aspect-[300/420] ${
          reverse ? "flex-col" : "flex-col-reverse"
        }`}
      >
        <div className="h-1/2 flex flex-col gap-4 justify-center bg-[#19161C] py-10 px-4 text-center rounded-xl">
          <p style={{ color: color }} className="text-3xl">
            {number}
          </p>
          <p className="uppercase text-sm text-gray-400 ">{content}</p>
        </div>
        <Image
          className="w-full h-1/2 rounded-xl object-cover"
          src={image}
          alt=""
          width={225}
          height={200}
        />
      </div>
    );
  };
  return (
    <div
      ref={containerRef}
      className="gap-4"
      style={{
        overflow: "hidden",
        display: "flex",
      }}
    >
      <div ref={contentRef} className="flex gap-4 flex-shrink-0">
        <div className="flex gap-4">
          <NumberContent
            number={"11,000"}
            color={"#F087FF"}
            content={"Solana Hacker House participants"}
            image="/thriving-05.png"
          />
          <Image
            className="flex-shrink-0 aspect-[600/420] rounded-xl object-cover"
            src={"/thriving-01.png"}
            alt=""
            width={600}
            height={420}
          />
          <NumberContent
            reverse={true}
            number={"48,000"}
            color={"#19FB9B"}
            content={"Developers building during Solana Hackathons"}
            image="/thriving-02.png"
          />
          <Image
            className="flex-shrink-0 aspect-[300/420] rounded-xl object-cover"
            src={"/thriving-03.png"}
            alt=""
            width={300}
            height={420}
          />
          <NumberContent
            reverse={true}
            number={"38,000"}
            color={"#FFEB3B"}
            content={"Solana Breakpoint 2022 attendees"}
            image="/thriving-04.png"
          />
        </div>
        <div className="flex gap-4">
          <NumberContent
            number={"11,000"}
            color={"#F087FF"}
            content={"Solana Hacker House participants"}
            image="/thriving-05.png"
          />
          <Image
            className="flex-shrink-0 aspect-[600/420] rounded-xl object-cover"
            src={"/thriving-01.png"}
            alt=""
            width={600}
            height={420}
          />
          <NumberContent
            reverse={true}
            number={"48,000"}
            color={"#19FB9B"}
            content={"Developers building during Solana Hackathons"}
            image="/thriving-02.png"
          />
          <Image
            className="flex-shrink-0 aspect-[300/420] rounded-xl object-cover"
            src={"/thriving-03.png"}
            alt=""
            width={300}
            height={420}
          />
          <NumberContent
            reverse={true}
            number={"38,000"}
            color={"#FFEB3B"}
            content={"Solana Breakpoint 2022 attendees"}
            image="/thriving-04.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SeamlessScroll;
