<script setup>
import { reactive, ref } from "vue";
import cartIcon from "@/components/svgs/icons/Cart.vue";
import bucket from "@/components/svgs/icons/Delete.vue";
const navItems = reactive([
  { id: 1, title: "Collections", className: "nav-item", target: "/" },
  { id: 2, title: "Men", className: "nav-item", target: "/" },
  { id: 3, title: "Women", className: "nav-item", target: "/" },
  { id: 4, title: "About", className: "nav-item", target: "/" },
  { id: 5, title: "Contact", className: "nav-item", target: "/" },
]);

let whiteBoxFlag = ref(false);
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
      <cartIcon
        class="relative fill-slate-600 icone-sabad select-none cursor-pointer"
        @click="whiteBoxFlag = !whiteBoxFlag"
      />
      <div v-if="whiteBoxFlag" class="box-white">
        <div class="box-white__top">
          <p class="box-white__top--text">Cart</p>
        </div>
        <div class="box-white__bottom">
          <!-- <p class="box-white__bottom--text">Your cart is empty.</p> -->
          <!-- the top line show when basket is empty -->
          <div class="product-wrapper">
            <div class="product-wrapper__picture">
              <img
                src="../../assets/products/product-1/product-thumbnail.jpg"
                alt=""
                class="product-wrapper__picture--img"
              />
            </div>
            <div class="product-wrapper__title-price">
              <div class="product-wrapper__title">fall limited edition sneakers</div>
              <div class="product-wrapper__price"><span class="product-wrapper__title">$125.00 * 3<span class="product-wrapper__price--bold">$375.00</span></span></div>
            </div>
            <div class="product-wrapper__icon">
              <bucket></bucket>
            </div>
          </div>
          <div class="button-wrapper">
            <button class="button-wrapper--button">Checkout</button>
          </div>
        </div>
      </div>
      <div>
        <img src="@/assets/avatars/avatar-1.png" class="w-12" />
      </div>
    </div>
  </header>
</template>
<style scoped>
/* Card Empty */

.box-white__bottom--text {
  @apply font-bold text-sm text-[hsl(219,9%,45%)];
}

/* Card Empty */
.colors {
  color: hsl(26, 100%, 55%);
  color: hsl(25, 100%, 94%);
  color: hsl(220, 13%, 13%);
  color: hsl(219, 9%, 45%);
  color: hsl(220, 14%, 75%);
  color: hsl(223, 64%, 98%);
  color: hsl(0, 0%, 100%);
}
/* Card Shop */
.box-white {
  @apply bg-white w-80 h-52 shadow-[2px_11px_25px_hsl(220,14%,75%)] rounded-md absolute  top-20 right-5;
}
.box-white__top {
  @apply flex items-center h-1/5 pl-6 border-b border-solid border-[hsl(220,14%,75%)];
}
.box-white__top--text {
  @apply font-bold;
}
/* .box-white__bottom{
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
}  */
.box-white__bottom{
  @apply h-4/5 flex items-center flex-col
} 
.product-wrapper{
  @apply pt-4 flex justify-around items-center w-80
}
.product-wrapper__picture{
  @apply basis-2/12 rounded-md overflow-hidden
}
.product-wrapper__picture--img {
  @apply w-full;
}
.product-wrapper__title-price{
  @apply flex flex-col basis-1/2 
}
.product-wrapper__title{
  font-size: 14px;
  /* font-weight: bold; */
  color: hsl(219, 9%, 45%);
}
.product-wrapper__price{
  
}
.product-wrapper__price--bold{
  font-weight: bold;
  margin-left: 5px;
  color: black;
}
.product-wrapper__icon{
  flex-basis: 15%;
  display: flex;
  justify-content: center;
}
.button-wrapper{
  text-align: center;
  padding-top: 2.3rem;
}
.button-wrapper--button{
  background-color: rgb(255, 145, 0);
  width: 19rem;
  height: 3rem;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  @apply text-sm font-bold text-[hsl(219,9%,45%)]
}
.product-wrapper__icon{
  @apply basis-1/6 flex justify-center
}
/* Card Shop */
.header {
  @apply flex justify-between container py-6 border-b border-solid border-b-slate-400 xl:mb-10;
}
.header_left-side {
  @apply flex gap-x-7 items-center;
}
.logobar {
  @apply font-bold text-2xl font-serif;
}
.nav-list {
  @apply flex gap-x-5;
}
.nav-item {
  @apply text-slate-600 hover:text-black;
}
.header_right-side {
  @apply flex items-center gap-7;
}
</style>
