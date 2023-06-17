<template>
  <div class="flex flex-col mb-4">
    <label
      for="name"
      class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
      >Name:</label
    >
    <div class="relative">
      <div
        class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
      >
        <slot name="icon" />
      </div>

      <input
        id="name"
        :type="type"
        name="name"
        class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
        :placeholder="placeholder"
        @input="emit('update:modelValue', ($event as any).target.value)"
        :value="props.modelValue"
      />
    </div>
    <slot name="error" />
  </div>

  <!-- <div class="mb-3">
        <div class="input-group ">
            <input :type="type" class="form-control" :placeholder="placeholder"
                @input="emit('update:modelValue', ($event as any).target.value)" :value="props.modelValue">
            <div class="input-group-append">
                <div class="input-group-text">
                    <slot name="icon"/>
                </div>
            </div>
        </div>
        <slot name="error"/>
    </div> -->
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
