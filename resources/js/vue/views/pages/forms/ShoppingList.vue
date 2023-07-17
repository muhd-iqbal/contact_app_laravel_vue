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
                                <a v-if="lazada_opt" :href="lazada" target="_blank"
                                    class="flex items-center gap-2 p-2 border-2 rounded-md text-teal border-teal bg-white hover:invert">
                                    <img src="../../../assets/dist/img/favicon/lazada.png" alt="" title="Search on Lazada">
                                    Ladaza
                                </a>
                                <a v-if="shopee_opt" :href="shopee" target="_blank"
                                    class="flex items-center gap-2 p-2 border-2 rounded-md text-teal border-teal bg-white hover:invert">
                                    <img src="../../../assets/dist/img/favicon/shopee.png" alt="" title="Search on Shopee">
                                    Shopee
                                </a>
                                <a v-if="mudah_opt" :href="mudah" target="_blank"
                                    class="flex items-center gap-2 p-2 border-2 rounded-md text-teal border-teal bg-white hover:invert">
                                    <img src="../../../assets/dist/img/favicon/mudah.png" alt="" title="Search on Mudah">
                                    Mudah
                                </a>
                                <a v-if="carousell_opt" :href="carousell" target="_blank"
                                    class="flex items-center gap-2 p-2 border-2 rounded-md text-teal border-teal bg-white hover:invert">
                                    <img src="../../../assets/dist/img/favicon/carousell.ico" alt=""
                                        title="Search on Carousell">
                                    Carousell
                                </a>
                                <a v-if="lelong_opt" :href="lelong" target="_blank"
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
import { defineComponent, onMounted, ref } from 'vue';
import Main from '@/views/layouts/Main.vue';
import { MonthPickerInput } from 'vue-month-picker'
import axios from 'axios';


const shoppingItem = ref('');
let month = ref('');
let lazada = ref('');
let shopee = ref('');
let mudah = ref('');
let carousell = ref('');
let lelong = ref('');
const lazada_opt = ref(false);
const shopee_opt = ref(false);
const mudah_opt = ref(false);
const carousell_opt = ref(false);
const lelong_opt = ref(false);

const suggestList = () => {
    lazada.value = 'https://www.lazada.com.my/catalog/?q=' + shoppingItem.value;
    shopee.value = 'https://shopee.com.my/search?keyword=' + shoppingItem.value;
    mudah.value = 'https://www.mudah.my/malaysia/all?q=' + shoppingItem.value;
    carousell.value = 'https://www.carousell.com.my/search/' + shoppingItem.value;
    lelong.value = 'https://www.lelong.com.my/catalog/all/list?TheKeyword=' + shoppingItem.value;
}

onMounted(async () => {
    const response = await axios.get('/api/settings');
    switch (response.status) {
        case 200:
            const { data } = response.data;
            const [u_username] = data.filter((item: any) => item.name == "username");
            const [u_email] = data.filter((item: any) => item.name == "email");
            const [u_needs] = data.filter((item: any) => item.name == "needs");
            const [u_wants] = data.filter((item: any) => item.name == "wants");
            const [u_savings] = data.filter((item: any) => item.name == "savings");
            const [u_currency] = data.filter((item: any) => item.name == "currency");
            const [u_allocationFrom] = data.filter((item: any) => item.name == "allocate_from");
            const [u_monthlySalary] = data.filter((item: any) => item.name == "salary");
            const [u_ccLimit] = data.filter((item: any) => item.name == "cc_limit");
            const [u_marketplace] = data.filter((item: any) => item.name == "marketplace");

            if (u_marketplace != undefined) {
                // 1,2,3,4,5
                const marketplaces = u_marketplace.value.split(',');
                marketplaces.forEach((item: any) => {
                    switch (item) {
                        case '1':
                            lazada_opt.value = true;
                            break;
                        case '2':
                            shopee_opt.value = true;
                            break;
                        case '3':
                            lelong_opt.value = true;
                            break;
                        case '4':
                            carousell_opt.value = true;
                            break;
                        case '5':
                            mudah_opt.value = true;
                            break;
                    }
                });
            }
    }

})


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
  