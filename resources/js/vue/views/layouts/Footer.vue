<template>
  <footer class="main-footer fixed inset-x-0 bottom-0">
    <div class="bottom-0 right-0"></div>
      <div class="w-full max-w-md mx-auto">
        <div class="px-7 bg-white shadow-lg rounded-2xl sm:mb-5">
          <div class="flex">
            <div class="flex-1 group cursor-pointer">
              <RouterLink :to="{ name: 'home' }"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                <span class="block px-1 pt-1 pb-2">
                  <font-awesome-icon icon="home" />
                  <span class="block text-xs pb-1">Home</span>
                </span>
              </RouterLink>
            </div>
            <div class="flex-1 group">
              <RouterLink :to="{ name: 'add-record' }"
                class="flex items-end justify-center text-center mx-auto pl-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                <span class="block px-1 pt-1 pb-2">
                  <font-awesome-icon icon="list" />
                  <span class="block text-xs pb-1">Records</span>
                </span>
              </RouterLink>
            </div>
            <div class="flex-1 group sm:hidden">
              <RouterLink :to="{ name: 'add-record' }"
                class="flex items-end justify-center text-center mx-auto pt-2 w-full text-gray-400">
                <span class="block px-3 pt-1 pb-2 bg-green-600  hover:bg-green-500 rounded-full -translate-y-5 scale-150">
                  <font-awesome-icon icon="plus" class="text-white translate-y-0.5" />
                  <!-- <span class="block text-xs pb-1">Records</span> -->
                </span>
              </RouterLink>
            </div>
            <div class="flex-1 group">
              <a href="#"
                class="flex items-end justify-center text-center mx-auto pr-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                <span class="block px-1 pt-1 pb-2">
                  <font-awesome-icon icon="search"/>
                  <span class="block text-xs pb-1">Search</span>
                </span>
              </a>
            </div>
            <div class="flex-1 group">
              <RouterLink :to="{ name: 'settings' }"
                class="flex items-end justify-center text-center mx-auto px-4 pt-2 w-full text-gray-400 group-hover:text-indigo-500 border-b-2 border-transparent group-hover:border-indigo-500">
                <span class="block px-1 pt-1 pb-2">
                  <font-awesome-icon icon="gear"/>
                  <!-- <i class="far fa-cog text-2xl pt-1 mb-1 block"></i> -->
                  <span class="block text-xs pb-1">Settings</span>
                </span>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
     
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style>
body {
  font-family: "Poppins", sans-serif;
}

.hover\:w-full:hover {
  width: 100%;
}

.group:hover .group-hover\:w-full {
  width: 100%;
}

.group:hover .group-hover\:inline-block {
  display: inline-block;
}

.group:hover .group-hover\:flex-grow {
  flex-grow: 1;
}
</style>
