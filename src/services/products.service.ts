import type { Product } from "../types/product.types";

//datos falsos de ejemplo para mostrar en el dashboard generados por IA
export const productsMock: Product[] = [
  {
    id: 1,
    title: "Camiseta React",
    description: "Camiseta oficial con logo de React",
    price: 19.99,
    category: "Ropa",
    image: "https://via.placeholder.com/150",
    stock: 10,
  },
  {
    id: 2,
    title: "Taza JavaScript",
    description: "Taza con logo de JS",
    price: 12.5,
    category: "Accesorios",
    image: "https://via.placeholder.com/150",
    stock: 25,
  },
  {
    id: 3,
    title: "Mochila Tailwind",
    description: "Mochila con estampado de Tailwind CSS",
    price: 45.0,
    category: "Accesorios",
    image: "https://via.placeholder.com/150",
    stock: 5,
  },
];

//simular la carga de la API
export const getProducts = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsMock);
    }, 500); //simulamos tardanza
  });
};