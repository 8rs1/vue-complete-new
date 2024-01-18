<template>
  <div class="container flex gap-3">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :image="product.thumbnail"
      :alt="product.altText"
      :company="product.company"
      :title="product.title"
      :desc="product.desc"
      :price="product.price"
      :offer="product.offer"
    />
  </div>
</template>
<script setup>
import ProductCard from "@/components/ProductCard.vue";
import { products } from "@/composable/useProducts.js";
</script>
