<script setup>
import { reactive } from "vue";
import cartIcon from "@/components/svgs/icons/Cart.vue";
import bucket from "@/components/svgs/icons/Delete.vue"
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
        <cartIcon class="relative fill-slate-600 icone-sabad" />
        <!-- start 1 -->
        <!-- <div class="box-white">
          <div class="box-white__top">
            <p class="box-white__top--text">Cart</p>
          </div>
          <div class="box-white__bottom">
            <p class="box-white__bottom--text">Your cart is empty.</p>
          </div>
        </div> -->
        <!-- start 1 -->
        <!-- start 2 -->
          <div class="box-white">
          <div class="box-white__top">
            <p class="box-white__top--text">Cart</p>
          </div>
          <div class="box-white__bottom">
            <div class="product-wrapper">
              <div class="product-wrapper__picture">
                <img src="../../assets/products/product-1/product-thumbnail.jpg" alt="" class="product-wrapper__picture--img">
              </div>
              <div class="product-wrapper__title-price">
                <div class="product-wrapper__title">fall limited edition sneakers</div>
                <div class="product-wrapper__price">$125.00 * 3 $375.00</div>
              </div>
              <div class="product-wrapper__icon">
                <bucket></bucket>
              </div>
            </div>
            <div class="button-wrapper"></div>
          </div>
        </div>
        <!-- start 2 -->
      <div>
        <img src="@/assets/avatars/avatar-1.png" class="w-12" />
      </div>
    </div>
  </header>
</template>
<style scoped>
/* Card Empty */

/* .icone-sabad:hover + .box-white {
  display: block;
}
.box-white{
  display: none;
  background-color: rgb(255, 255, 255);
  width: 20rem;
  height: 13rem;
  box-shadow: 2px 11px 25px hsl(220, 14%, 75%);
  border-radius: 6px;
  position: absolute;
  top: 5rem;
  right: 1.2rem;
}
.box-white__top{
  display: flex;
  align-items: center;
  height: 20%;
  padding-left: 1.4rem;
  border-bottom: 1px solid hsl(220, 14%, 75%);
}
.box-white__top--text{
  font-weight: bold;
}
.box-white__bottom{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80%;

} 
.box-white__bottom--text{
  font-weight: bold;
  font-size: 15px;
  color:hsl(219, 9%, 45%);
} */

/* Card Empty */
.colors{
  color : hsl(26, 100%, 55%);
  color : hsl(25, 100%, 94%);
  color : hsl(220, 13%, 13%);
  color : hsl(219, 9%, 45%);
  color : hsl(220, 14%, 75%);
  color : hsl(223, 64%, 98%);
  color : hsl(0, 0%, 100%);
}
/* Card Shop */
/* .icone-sabad:hover + .box-white {
  display: block;
} */
.box-white{
  /* display: none; */
  background-color: rgb(255, 255, 255);
  width: 21rem;
  height: 13rem;
  box-shadow: 2px 11px 25px hsl(220, 14%, 75%);
  border-radius: 6px;
  position: absolute;
  top: 5rem;
  right: 1.2rem;
}
.box-white__top{
  display: flex;
  align-items: center;
  height: 20%;
  padding-left: 1.4rem;
  border-bottom: 1px solid hsl(220, 14%, 75%);
}
.box-white__top--text{
  font-weight: bold;
}














.box-white__bottom{
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
} 
.product-wrapper{
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 20rem;
}
.product-wrapper__picture{
  flex-basis: 15%;
  border-radius: 4px;
  overflow: hidden;
}
.product-wrapper__picture--img {
  width: 100%;
}
.product-wrapper__title-price{
  display: flex;
  flex-direction: column;
  flex-basis: 57%;
}
.product-wrapper__title{
  font-size: 14px;
  font-weight: bold;
  color: hsl(219, 9%, 45%);
}
.product-wrapper__price{

}
.product-wrapper__icon{
  flex-basis: 15%;
  display: flex;
  justify-content: center;
}
.button-wrapper{

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
