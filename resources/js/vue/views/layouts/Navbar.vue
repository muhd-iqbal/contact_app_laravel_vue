<template>
    
<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <div></div>
  <div class="flex items-center md:order-2">
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <RouterLink :to="{name:'home'}" class="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Budget Tracker</span>
  </RouterLink>
  </div>
  </div>
</nav>

</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>