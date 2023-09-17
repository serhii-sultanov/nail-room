import { FC } from "react";
import Link from "next/link";

const services = [
  "Манікюр",
  "Педикюр",
  "Дизайн",
  "Комплекси",
  "Наращивание",
  "Чоловікам",
];

export const Services: FC = () => {
  return (
    <section className="max-w-[1320px] w-full mx-auto px-2.5 flex justify-center items-center overflow-hidden my-10">
      <div className="w-full flex flex-col md:flex-row justify-stretch md:items-stretch overflow-hidden md:h-[500px] max-w-[960px]">
        {services.map((service) => (
          <Link
            key={service}
            href="/"
            className="service__link w-full max-md:min-w-[300px] min-[460px]:w-2/3 h-[500px] md:h-full mx-auto md:w-40 px-3 py-4 md:py-8 md:hover:w-80 transition-all duration-300"
          >
            <span>{service}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};
