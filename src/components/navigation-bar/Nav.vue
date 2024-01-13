<script setup>
import { reactive } from "vue";
import cartIcon from "@/components/svgs/icons/Cart.vue";
const navItems = reactive([
  { id: 1, title: "Collections", className: "nav-item", target: "/" },
  { id: 2, title: "Men", className: "nav-item", target: "/" },
  { id: 3, title: "Women", className: "nav-item", target: "/" },
  { id: 4, title: "About", className: "nav-item", target: "/" },
  { id: 5, title: "Contact", className: "nav-item", target: "/" },
]);
</script>
<template>
  <header class="header">
    <div class="header_left-side">
      <div class="logobar">sneakers</div>
      <nav>
        <ul class="nav-list">
          <li
            v-for="navItem in navItems"
            :key="navItem.id"
            :class="navItem.className"
          >
            <RouterLink :to="navItem.target">{{ navItem.title }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
    <div class="header_right-side">
      <div>
        <cartIcon class="fill-slate-600"/>
      </div>
      <div>
        <img src="@/assets/avatars/avatar-1.png" class="w-12" />
      </div>
    </div>
  </header>
</template>
<style scoped>
.header {
  @apply flex justify-between container py-6 border-b border-solid border-b-slate-400 mb-10
}
.header_left-side {
  @apply flex gap-x-7 items-center
}
.logobar {
  @apply font-bold text-2xl font-serif
}
.nav-list {
  @apply flex gap-x-5
}
.nav-item {
  @apply text-slate-600 hover:text-black
}
.header_right-side {
  @apply flex items-center gap-4
}
</style>