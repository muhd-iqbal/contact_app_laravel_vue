<template>
   <div
          class="background relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
        >
          <div
            :class="`absolute inset-0 bg-opacity-75 transition duration-300 ease-in-out ${props.backgroundColor}`"
          ></div>
          <div
            class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center"
          >
            <div>
              <div class="text-white text-lg flex space-x-2 items-center">
                <div class="bg-white rounded-md p-2 flex items-center">
                  <font-awesome-icon :icon="props.icon" :class="props.color" />
                </div>
                <p>{{ props.title }}</p>
              </div>
              <h3 class="text-white text-3xl mt-2 font-bold">{{ props.value }}</h3>
              <h3 :class="`text-white text-lg mt-2 ${props.secondaryText}`">
                {{ props.secondaryText }}
              </h3>
            </div>
          </div>
        </div>
  </template>
  
  <script setup lang="ts">
  const props = defineProps({
    title: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    secondaryText: {
      type: String,
      required: true,
    },
    backgroundColor: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    secondaryColor: {
      type: String,
      required: true,
    },
  });
  
  </script>
  
  <style scoped></style>
  