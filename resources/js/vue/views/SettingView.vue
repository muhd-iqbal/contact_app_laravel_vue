<template>
  <Main>
    <template #content>
      <section class="py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
          >
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">My account</h6>
                <button
                  class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                  type="button"
                >
                  Settings
                </button>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form>
                <h6
                  class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
                >
                  User Information
                </h6>
                <div class="flex flex-wrap">
                  <InputField
                    name="Username"
                    placeholder="New Username"
                    v-model="username"
                  />
                  <InputField
                    name="Email Address"
                    placeholder="New Email Address"
                    v-model="email"
                  />
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6
                  class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
                >
                  Application Settings
                </h6>
                <div class="flex flex-wrap">
                  <InputField
                    name="Allocation (%)"
                    placeholder="Needs - Wants - Savings"
                    v-model="allocation"
                  />
                  <div class="w-full px-4 lg:w-6/12">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Allocate From</label>
                      <select v-model="allocationFrom" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                        <option value="1">All Monthly Income</option>
                        <option value="2">Fixed Salary</option>
                      </select>
                    </div>
                  </div>
                  <InputField
                    name="Currency"
                    placeholder="Currency Symbol"
                    v-model="currency"
                  />
                  <div v-if="allocationFrom==2" class="w-full px-4 lg:w-6/12">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">Monthly Salary</label>
                      <input v-model="monthlySalary" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Enter Monthly Salary">
                    </div>
                  </div>
                </div>

                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6
                  class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase"
                >
                  About Me
                </h6>
                <div class="flex flex-wrap">
                  <div class="w-full lg:w-12/12 px-4">
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password"
                      >
                        About me
                      </label>
                      <textarea
                        type="text"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        rows="4"
                      >
 A beautiful UI Kit and Admin for JavaScript &amp; Tailwind CSS. It is Freeand Open Source.</textarea
                      >
                    </div>
                  </div>
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
import InputField from "../components/InputField.vue";
import { ref } from "vue";

const username = ref("");
const email = ref("");
const first_name = ref("");
const last_name = ref("");
const allocation = ref("");
const currency = ref("");
const allocationFrom = ref("");
const monthlySalary = ref("");



</script>
