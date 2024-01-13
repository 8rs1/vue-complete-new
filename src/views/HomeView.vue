<template>
  <main class="grid grid-cols-2 gap-28 container">
    <div class="grid grid-cols-4 gap-6">
      <div class="col-span-4 rounded-xl overflow-hidden">
        <img :src="activeImage.image" :alt="activeImage.altText">
      </div>
      <div class="rounded-xl overflow-hidden border-2 relative aspect-square cursor-pointer" :class="image.active && 'border-orange-500'" v-for="image in images" :key="image.id" @click="()=>changeImage(image)">
        <div class="absolute inset-0 bg-white/50" v-if="image.active"></div>
        <img :src="image.thumbnail" :alt="image.altText" />
      </div>
    </div>
    <div class="py-8">
      <h4 class="text-xl text-orange-600">SNEAKER COMPANY</h4>
      <h1 class="text-6xl font-semibold my-4">Fall Limited Edition Sneakers</h1>
      <p class="mt-10 text-slate-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo quasi culpa dolor, ullam repellat, voluptate perferendis nisi molestias delectus ipsam maiores et, fugiat aspernatur voluptatem numquam eos neque quis harum!</p>
      <div class="flex gap-2 items-center mt-6">
        <span class="text-2xl">$125.00</span>
        <span class="inline-block py-0.5 px-1 bg-orange-100 text-orange-700 font-semibold rounded-lg">50%</span>
      </div>
      <div class="line-through text-slate-600 mb-7 mt-3">
        $250.00
      </div>
      <div class="grid grid-cols-3 gap-3">
        <div class="bg-slate-100 rounded-lg flex items-center justify-between overflow-hidden">
          <div class="p-6 cursor-pointer"><MinusIcon /></div>
          <div class="px-8">1</div>
          <div class="p-6 cursor-pointer"><PlusIcon /></div>
        </div>
        <div class="flex gap-2 col-span-2 items-center rounded-lg text-white bg-orange-500 justify-center p-4 basis-2/3">
          <span><CartIcon class-name="fill-white"/></span>
          <span>Add to cart</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";
import MinusIcon from '@/components/svgs/icons/Minus.vue';
import PlusIcon from '@/components/svgs/icons/Plus.vue';
import CartIcon from '@/components/svgs/icons/Cart.vue';
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
const activeImage = ref(images.find(image=> image.active===true));
const changeImage = (imgObj)=> {
  activeImage.value.active = false;
  imgObj.active = true;
  activeImage.value = imgObj;
}
// console.log(activeImage);
</script>
