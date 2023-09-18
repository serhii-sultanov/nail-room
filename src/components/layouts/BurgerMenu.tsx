import clsx from "clsx";
import { FC } from "react";

type BurgerMenuProps = {
  isOpenMenu: boolean;
  handleOpenMenu?: () => void;
};

export const BurgerMenu: FC<BurgerMenuProps> = ({
  isOpenMenu,
  handleOpenMenu,
}) => {
  return (
    <button
      className={clsx(
        "w-10 min-w-[40px] h-8 p-1 flex flex-col justify-between items-center lg:hidden bg-green rounded-md shadow-sm shadow-white"
      )}
      onClick={handleOpenMenu}
    >
      <div
        className={clsx(
          "w-full h-1 rounded-md bg-white transition-all duration-300",
          isOpenMenu ? "rotate-45 translate-y-[10px]" : null
        )}
      ></div>
      <div
        className={clsx(
          "w-full h-1 rounded-md  transition-all duration-300",
          isOpenMenu ? "-translate-x-5 bg-transparent" : "bg-white"
        )}
      ></div>
      <div
        className={clsx(
          "w-full h-1 rounded-md bg-white transition-all duration-300",
          isOpenMenu ? "-rotate-45 -translate-y-[10px]" : null
        )}
      ></div>
    </button>
  );
};
