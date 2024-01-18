<template>
  <RouterLink :to="{ name: 'product', params: { id: props.id }}">
    <div class="w-72 shadow-xl overflow-hidden rounded-lg">
      <div>
        <img class="block w-full h-full" :src="image" :alt="alt" />
      </div>
      <div class="p-3">
        <div>{{ props.company }}</div>
        <div class="my-1">
          <strong>{{ props.title }}</strong>
        </div>
        <div
          class="h-16 overflow-hidden after:content-[''] after:bg-gradient-to-t after:from-white/60 after:from-40% after:to-transparent after:absolute relative after:bottom-0 after:w-full after:h-10"
        >
          <p>{{ props.desc }}</p>
        </div>
        <div class="mt-4">
          ${{ Math.floor(props.price * (props.offer / 100)) }}
        </div>
        <div class="flex items-center justify-between">
          <div class="line-through text-slate-600">${{ props.price }}</div>
          <div
            class="inline-block rounded-lg py-0.5 px-1 bg-orange-100 text-orange-600"
          >
            {{ props.offer }}%
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
<script setup>
import { useRouter, RouterLink } from "vue-router";
const props = defineProps({
  id: Number,
  image: String,
  alt: String,
  company: String,
  title: String,
  desc: String,
  price: Number,
  offer: Number,
});
// const goToProductPage = () => {
//   useRouter().push({name: "products-container", params: props.id})
// }
</script>
<style scoped></style>
