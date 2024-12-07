interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
}[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Inicial",
    link: "/",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "Efycard",
    link: "/efycard",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Serviços",
    link: "/servicos",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "Seja Um Vendedor",
    link: "/seja-um-vendedor",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Contato",
    link: "/contato",
    has_dropdown: false,
  },
];

export default menu_data;
