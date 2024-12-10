interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Inicial",
    link: "#",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Efycard",
    link: "#",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Serviços",
    link: "#",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Seja Um Vendedor",
    link: "#",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Contato",
    link: "#",
    has_dropdown: false,
  },
  {
    id: 6,
    title: "Área Restrita",
    link: "#",
    has_dropdown: false,
  },
  {
    id: 7,
    title: "Peça Já o Seu Cartão",
    link: "#",
    has_dropdown: false,
  },
];

export default menu_data;
