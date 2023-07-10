<template>
    <Main>
        <template #content>
            <div class="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
                <div class="bg-white rounded shadow p-6 m-4 w-full md:w-4/6">
                    <div class="mb-4">
                        <h1 class="text-grey-darkest">Shopping List</h1>
                        <div class="flex mt-4">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                                placeholder="Add Shopping List" @keyup="suggestList" v-model="shoppingItem">
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
                                placeholder="Budget">
                            <div class="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker">
                                <month-picker-input :no-default="true" v-model="month"
                                    placeholder="Month"></month-picker-input>
                            </div>
                            <button
                                class="flex-no-shrink p-2 border-2 rounded text-teal border-tealhover:bg-teal">Add</button>
                        </div>
                        <Transition name="slide-fade">
                            <div v-if="shoppingItem.length > 0" class="mt-4 flex gap-2">
                                <a :href="lazada" target="_blank"
                                    class="flex items-center gap-2 p-2 border-2 rounded-md text-teal border-teal bg-white hover:invert">
                                    <img src="../../../assets/dist/img/favicon/lazada.png" alt="" title="Search on Lazada">
                                    Ladaza
                                </a>
                                <a :href="shopee" target="_blank"
                                    class="flex items-center gap-2 p-2 border-2 rounded-md text-teal border-teal bg-white hover:invert">
                                    <img src="../../../assets/dist/img/favicon/shopee.png" alt="" title="Search on Shopee">
                                    Shopee
                                </a>
                                <a :href="mudah" target="_blank"
                                    class="flex items-center gap-2 p-2 border-2 rounded-md text-teal border-teal bg-white hover:invert">
                                    <img src="../../../assets/dist/img/favicon/mudah.png" alt="" title="Search on Mudah">
                                    Mudah
                                </a>
                                <a :href="carousell" target="_blank"
                                    class="flex items-center gap-2 p-2 border-2 rounded-md text-teal border-teal bg-white hover:invert">
                                    <img src="../../../assets/dist/img/favicon/carousell.ico" alt=""
                                        title="Search on Carousell">
                                    Carousell
                                </a>
                                <a :href="lelong" target="_blank"
                                    class="flex items-center gap-2 p-2 border-2 rounded-md text-teal border-teal bg-white hover:invert">
                                    <img src="../../../assets/dist/img/favicon/lelong.ico" alt="" title="Search on Lelong">
                                    Lelong
                                </a>
                            </div>
                        </Transition>
                    </div>
                    <div>
                        <div class="flex mb-4 items-center">
                            <p class="w-full text-grey-darkest">Add another component to Tailwind Components</p>
                            <button
                                class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button>
                            <button
                                class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                        </div>
                        <div class="flex mb-4 items-center">
                            <p class="w-full line-through text-green">Submit Todo App Component to Tailwind Components</p>
                            <button
                                class="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey">Not
                                Done</button>
                            <button
                                class="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Main>
</template>
  
<script setup lang="ts">
import { defineComponent, ref } from 'vue';
import Main from '@/views/layouts/Main.vue';
import { MonthPickerInput } from 'vue-month-picker'


const shoppingItem = ref('');
let month = ref('');
let lazada = ref('');
let shopee = ref('');
let mudah = ref('');
let carousell = ref('');
let lelong = ref('');

const suggestList = () => {
    lazada.value = 'https://www.lazada.com.my/catalog/?q=' + shoppingItem.value;
    shopee.value = 'https://shopee.com.my/search?keyword=' + shoppingItem.value;
    mudah.value = 'https://www.mudah.my/malaysia/all?q=' + shoppingItem.value;
    carousell.value = 'https://www.carousell.com.my/search/' + shoppingItem.value;
    lelong.value = 'https://www.lelong.com.my/catalog/all/list?TheKeyword=' + shoppingItem.value;
}

</script>
  
<style scoped>
.slide-fade-enter-active {
    transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

img {
    width: 30px;
    height: 30px;
}

.month-picker-input[data-v-9941001a] {
    padding: none;
    /* font-size: 0.85em; */
    border-radius: 5px;
    outline: none;
    /* border: 1px solid rgba(0, 0, 0, 0.15); */
    transition: all 350ms cubic-bezier(0.165, 0.84, 0.44, 1);
}
</style>
  