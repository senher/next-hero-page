import Image from "next/image";
export default function Fotter() {
  const shareList = new Array(6).fill(null);
  const menuList = [
    {
      name: "Solana",
      children: [
        {
          name: "Grants",
        },
        {
          name: "Break Solana",
        },
        {
          name: "Media Kit",
        },
        {
          name: "Careers",
        },
        {
          name: "Disclaimer",
        },
      ],
    },
    {
      name: "Get Connected",
      children: [
        {
          name: "Ecosystem",
        },
        {
          name: "Blog",
        },
        {
          name: "Newsletter",
        },
      ],
    },
  ];
  return (
    <footer className="flex flex-wrap flex-col-reverse sm:flex-row justify-center xl:justify-between max-w-7xl mx-auto pb-20 xl:pb-30 px-4 gap-8 xl:gap-16">
      <div className="left flex flex-col gap-8 justify-center items-center lg:items-start">
        <Image src="/logo-fotter.png" width={31} height={27} alt="" />
        <p>Managed by Solana Foundation</p>
        <div className="share-list flex flex-wrap gap-4">
          {shareList.map((share, index) => {
            return (
              <Image
                className="cursor-pointer"
                key={index}
                src={`/share-0${index + 1}.png`}
                width={26}
                height={16}
                alt=""
              />
            );
          })}
        </div>
        <p className="text-gray-400">© 2023 Solana Foundation. All rights reserved.</p>
      </div>
      <div className="right flex flex-wrap justify-center gap-8 xl:gap-16">
        <div className="menu-list flex flex-wrap gap-8 xl:gap-16">
          {menuList.map((menu) => {
            return (
              <div key={menu.name} className="menu">
                <div className="name text-xl uppercase mb-4 cursor-pointer">{menu.name}</div>
                {menu.children.length > 0 && (
                  <div className="children flex flex-col gap-4">
                    {menu.children.map((child) => {
                      return (
                        <div className="child text-gray-500 cursor-pointer" key={child.name}>
                          {child.name}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="language w-full sm:w-auto flex self-start items-center gap-2 justify-center cursor-pointer">
          <Image src={"/earth.png"} width={19} height={20} alt="" />
          <span>EN</span>
        </div>
      </div>
    </footer>
  );
}
