const products = [
  {
    id: 1,
    thumbnail: "/src/assets/products/product-1/product.jpg",
    altText: "product-1",
    company: "SNEAKER COMPANY",
    title: "Fall Limited Edition Sneakers",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi culpa dolor, ullam repellat, voluptate perferendis nisi molestias delectus ipsam maiores et, fugiat aspernatur voluptatem numquam eos neque quis harum!",
    price: 199.0,
    offer: 34,
    count: 0,
    images: [
      {
        id: 1,
        src: "/src/assets/products/product-1/product.jpg",
        thumbnail: "/src/assets/products/product-1/product-thumbnail.jpg",
        alternate: "product 1",
        active: true,
      },
      {
        id: 2,
        src: "/src/assets/products/product-2/product.jpg",
        thumbnail: "/src/assets/products/product-2/product-thumbnail.jpg",
        alternate: "product 2",
        active: false,
      },
      {
        id: 3,
        src: "/src/assets/products/product-3/product.jpg",
        thumbnail: "/src/assets/products/product-3/product-thumbnail.jpg",
        alternate: "product 3",
        active: false,
      },
      {
        id: 4,
        src: "/src/assets/products/product-4/product.jpg",
        thumbnail: "/src/assets/products/product-4/product-thumbnail.jpg",
        alternate: "product 4",
        active: false,
      },
    ],
  },
];
console.log(JSON.parse(localStorage.getItem("products")));
if(!Array.isArray(JSON.parse(localStorage.getItem("products")))) {
  localStorage.setItem("products", JSON.stringify(products));
}
let trueKeys = 0;
let objectKeys = 0;
products.forEach((item, index) => {
  // console.log(item);
  // console.log(JSON.parse(localStorage.getItem("products"))[index]);

  Object.keys(item).forEach((_item, _index) => {
    objectKeys++;
    if (
      _item ===
      Object.keys(JSON.parse(localStorage.getItem("products"))[index])[_index]
    ) {
      trueKeys++;
    }
  });
});
if(trueKeys === objectKeys) {
  console.log(false)
} else {
  localStorage.setItem("products", JSON.stringify(products));
}
trueKeys === objectKeys
console.log("object");
