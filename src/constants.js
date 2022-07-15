export const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const typePizzaDough = ["тонкое", "традиционное"];

export const typesSort = [
  { name: "популярности (DESC)", sortProp: "rating" },
  { name: "популярности (ASC)", sortProp: "-rating" },
  { name: "цене (DESC)", sortProp: "price" },
  { name: "цене (ASC)", sortProp: "-price" },
  { name: "алфавиту (DESC)", sortProp: "title" },
  { name: "алфавиту (ASC)", sortProp: "-title" },
];

export const pizzaDB = "https://62b35713a36f3a973d20832b.mockapi.io/items?";
