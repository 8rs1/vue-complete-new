<template>
    <div class="bg-gray-100 px-2 text-center">
        <div class="h-screen flex flex-col justify-center items-center">
            <h1 class="text-8xl font-extrabold text-orange-500">404</h1>
            <p class="text-4xl font-medium text-gray-800">Not Found Error</p>
            <p class="text-xl text-gray-800 mt-4">We apologize for the inconvenience. Please try again later.</p>
        </div>
    </div>
    <!-- page sign in -->
    <!-- page sign in -->
    <!-- page sign in -->
    <!-- page sign in -->
    <div class="box-signin">
        <div class="box-signin__title">
            <h1>Get started with your business today.</h1>
        </div>
        <div class="box-signin__text">
            <p>In five minutes, get custom-tailored finance optsins, insights, and real-time any business data.</p>
        </div>
        <div class="box-signin__wrapper-inputs">
            <input type="email" placeholder="Email Address">
            <input type="password" placeholder="Password">
        </div>
        <div class="box-signin__wrapper-buttons">
            <button type="submit">Sign up</button>
        </div>
        <div class="box-signin__abaut">
            <small>By signing up, you agree to the<a href="#">Terms of Service</a></small>
        </div>
        <div class="box-signin__question">
            <p>Already have an account?<a href="#">Log in</a></p>
        </div>
    </div>
</template>
<style scoped>
.box-signin{
    @apply flex items-center flex-col;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.box-signin__title{
    @apply max-w-[17rem] text-center mb-4;
}
.box-signin__title h1{
    @apply text-[2rem] font-bold;
}
.box-signin__text{
    @apply max-w-[25rem] text-center mb-4 ;
}
.box-signin__wrapper-inputs{

}
.box-signin__wrapper-inputs input:nth-child(1n){
    @apply block w-72 h-10 mb-6 rounded-[2px] outline-[hsl(26,100%,55%)] pl-[10px] box-border;
    border: 1px solid gray;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.box-signin__wrapper-buttons{

}
.box-signin__wrapper-buttons button{
    @apply w-72 h-10 bg-[hsl(26,100%,55%)] border-none rounded-[2px];
    color: white;
}
.box-signin__abaut{
    @apply mt-4;
}
.box-signin__question{
    margin-top: 5rem;
    @apply mt-20 ; 
}
a:nth-child(1n){
    @apply ml-[3px];
    text-decoration: none;
    color: hsl(26, 100%, 55%);
}
</style>