import { reactive } from "vue";
export const products = reactive([
  {
    id: 1,
    thumbnail: "/src/assets/products/product-1/product.jpg",
    altText: "product-1",
    company: "SNEAKER COMPANY",
    title: "Fall Limited Edition Sneakers",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi culpa dolor, ullam repellat, voluptate perferendis nisi molestias delectus ipsam maiores et, fugiat aspernatur voluptatem numquam eos neque quis harum!",
    price: 199.0,
    offer: 34,
    count: localStorage.getItem("product-count") || localStorage.setItem("product-count", 0),
    images: [
      {
        id: 1,
        src: "/src/assets/products/product-1/product.jpg",
        thumbnail: "/src/assets/products/product-1/product-thumbnail.jpg",
        alternate: "product 1",
        active: true
      },
      {
        id: 2,
        src: "/src/assets/products/product-2/product.jpg",
        thumbnail: "/src/assets/products/product-2/product-thumbnail.jpg",
        alternate: "product 2",
        active: false
      },
      {
        id: 3,
        src: "/src/assets/products/product-3/product.jpg",
        thumbnail: "/src/assets/products/product-3/product-thumbnail.jpg",
        alternate: "product 3",
        active: false
      },
      {
        id: 4,
        src: "/src/assets/products/product-4/product.jpg",
        thumbnail: "/src/assets/products/product-4/product-thumbnail.jpg",
        alternate: "product 4",
        active: false
      },
    ],
  }
]);
