import { FC, useState } from "react";

const Prices: FC = (priceList) => {
  const [isOpen, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!isOpen);
  };
  return <section className="max-w-[1320px] w-full mx-auto"></section>;
};

export default Prices;
