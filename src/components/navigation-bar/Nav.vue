<script setup>
import { reactive, ref, onMounted } from "vue";
// import { useRoute } from "vue-router";
import cartIcon from "@/components/svgs/icons/Cart.vue";
import bucket from "@/components/svgs/icons/Delete.vue";
import menuH from "@/components/svgs/icons/Menu.vue";
// get data
const products = JSON.parse(localStorage.getItem("products"));
// onMounted(() => {
// el.value // <div>
const basketItems = ref(products.filter((product) => product.count > 0));
console.log(basketItems.value);
// });
import close from "@/components/svgs/icons/Close.vue";
const navItems = reactive([
  { id: 1, title: "Collections", className: "nav-item", target: "/" },
  { id: 2, title: "Men", className: "nav-item", target: "/" },
  { id: 3, title: "Women", className: "nav-item", target: "/" },
  { id: 4, title: "About", className: "nav-item", target: "/" },
  { id: 5, title: "Contact", className: "nav-item", target: "/" },
]);

let whiteBoxFlag = ref(false);

function deleteProductFromBasket(productObj) {
  basketItems.value.forEach((product) => {
    console.log(product);
    console.log(productObj);
    if (product.id === productObj.id) {
      product.count = 0;
      console.log(true);
    }
  });
  localStorage.setItem("products", JSON.stringify(basketItems.value));

  // console.log(basketItems);
  // const product = ref(
  //   basketItems.value.filter((product) => product == productObj)
  // );
  // product.value[0].count = 0;
}
const menuFlag = ref(false);
</script>
<template>
  <header class="header">
    <div class="header_left-side">
      <Transition>
        <div class="menu-left bg-red-700 py-4 pl-[1.3rem] pr-20 fixed left-0 bottom-0 top-0 z-20" v-if="menuFlag">
          <div class="menu-left__icon" @click="menuFlag = !menuFlag">
            <close />
          </div>
          <div class="menu-left__nav">
            <ul class="menu-left--menu">
              <li class="menu-left--item">Collections</li>
              <li class="menu-left--item">Men</li>
              <li class="menu-left--item">Women</li>
              <li class="menu-left--item">About</li>
              <li class="menu-left--item">Contact</li>
            </ul>
          </div>
        </div>
      </Transition>
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
        <div @click="menuFlag = !menuFlag">
          <menuH class="menu-icon" />
        </div>
      </nav>
    </div>
    <div class="header_right-side">
      <cartIcon
        class="fill-slate-600 icone-sabad select-none cursor-pointer"
        @click="whiteBoxFlag = !whiteBoxFlag"
      />
      <div v-if="whiteBoxFlag" class="box-white">
        <div class="box-white__top">
          <p class="box-white__top--text">Cart</p>
        </div>
        <div class="box-white__bottom">
          <!-- <p class="box-white__bottom--text">Your cart is empty.</p> -->
          <!-- the top line show when basket is empty -->
          <div class="products-wrapper">
            <div
              class="product-wrapper"
              v-for="basketItem in basketItems"
              :key="basketItem.id"
            >
              <div class="product-wrapper__picture">
                <img
                  :src="'../../..' + basketItem.thumbnail"
                  :alt="basketItem.title"
                  class="product-wrapper__picture--img"
                />
              </div>
              <div class="product-wrapper__title-price">
                <div class="product-wrapper__title">
                  {{ basketItem.title }}
                </div>
                <div class="product-wrapper__price">
                  ${{
                    (basketItem.price * (basketItem.offer / 100)).toFixed(2)
                  }}
                  x {{ basketItem.count }} ${{
                    (
                      (basketItem.price * (basketItem.offer / 100)).toFixed(2) *
                      basketItem.count
                    ).toFixed(2)
                  }}
                </div>
              </div>
              <div
                class="product-wrapper__icon group cursor-pointer"
                @click="deleteProductFromBasket(basketItem)"
              >
                <bucket className="fill-[#C3CAD9] group-hover:fill-red-500" />
              </div>
            </div>
            <div
              class="button-wrapper"
              v-for="basketItem in basketItems"
              :key="basketItem.id"
            >
              <RouterLink to="/checkout">
                <button class="button-wrapper--button">Checkout</button>
              </RouterLink>
            </div>
            <!-- <div class="product-wrapper">
              <div class="product-wrapper__picture">
                <img
                  src="../../assets/products/product-1/product-thumbnail.jpg"
                  alt=""
                  class="product-wrapper__picture--img"/>
              </div>
              <div class="product-wrapper__title-price">
                <div class="product-wrapper__title">
                  fall limited edition sneakers
                </div>
                <div class="product-wrapper__price">$125.00 x 3 $375.00</div>
              </div>
              <div class="product-wrapper__icon">
                <bucket fill="" />
              </div>
            </div> -->
          </div>
          <!-- <div class="product-wrapper">
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
          </div> -->
        </div>
      </div>
      <!-- menu-bar start -->
      <!-- menu-bar end -->
      <div>
        <img src="@/assets/avatars/avatar-1.png" class="w-12" />
      </div>
    </div>
  </header>
</template>
<style scoped>
/* transition */
.v-enter-active,
.v-leave-active {
  @apply transition-all duration-300 ease-linear;
}
.v-enter-from,
.v-leave-to {
  @apply -left-40;
}
/* .v-enter-to,
.v-leave-from {
  @apply left-0
} */
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
  /* h-52 */
  @apply bg-white z-10 w-80 shadow-[2px_11px_25px_hsl(220,14%,75%)] rounded-md absolute top-full right-5
  max-[360px]:absolute top-[4rem] right-[3px] w-[18rem];
}
.box-white__top {
  @apply flex items-center py-3 pl-6 border-b border-solid border-[hsl(220,14%,75%)];
}
.box-white__top--text {
  @apply font-bold;
}
.box-white__bottom {
  /* @apply flex items-center flex-col; */
  @apply relative min-h-24;
}
/* .box-white__bottom--text {
  @apply absolute m-auto text-center;
} */
.products-wrapper {
  @apply py-3;
}
/* .box-white__bottom{
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
}  */
.product-wrapper {
  @apply flex justify-between items-center mb-2 px-3;
}
.box-white__bottom {
  @apply h-4/5 flex items-center flex-col;
}
.product-wrapper {
  @apply pt-4 flex justify-around items-center w-80;
}
.product-wrapper__picture {
  @apply basis-12 rounded-md overflow-hidden;
}
.product-wrapper__picture {
  @apply basis-2/12 rounded-md overflow-hidden;
}
.product-wrapper__picture--img {
  @apply w-full;
}
.product-wrapper__title {
  @apply text-sm font-bold text-[hsl(219,9%,45%)];
}
.product-wrapper__title-price {
  @apply flex flex-col basis-[53%];
}
.product-wrapper__icon {
  @apply flex justify-center;
}
.product-wrapper__title {
  @apply text-[14px];
  color: hsl(219, 9%, 45%);
}
.product-wrapper__price {
}
.product-wrapper__price--bold {
  @apply font-bold ml-[5px];
  color: black;
}
.product-wrapper__icon {
  @apply basis-[15%] flex justify-center;
}
.button-wrapper {
  @apply text-center pt-6;
}

.button-wrapper--button {
  @apply bg-orange-600 w-[85%] h-14 rounded-[10px] font-bold text-[15px];
  /* background-color: rgb(255, 145, 0); */
  color: white;
}
.button-wrapper {
  @apply pt-5 text-white  text-center py-2 font-semibold rounded-md;
}
/* Card Shop */
.header {
  @apply flex justify-between items-center container py-6 border-b border-solid border-b-slate-400 xl:mb-10 mb-8 max-[650px]:px-8 max-[380px]:px-2;
}
.header_left-side {
  @apply flex gap-x-6 items-center max-[650px]:flex-row-reverse;
}
.logobar {
  @apply font-bold text-2xl font-serif;
}
.nav-list {
  @apply flex gap-x-5 max-[650px]:hidden;
}
/* .nav-item {
  @apply text-slate-600 hover:text-black;
} */
.header_right-side {
  @apply flex items-center gap-7 relative;
}
/* .menu-left {
  @apply bg-red-700 py-4 pl-[1.3rem] pr-20 fixed left-0 bottom-0 top-0 z-10;
} */
.menu-left__icon {
  @apply mr-8 mt-4 mb-12 w-fit aspect-square;
}

.menu-left--menu {
  @apply p-0;
}
.menu-left--item {
  @apply mb-8 font-bold;
}
.menu-icon {
  @apply sm:hidden block;
}
</style>
