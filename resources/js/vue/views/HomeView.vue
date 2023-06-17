<template>
  <Main>
    <template #content>
      <div
        class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3 mx-5 lg:mx-40 xl:mx-72"
      >
        <div
          class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
          style="
            background-image: url('../../assets/dist/img/bg-card-dashboard.jpg');
          "
        >
          <div
            class="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"
          ></div>
          <div
            class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center"
          >
            <div>
              <h3 class="text-center text-white text-lg">Current Balance</h3>
              <h3 class="text-center text-white text-3xl mt-2 font-bold">
                RM 27,580
              </h3>
              <div class="flex space-x-4 mt-4">
                <button
                  class="block uppercase mx-auto shadow bg-white text-indigo-600 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                >
                  Transfer
                </button>
                <button
                  class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-4 rounded font-bold"
                >
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
          style="
            background-image: url(../../assets/dist/img/bg-card-dashboard.jpg);
          "
        >
          <div
            class="absolute inset-0 bg-yellow-600 bg-opacity-75 transition duration-300 ease-in-out"
          ></div>
          <div
            class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center"
          >
            <div>
              <div class="text-white text-lg flex space-x-2 items-center">
                <div class="bg-white rounded-md p-2 flex items-center">
                  <i class="fas fa-toggle-off fa-sm text-yellow-300"></i>
                </div>
                <p>Finished Appt</p>
              </div>
              <h3 class="text-white text-3xl mt-2 font-bold">120</h3>
              <h3 class="text-white text-lg mt-2 text-yellow-100">
                4 not confirmed
              </h3>
            </div>
          </div>
        </div>
        <div
          class="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
          style="
            background-image: url(../../assets/dist/img/bg-card-dashboard.jpg);
          "
        >
          <div
            class="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"
          ></div>
          <div
            class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center"
          >
            <div>
              <div class="text-white text-lg flex space-x-2 items-center">
                <div class="bg-white rounded-md p-2 flex items-center">
                  <i class="fas fa-clipboard-check fa-sm text-blue-800"></i>
                </div>
                <p>Finished Appt</p>
              </div>
              <h3 class="text-white text-3xl mt-2 font-bold">72</h3>
              <h3 class="text-white text-lg mt-2">
                3.4%
                <span class="font-semibold text-blue-200">vs last month</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Main>
</template>

<script setup lang="ts">
import Main from "@/views/layouts/Main.vue";
</script>
