<template>
  <main class="xl:flex gap-x-28 container">
    <div class="flex flex-col items-center">
      <div
        class="col-span-4 relative rounded-xl max-w-[1000px] overflow-hidden aspect-square"
      >
        <img :src="activeImage.image" :alt="activeImage.altText" />
        <div
          class="xl:hidden bg-white/40 hover:bg-white/70 absolute top-0 bottom-0 left-5 rounded-full my-auto h-12 aspect-square flex items-center justify-center cursor-pointer select-none"
          @click="arrowImage(false)"
        >
          <PreviousIcon />
        </div>
        <div
          class="xl:hidden bg-white/40 hover:bg-white/70 absolute top-0 bottom-0 right-5 rounded-full my-auto h-12 aspect-square flex items-center justify-center cursor-pointer select-none"
          @click="arrowImage(true)"
        >
          <NextIcon />
        </div>
      </div>
      <div class="xl:flex hidden gap-6 mt-4">
        <div
          class="rounded-xl overflow-hidden border-2 relative aspect-square cursor-pointer"
          :class="image.active && 'border-orange-500'"
          v-for="image in images"
          :key="image.id"
          @click="() => changeImage(image)"
        >
          <div class="absolute inset-0 bg-white/50" v-if="image.active"></div>
          <img :src="image.thumbnail" :alt="image.altText" />
        </div>
      </div>
    </div>
    <div class="py-8 xl:col-span-2">
      <h4 class="text-xl text-orange-600">SNEAKER COMPANY</h4>
      <h1 class="text-4xl xl:text-6xl font-semibold my-4">
        {{ products[0].title }}
      </h1>
      <p class="mt-10 text-slate-700">
        {{ products[0].desc }}
      </p>
      <div class="flex flex-wrap lg:block justify-between items-center my-6">
        <div class="flex gap-2 items-center">
          <span class="text-2xl">$125.00</span>
          <span
            class="inline-block py-0.5 px-1 bg-orange-100 text-orange-600 font-semibold rounded-lg"
            >50%</span
          >
        </div>
        <div class="line-through text-slate-600 lg:mt-3">$250.00</div>
      </div>
      <div class="sm:grid grid-cols-3 gap-3">
        <div
          class="bg-slate-100 rounded-lg sm:mb-0 mb-3 flex flex-wrap items-center justify-between"
        >
          <div
            class="p-6 cursor-pointer border-r-2 border-solid border-slate-200"
          >
            <MinusIcon />
          </div>
          <div class="px-8">1</div>
          <div
            class="p-6 cursor-pointer border-l-2 border-solid border-slate-200"
          >
            <PlusIcon />
          </div>
        </div>
        <div
          class="flex gap-2 col-span-2 items-center rounded-lg text-white bg-orange-500 justify-center p-4 basis-2/3"
        >
          <span><CartIcon class-name="fill-white" /></span>
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
import { reactive, ref } from "vue";
import MinusIcon from "@/components/svgs/icons/Minus.vue";
import PlusIcon from "@/components/svgs/icons/Plus.vue";
import CartIcon from "@/components/svgs/icons/Cart.vue";
import PreviousIcon from "@/components/svgs/icons/Previous.vue";
import NextIcon from "@/components/svgs/icons/Next.vue";

const products =
  reactive([
    {
      id: 1,
      company: "SNEAKER COMPANY",
      title: "Fall Limited Edition Sneakers",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi culpa dolor, ullam repellat, voluptate perferendis nisi molestias delectus ipsam maiores et, fugiat aspernatur voluptatem numquam eos neque quis harum!",
      price: 250.00,
      offer: 50,
      count: 1
    },
    {
      id: 2,
      company: "Nested COMPANY",
      title: "Provide Sense Production",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi culpa dolor, ullam repellat, voluptate perferendis nisi molestias delectus ipsam maiores et, fugiat aspernatur voluptatem numquam eos neque quis harum!",
      price: 150.00,
      offer: 20,
      count: 1
    }
  ]);
const images = reactive([
  {
    id: 1,
    image: "/src/assets/products/product-1/product.jpg",
    thumbnail: "/src/assets/products/product-1/product-thumbnail.jpg",
    altText: "product 1",
    active: true,
  },
  {
    id: 2,
    image: "/src/assets/products/product-2/product.jpg",
    thumbnail: "/src/assets/products/product-2/product-thumbnail.jpg",
    altText: "product 2",
    active: false,
  },
  {
    id: 3,
    image: "/src/assets/products/product-3/product.jpg",
    thumbnail: "/src/assets/products/product-3/product-thumbnail.jpg",
    altText: "product 3",
    active: false,
  },
  {
    id: 4,
    image: "/src/assets/products/product-4/product.jpg",
    thumbnail: "/src/assets/products/product-4/product-thumbnail.jpg",
    altText: "product 4",
    active: false,
  },
]);
const activeImage = ref(images.find((image) => image.active === true));
const changeImage = (imgObj) => {
  activeImage.value.active = false;
  imgObj.active = true;
  activeImage.value = imgObj;
};
const arrowImage = (next = true) => {
  // console.log(images.indexOf(activeImage.value));
  if (next && images.indexOf(activeImage.value) == images.length - 1) {
    activeImage.value = images[0];
  } else if (!next && images.indexOf(activeImage.value) == 0) {
    activeImage.value = images[images.length - 1];
  } else if (next) {
    activeImage.value = images[images.indexOf(activeImage.value) + 1];
  } else {
    activeImage.value = images[images.indexOf(activeImage.value) - 1];
  }
  console.log(activeImage.value);
};
// console.log(activeImage);
</script>
