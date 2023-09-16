export const ROUTE: Record<string, string> = {
  HOME: '/',
  SAFETY: '/safety',
  CONTACTS: '/contacts',
  PRICE: '/prices',
  MANICURE: '/manicure',
  PEDICURE: '/pedicure',
  DESIGN: '/design',
  SPA: '/spa',
  FORMAN: '/forman',
  COMPLEX: '/complex',
  BUILD: '/build-up',
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
  { href: ROUTE.MANICURE, label: 'Манікюр' },
  { href: ROUTE.PEDICURE, label: 'Педікюр' },
  { href: ROUTE.BUILD, label: 'Нарощування' },
  { href: ROUTE.COMPLEX, label: 'Комплекс' },
  { href: ROUTE.DESIGN, label: 'Дизайн' },
  { href: ROUTE.SPA, label: 'СПА' },
  { href: ROUTE.FORMAN, label: 'Чоловічі процедури' },
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
