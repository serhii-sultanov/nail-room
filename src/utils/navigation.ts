export const ROUTE: Record<string, string> = {
  HOME: '/',
  SAFETY: '/safety',
  CONTACTS: '/contacts',
  PRICE: '/prices',
  FORHIM: '/forhim',
  FORHER: '/forher',
  DESIGN: '/design',
  SPA: '/spa',
};

type Links = {
  href: string;
  label: string;
  list: DropDownLinks[] | [] | null;
};
type DropDownLinks = {
  href: string;
  label: string;
};

export const dropdownLinks: DropDownLinks[] = [
  { href: ROUTE.FORHIM, label: 'Для нього' },
  { href: ROUTE.FORHER, label: 'Для неї' },
  { href: ROUTE.DESIGN, label: 'Дизайн' },
  { href: ROUTE.SPA, label: 'СПА' },
];

export const links: Links[] = [
  {
    href: ROUTE.HOME,
    label: 'Головна',
    list: null,
  },
  {
    href: ROUTE.HOME,
    label: 'Послуги',
    list: dropdownLinks,
  },
  {
    href: ROUTE.PRICE,
    label: 'Ціни',
    list: null,
  },
  {
    href: ROUTE.SAFETY,
    label: 'Безпека',
    list: null,
  },
  {
    href: ROUTE.CONTACTS,
    label: 'Контакти',
    list: null,
  },
];
