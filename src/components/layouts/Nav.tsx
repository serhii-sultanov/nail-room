import { links } from "@/utils/navigation";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type NavProps = {
  closeNav: () => void;
};

export const Nav: FC<NavProps> = ({ closeNav }) => {
  const { pathname } = useRouter();

  return (
    <nav className="max-lg:w-full max-lg:flex max-lg:flex-col max-lg:justify-between max-lg:h-full">
      <ul className="flex gap-5 max-lg:flex-col max-lg:justify-between">
        {links.map(({ href, label, list }) => {
          return !list ? (
            <li
              key={label}
              className={clsx(
                "hover:text-green relative hover:transition-all hover:duration-300 after:absolute after:w-0 after:h-0.5 after:bg-green after:top-[90%] after:left-0 after:hover:w-full after:hover:transition-all after:hover:duration-300",
                pathname === href
                  ? "text-green after:absolute after:w-full after:h-0.5 after:bg-green after:top-[90%] after:left-0"
                  : null
              )}
            >
              <Link href={href} onClick={closeNav}>
                {label}
              </Link>
            </li>
          ) : (
            <li
              key={label}
              className={clsx(
                "group relative cursor-pointer hover:text-green hover:transition-all hover:duration-300",
                list.find((item) => item.href === pathname)
                  ? "text-green after:absolute after:w-full after:h-0.5 after:bg-green after:top-[90%] after:left-0 after:hover:w-0"
                  : null
              )}
            >
              {label} <span>&#11183;</span>
              <ul className="rounded-md invisible opacity-0 group-hover:opacity-100 group-hover:visible max-lg:group-hover:static absolute lg:transition-all lg:duration-300 bg-white w-52 max-lg:w-full top-[105%]">
                {list.map(({ href, label }) => (
                  <li
                    key={label}
                    className={clsx(
                      "hover:bg-pink hover:bg-opacity-60 rounded-md px-2.5 py-1 text-black font-medium border-b border-black border-opacity-25 text-sm",
                      pathname === href ? "bg-pink bg-opacity-60 " : null
                    )}
                  >
                    <Link href={href} onClick={closeNav}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
      <p className="sm:hidden whitespace-nowrap max-[420px]:text-xs">
        Xарків, вул. Ярослава Мудрого, 34
      </p>
    </nav>
  );
};
