import {
  GET_PRODUCTS_ENDPOINT,
  GET_SINGLE_PRODUCT_ENDPOINT,
  GET_PRODUCT_TAGS_ENDPOINT,
} from "../../constants/endpoints";

export let productParams = {
  per_page: 30,
  page: 1
};

export function setProductParams(id) {
  productParams.tag = Number(id);
}


export async function getProducts(params) {
  let query = "";
  for (const key in params) {
    query = query + `${key}=${params[key]}&`;
  }
  const res = await fetch(`${GET_PRODUCTS_ENDPOINT}?${query}`, {
    next: { revalidate: 360 },
  });
  let products;
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  products = await res.json();
  // console.log(data)
  return {
    products,
  };
}

export async function getSingleProduct(id) {
  const res = await fetch(`${GET_SINGLE_PRODUCT_ENDPOINT}?id=${id}`);
  let data;
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  data = await res.json();
  return {
    data,
  };
}

// функци возвращает список всех тегов

export const tagsParams = {
  id: "",
};

export async function getProductTags(params) {
  let query = "";
  for (const key in params) {
    query = query + `${key}=${params[key]}&`;
  }
  const res = await fetch(`${GET_PRODUCT_TAGS_ENDPOINT}?${query}`, {
    next: { revalidate: 360 },
  });
  let tagsList;
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  tagsList = await res.json();
  return {
    tagsList,
  };
}

export async function getCart() {

  const res = await fetch("http://localhost:3000/api/cart");
  let cart;
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  cart = await res.json();
  // console.log("function getCart:", cart)
  return {
    cart,
  };
}

export const navItem = [
  { id: 1, value: "Home", href: "/" },
  { id: 2, value: "About", href: "/about" },
  { id: 3, value: "Contact", href: "/contact" },
  { id: 4, value: "Catalog", href: "/catalog" },
];

export const productsList = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)",
    image: "./images/products/Iphone14pro-gold.png",
    price: "900",
  },
  {
    id: 2,
    name: "Blackmagic Pocket Cinema Camera 6k",
    image: "./images/products/Pocket-Cinema-Camera-6k.png",
    price: "2535",
  },
  {
    id: 3,
    name: "Apple Watch Series 9 GPS 41mm Starlight Aluminium Case",
    image: "./images/products/Apple-Watch-Series-9.png",
    price: "399",
  },
  {
    id: 4,
    name: "Samsung Galaxy Watch6 Classic 47mm Black",
    image: "./images/products/AirPods-Max-Silver.png",
    price: "549",
  },
  {
    id: 5,
    name: "Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",
    image: "./images/products/Iphone14pro-gold.png",
    price: "369",
  },
  {
    id: 6,
    name: "Galaxy Buds FE Graphite",
    image: "./images/products/Iphone14pro-gold.png",
    price: "1799",
  },
  {
    id: 7,
    name: "AirPods Max Silver",
    image: "./images/products/Iphone14pro-gold.png",
    price: "99.99",
  },
  {
    id: 8,
    name: "AirPods Max Silver",
    image: "./images/products/Iphone14pro-gold.png",
    price: "398",
  },
];

// data for categoryes of products

export const categotyes = [
  {
    id: 1,
    name: "",
    img: "",
  },
];

export const productInfo = [
  {
    id: 1,
    product_id: 1,
    title: "",
    description:
      "Смартфоны от производителя iPhone пользуются популярностью среди покупателей. Вы можете заказать в нашем магазине Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый eSIM с диагональю экрана 6.7 дюйм. по низкой цене. Основной цвет корпуса модели - фиолетовый. Для хранения файлов имеется внутренняя память, которая составляет 256 Гб.",
  },
  {
    id: 2,
    product_id: 2,
    title: "",
    description:
      "Смартфоны от производителя iPhone пользуются популярностью среди покупателей. Вы можете заказать в нашем магазине Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый eSIM с диагональю экрана 6.7 дюйм. по низкой цене. Основной цвет корпуса модели - фиолетовый. Для хранения файлов имеется внутренняя память, которая составляет 256 Гб.",
  },
  {
    id: 3,
    product_id: 3,
    title: "",
    description:
      "Смартфоны от производителя iPhone пользуются популярностью среди покупателей. Вы можете заказать в нашем магазине Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый eSIM с диагональю экрана 6.7 дюйм. по низкой цене. Основной цвет корпуса модели - фиолетовый. Для хранения файлов имеется внутренняя память, которая составляет 256 Гб.",
  },
  {
    id: 4,
    product_id: 4,
    title: "",
    description:
      "Смартфоны от производителя iPhone пользуются популярностью среди покупателей. Вы можете заказать в нашем магазине Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый eSIM с диагональю экрана 6.7 дюйм. по низкой цене. Основной цвет корпуса модели - фиолетовый. Для хранения файлов имеется внутренняя память, которая составляет 256 Гб.",
  },
  {
    id: 5,
    product_id: 5,
    title: "",
    description:
      "Смартфоны от производителя iPhone пользуются популярностью среди покупателей. Вы можете заказать в нашем магазине Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый eSIM с диагональю экрана 6.7 дюйм. по низкой цене. Основной цвет корпуса модели - фиолетовый. Для хранения файлов имеется внутренняя память, которая составляет 256 Гб.",
  },
  {
    id: 6,
    product_id: 6,
    title: "",
    description:
      "Смартфоны от производителя iPhone пользуются популярностью среди покупателей. Вы можете заказать в нашем магазине Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый eSIM с диагональю экрана 6.7 дюйм. по низкой цене. Основной цвет корпуса модели - фиолетовый. Для хранения файлов имеется внутренняя память, которая составляет 256 Гб.",
  },
  {
    id: 7,
    product_id: 7,
    title: "",
    description:
      "Смартфоны от производителя iPhone пользуются популярностью среди покупателей. Вы можете заказать в нашем магазине Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый eSIM с диагональю экрана 6.7 дюйм. по низкой цене. Основной цвет корпуса модели - фиолетовый. Для хранения файлов имеется внутренняя память, которая составляет 256 Гб.",
  },
  {
    id: 8,
    product_id: 8,
    title: "",
    description:
      "Смартфоны от производителя iPhone пользуются популярностью среди покупателей. Вы можете заказать в нашем магазине Смартфон Apple iPhone 14 Pro Max 256Gb фиолетовый eSIM с диагональю экрана 6.7 дюйм. по низкой цене. Основной цвет корпуса модели - фиолетовый. Для хранения файлов имеется внутренняя память, которая составляет 256 Гб.",
  },
];

// export const tagsList = [
//   {
//     id: 1,
//     name: "New Arrival",
//   },
//   {
//     id: 2,
//     name: "Bestseller",
//   },
//   {
//     id: 3,
//     name: "Featured Products",
//   },
// ];

export const discontList = [
  {
    id: 1,
    name: "Discounts up to -20%",
  },
  {
    id: 2,
    name: "Discounts up to -30%",
  },
  {
    id: 3,
    name: "Discounts up to -50%",
  },
];

export const categoryFoFilters = [
  {
    id: 1,
    memory: "16GB",
    brand: "Samsung",
    protection: "ip20",
    screenDiag: "15",
    screenType: "hd",
    battery: "2600",
  },
  {
    id: 2,
    memory: "32GB",
    brand: "Apple",
    protection: "ip67",
    screenDiag: "18",
    screenType: "fm",
    battery: "2100",
  },
  {
    id: 3,
    memory: "64GB",
    brand: "Xiaomi",
    protection: "ip55",
    screenDiag: "19",
    screenType: "or",
    battery: "2000",
  },
  {
    id: 4,
    memory: "128GB",
    brand: "Poco",
    protection: "ip66",
    screenDiag: "21",
    battery: "1850",
  },
  {
    id: 5,
    memory: "256GB",
    brand: "Oppo",
  },
  {
    id: 6,
    memory: "512GB",
    brand: "Honor",
  },
  {
    id: 7,
    brand: "Motorolla",
  },
  {
    id: 8,
    brand: "Nokia",
  },
  {
    id: 9,
    brand: "Realme",
  },
];
