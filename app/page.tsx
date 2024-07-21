import Image from "next/image";
import Link from "next/link";
import GrowTab from "./components/GrowTab";
import SeamlessScroll from "./components/SeamlessScroll";
export default function Home() {
  const companyList = [
    "brave",
    "circle",
    "discord",
    "google",
    "jump",
    "lollapalooza",
    "magic eden",
  ];
  return (
    <main className="home">
      <section className="banner flex pt-[40vw] pb-[30vw] sm:py-[12vw] items-center justify-center text-center text-white bg-[url('/banner.jpg')] bg-no-repeat bg-contain">
        <div className="w-full max-w-7xl flex flex-col gap-y-8 2xl:gap-y-16 px-4 xl:pt-10">
          <h1 className="text-3xl xl:text-5xl 2xl:text-7xl">
            Powerful for developers.
            <br />
            Fast for everyone.
          </h1>
          <p className="text-base xl:text-xl 2xl:text-2xl w-2/3 mx-auto">
            Bring blockchain to the people. Solana supports experiences for power users, new
            consumers, and everyone in between.
          </p>
          <div className="flex justify-center gap-x-4">
            <Link
              className="rounded-full py-2 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-[#8C01FA] to-[#000000] text-xl"
              href={"/"}
            >
              Start building
            </Link>
            <Link
              className="rounded-full py-2 sm:py-4 px-6 sm:px-8 bg-gradient-to-r border-2 text-xl"
              href={"/"}
            >
              Start building
            </Link>
          </div>
          <div className="power pt-10">
            <p className="text-xs sm:text-base text-blue-400 uppercase">
              Powering tools and integrations from companies all around the world
            </p>
            <div className="company flex flex-wrap justify-center gap-4 pt-10">
              {companyList.map((company) => {
                return (
                  <Image
                    className="h-6 sm:h-10 w-auto"
                    src={"/" + company + ".png"}
                    key={company}
                    alt={company}
                    width={120}
                    height={40}
                    priority
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[url('/bg-01.jpg')] bg-no-repeat bg-contain xl:bg-cover">
        <div className="join w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 p-4">
          <div className="left pb-16 sm:pt-52">
            <h2 className="section-title">Join a community of millions</h2>
          </div>
          <div className="right flex flex-col gap-12 2xl:gap-24">
            <div>
              <span className="title from-[#8C01FA] to-[#19FB9B]">11.5M+</span>
              <p className="text">Active accounts</p>
            </div>
            <div>
              <span className="title from-[#37a8db] to-[#2a5af5]">21.9M</span>
              <p className="text">NFTs minted</p>
            </div>
            <div>
              <span className="title from-[#237394] to-[#46ebb7]">$0.00025</span>
              <p className="text">Average cost per transaction</p>
            </div>
          </div>
        </div>
        <div className="adoption w-full max-w-7xl mx-auto flex flex-wrap pt-20 xl:pt-40 px-4">
          <div className="left w-full xl:w-1/3  mb-10">
            <h2 className="section-title">Made for mass adoption.</h2>
            <p className="uppercase mt-4">
              <span className="dot">live data</span>
            </p>
          </div>
          <div className="right w-full xl:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
            <div className="xl:mt-20">
              <h3 className="title">
                <span className="bar bg-cyan-500"></span>
                <span>Fast</span>
              </h3>
              <p className="content">
                Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as
                hardware gets faster, so will the network.
              </p>
              <p className="number">
                <span className="dot">3,969</span>
              </p>
            </div>
            <div>
              <h3 className="title">
                <span className="bar bg-yellow-500"></span>
                <span>Decentralized</span>
              </h3>
              <p className="content">
                The Solana network is validated by thousands of nodes that operate independently of
                each other, ensuring your data remains secure and censorship resistant.
              </p>

              <p className="number">
                <span className="dot">1,675</span>
              </p>
              <p className="text">Validator nodes</p>
            </div>
            <div className="xl:mt-20">
              <h3 className="title">
                <span className="bar bg-purple-500"></span>
                <span>Scalable</span>
              </h3>

              <p className="content">
                Get big, quick. Solana is made to handle thousands of transactions per second, and
                fees for both developers and users remain less than $0.01.
              </p>

              <p className="number">
                <span className="dot">163,077,581,394</span>
              </p>
              <p className="text">Total transactions</p>
            </div>
            <div>
              <h3 className="title">
                <span className="bar bg-green-500"></span>
                <span>Energy Efficient</span>
              </h3>
              <p className="content">
                Solana’s proof of stake network and other innovations minimize its impact on
                the&nbsp;
                <Link className="text-green-400 underline" href={"/"}>
                  environment.
                </Link>
                &nbsp; Each Solana transaction uses about the same energy as a few Google searches.
              </p>

              <p className="number">
                <span>0%</span>
              </p>
              <p className="text">Net carbon impact</p>
            </div>
          </div>
        </div>
      </section>
      <GrowTab />
      <section className="thriving w-full py-20 xl:py-40 bg-[url('/bg-02.png')] bg-no-repeat bg-contain xl:bg-bottom ">
        <h2 className="section-title w-full max-w-7xl mx-auto mb-10 xl:mb-20 px-4">
          Join a thriving community.
        </h2>
        <SeamlessScroll />
        <div className="w-full max-w-5xl mx-auto pt-20 xl:pt-40 px-4 text-center">
          <p className="section-title">
            It&apos;s time to join the thousands of creators, artists, and developers using Solana.
          </p>
          <Link
            className="mt-10 inline-block rounded-full py-2 sm:py-4 px-6 sm:px-8 bg-gradient-to-r from-[#8C01FA] to-[#000000] text-xl"
            href={"/"}
          >
            Start building
          </Link>
        </div>
      </section>
    </main>
  );
}
