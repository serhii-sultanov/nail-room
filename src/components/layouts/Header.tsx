import { ROUTE } from "@/utils/navigation";
import Link from "next/link";
import { FC, useState } from "react";
import { LangButtonts } from "../ui/LanguageButtons";
import { PhoneNumber } from "../ui/PhoneNumber";
import { Nav } from "./Nav";
import { BurgerMenu } from "./BurgerMenu";
import clsx from "clsx";

export const Header: FC = () => {
  const [isOpenMenu, toggleOpenMenu] = useState(false);

  return (
    <header className="bg-pink text-black z-50 h-[65px] flex items-center font-medium fixed inset-0">
      <div className="max-w-[1320px] mx-auto w-full px-2.5 flex items-center justify-between">
        <div className="flex items-center">
          <Link
            className="bg-white w-14 h-14 rounded-full p-2.5 mr-6"
            href={ROUTE.HOME}
          >
            <img
              className="max-w-full h-full mx-auto"
              src="/images/logo.jpg"
              alt="logo"
            />
          </Link>
          <div className="hidden sm:flex items-center">
            <span className="mr-3">Xарків, вул. Ярослава Мудрого, 34</span>
            <PhoneNumber />
          </div>
        </div>
        <div
          className={clsx(
            "max-lg:bg-green max-lg:bg-opacity-30 max-lg:w-full max-lg:visible max-lg:fixed max-lg:overflow-hidden max-lg:top-[65px] max-lg:left-0 max-lg:h-calc transition-all duration-300",
            !isOpenMenu ? "max-lg:invisible max-lg:opacity-0 max-lg:h-0" : null
          )}
          onClick={() => toggleOpenMenu(false)}
        >
          <div
            className="flex items-center max-lg:items-start max-lg:justify-evenly gap-10 max-lg:bg-pink max-lg:h-full max-lg:pt-[10px] max-lg:pb-[20px] max-lg:px-5 max-sm:w-full max-lg:w-1/4 max-lg:min-w-[300px] max-lg:ml-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Nav closeNav={() => toggleOpenMenu(false)} />
            <LangButtonts />
          </div>
        </div>
        <div className="flex lg:hidden items-center gap-5">
          <div className="block sm:hidden">
            <PhoneNumber />
          </div>
          <BurgerMenu
            isOpenMenu={isOpenMenu}
            handleOpenMenu={() => toggleOpenMenu(!isOpenMenu)}
          />
        </div>
      </div>
    </header>
  );
};
