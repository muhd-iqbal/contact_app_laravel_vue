<template>
    <div class="mb-3">
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
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    placeholder:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true,
    }
})

const emit = defineEmits([
    "update:modelValue"
]);
</script>

<style scoped></style>