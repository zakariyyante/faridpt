export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
}

const generateId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const brands: Brand[] = [
  {
    id: "bwin",
    name: "Bwin",
    logo: "/bwin_dark.png",
    rating: 9.9,
    bonus: "100% ATÉ €200 DE BÓNUS CASINO",
    url: "https://www.bwin.pt/?utm_source=casinotoppt&utm_medium=referral&clickid=",
    isMobile: false,
    votes: 5921,
  },
];

