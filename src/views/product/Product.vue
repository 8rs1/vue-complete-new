<template>
  <transition name="alert">
    <MajorShoppingAlert v-if="isMoreThan20Products" />
  </transition>

  <main class="xl:flex gap-x-28 container" v-if="product">
    <div class="flex flex-col items-center">
      <div
        class="col-span-4 relative rounded-xl max-w-[1000px] overflow-hidden aspect-square"
      >
        <img :src="activeImage.src" :alt="activeImage.alternate" />
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
          v-for="image in product.images"
          :key="image.id"
          :class="image.active && 'border-orange-500'"
          @click="() => changeImage(image)"
        >
          <div class="absolute inset-0 bg-white/50" v-if="image.active"></div>
          <img :src="image.thumbnail" :alt="image.altText" />
        </div>
      </div>
    </div>
    <div class="py-8 xl:col-span-2">
      <h4 class="text-xl text-orange-600">{{ product.company }}</h4>
      <h1 class="text-4xl xl:text-6xl font-semibold my-4">
        {{ product.title }}
      </h1>
      <p class="mt-10 text-slate-700">
        {{ product.desc }}
      </p>
      <div class="flex flex-wrap lg:block justify-between items-center my-6">
        <div class="flex gap-2 items-center">
          <span class="text-2xl"
            >${{ (product.price * (product.offer / 100)).toFixed(2) }}</span
          >
          <span
            class="inline-block py-0.5 px-1 bg-orange-100 text-orange-600 font-semibold rounded-lg"
            >{{ product.offer }}%</span
          >
        </div>
        <div class="line-through text-slate-600 lg:mt-3">
          ${{ product.price }}
        </div>
      </div>
      <div class="sm:grid grid-cols-3 gap-3">
        <div
          class="bg-slate-100 rounded-lg sm:mb-0 mb-3 flex flex-wrap items-center justify-between"
        >
          <div
            class="p-6 cursor-pointer border-r-2 border-solid border-slate-200 select-none"
            @click="() => changeCount(false)"
          >
            <MinusIcon />
          </div>
          <div class="px-8">{{ productCount }}</div>
          <div
            class="p-6 cursor-pointer border-l-2 border-solid border-slate-200 select-none"
            @click="() => changeCount(true)"
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
  <div v-else>this product doesn't exist</div>
</template>

<script setup>
// vue
import { reactive, ref, onMounted } from "vue";
import { useRoute } from "vue-router";

// data
// import products from "@/composable/useProducts.js";
const products = JSON.parse(localStorage.getItem("products"));
const currentproduct = products[useRoute().params.id-1]
// icons
import MinusIcon from "@/components/svgs/icons/Minus.vue";
import PlusIcon from "@/components/svgs/icons/Plus.vue";
import CartIcon from "@/components/svgs/icons/Cart.vue";
import PreviousIcon from "@/components/svgs/icons/Previous.vue";
import NextIcon from "@/components/svgs/icons/Next.vue";

// components
import MajorShoppingAlert from "@/components/alerts/MajorShoppingAlert.vue";
const product = ref(currentproduct);
const productCount = ref(null);
const isMoreThan20Products = productCount.value >= 20 ? ref(true) : ref(false);
let fadeAlert = false;
onMounted(() => {
  // console.log(Boolean(localStorage.getItem("product-count")));
  productCount.value = currentproduct.count;
});
function changeCount(increase = true) {
  isMoreThan20Products.value = false;
  if (!increase && productCount.value <= 0) {
    console.log("less than zero!");
  } else if (increase && productCount.value >= 20) {
    isMoreThan20Products.value = true;
    fadeAlert && clearTimeout(fadeAlert);
    fadeAlert = setTimeout(() => {
      isMoreThan20Products.value = false;
    }, 6000);
  } else if (increase) {
    currentproduct.count++
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  } else if (!increase) {
    currentproduct.count--
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
    localStorage.setItem("product-count", Number(productCount.value) - 1);
  }
  productCount.value = currentproduct.count;
}
console.log(Boolean(NaN));
const images = reactive([
  {
    id: 1,
    image: "/src/assets/products/product-1/product.jpg",
    thumbnail: "/src/assets/products/product-1/product-thumbnail.jpg",
    altText: "product 1",
    active: false,
  },
  {
    id: 2,
    image: "/src/assets/products/product-2/product.jpg",
    thumbnail: "/src/assets/products/product-2/product-thumbnail.jpg",
    altText: "product 2",
    active: true,
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
const activeImage = ref(
  product.value.images.find((image) => image.active === true)
);
const changeImage = (imgObj) => {
  activeImage.value.active = false;
  imgObj.active = true;
  activeImage.value = imgObj;
};
const arrowImage = (next = true) => {
  if (
    next &&
    product.value.images.indexOf(activeImage.value) ==
      product.value.images.length - 1
  ) {
    activeImage.value = product.value.images[0];
  } else if (!next && product.value.images.indexOf(activeImage.value) == 0) {
    activeImage.value = product.value.images[product.value.images.length - 1];
  } else if (next) {
    activeImage.value =
      product.value.images[product.value.images.indexOf(activeImage.value) + 1];
  } else {
    activeImage.value =
      product.value.images[product.value.images.indexOf(activeImage.value) - 1];
  }
  console.log(activeImage.value);
};
</script>

<style scoped>
.alert-enter-active,
.alert-leave-active {
  @apply transition-all duration-150 ease-linear;
}
.alert-enter-from,
.alert-leave-to {
  @apply opacity-0;
}
</style>
