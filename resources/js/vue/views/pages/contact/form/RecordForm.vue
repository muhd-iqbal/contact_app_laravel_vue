<template>
    <Main>
        <template #content>
            <section class="py-1 bg-blueGray-50">
                <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
                    <div
                        class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                        <div class="rounded-t bg-white mb-0 px-6 py-6">
                            <div class="text-center flex justify-between">
                                <h6 class="text-blueGray-700 text-xl font-bold">My account</h6>
                            </div>
                        </div>
                        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
                            <form>
                                <ul class="grid w-full gap-6 md:grid-cols-3">
                                    <li>
                                        <input type="radio" id="income-type" name="record_type" value="income-type"
                                            class="hidden peer" required @change="changeSomething('plus')">
                                        <label for="income-type"
                                            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                            <div class="block">
                                                <div class="w-full text-lg font-semibold">Income</div>
                                                <div class="w-full">Yay! You receive money.</div>
                                            </div>
                                            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="expense-type" name="record_type" value="expense-type"
                                            class="hidden peer" @change="changeSomething('minus')">
                                        <label for="expense-type"
                                            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 ">
                                            <div class="block">
                                                <div class="w-full text-lg font-semibold">Expenses</div>
                                                <div class="w-full">Good investment I guess..</div>
                                            </div>
                                            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </label>
                                    </li>
                                    <li>
                                        <input type="radio" id="transfer-type" name="record_type" value="transfer-type"
                                            class="hidden peer" @change="changeSomething(' ')">
                                        <label for="transfer-type"
                                            class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">
                                            <div class="block">
                                                <div class="w-full text-lg font-semibold">Transfer</div>
                                                <div class="w-full">Stay organize for the best</div>
                                            </div>
                                            <svg aria-hidden="true" class="w-6 h-6 ml-3" fill="currentColor"
                                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                                    clip-rule="evenodd"></path>
                                            </svg>
                                        </label>
                                    </li>
                                </ul>

                                <label for="website-admin"
                                    class="block mb-2 text-sm font-medium text-gray-900">Total</label>
                                <div class="flex">
                                    <span id="" v-if="record_type != ' '"
                                        class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                                        {{ record_type }}
                                    </span>
                                    <input type="text" id="website-admin"
                                        class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5"
                                        placeholder="RM">
                                </div>

                                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 Font-bold uppercase">
                                    User Information
                                </h6>
                                <div class="flex flex-wrap">
                                    <InputField name="Username" placeholder="New Username" v-model="username" />
                                    <InputField name="Email Address" placeholder="New Email Address" v-model="email" />
                                </div>
                                <hr class="my-6 border-b-1 border-blueGray-300" />
                                <div class="flex justify-center">
                                    <button type="submit"
                                        class="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-6 rounded">
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </Main>
</template>
  
<script setup lang="ts">
import Main from "@/views/layouts/Main.vue";
import InputField from "@/components/InputField.vue";
import { ref } from "vue";

const username = ref("");
const email = ref("");
const first_name = ref("");
const last_name = ref("");
const allocation = ref("");
const currency = ref("");
const record_type = ref("");

const changeSomething = (something) => {
    record_type.value = `<font-awesome-icon icon="${something}" />`;
};



</script>
  