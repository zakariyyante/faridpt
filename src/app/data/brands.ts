export interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  bonus: string;
  url: string;
  isMobile: boolean;
  votes: number;
  badge?: "best_casino" | "new_casino" | "fast_withdrawal";
}

const generateId = (name: string) => name.toLowerCase().replace(/\s+/g, '-');

export const brands: Brand[] = [
  // {
  //   id: "SpinyRush",
  //   name: "SpinyRush",
  //   logo: "/SPINY.svg",
  //   rating: 9.9,
  //   bonus: "425% até 5500€ + 525RG",
  //   url: "https://spinyrush777.net/dzp5c3o35?subid=SpinyRush-SL2PT7&visit_id=",
  //   isMobile: true,
  //   votes: 5921,
  //   badge: "best_casino",
  // },
  // {
  //   id: "GinjaCasino",
  //   name: "GinjaCasino",
  //   logo: "/GINJA.png",
  //   rating: 9.9,
  //   bonus: "Pacote de boas-até 1000€ + 555RG",
  //   url: "https://bestcpa.online/click?o=500&a=36&sub_id1=GinjaCasino-SL2PT7&aff_click_id=",
  //   isMobile: true,
  //   votes: 5921,
  //   badge: "new_casino",
  // },
  // {
  //   id: "SpinReelz",
  //   name: "SpinReelz",
  //   logo: "/spinreelz.svg",
  //   rating: 9.9,
  //   bonus: "425% até 5500€ + 525RG",
  //   url: "https://spinreelz777.net/dnjreg7bl?subid=SpinReelz-SL2PT7&visit_id=",
  //   isMobile: true,
  //   votes: 5921,
  //   badge: "fast_withdrawal",
  // },
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

