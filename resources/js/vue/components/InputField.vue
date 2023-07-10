<template>
  <div :class="'w-full px-4 ' + props.classExtend">
    <div class="relative w-full mb-3">
      <label
        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
        htmlfor="grid-password"
      >
        {{ props.name }}
      </label>
      <input
        :type="props.type"
        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        :value="props.modelValue"
        :placeholder="props.placeholder"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import { defineProps } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  classExtend: {
    type: String,
    default: 'lg:w-6/12',
  }
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
