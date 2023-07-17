<template>
  <Main>
    <template #toast>
      <Toast v-if="alert_modal" :message="alert_msg" :type="alert_type" />
    </template>
    <template #content>
      <section class="py-1 bg-blueGray-50">
        <div class="w-full lg:w-8/12 px-4 pb-24 mx-auto mt-6">
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div class="rounded-t bg-white mb-0 px-6 py-6">
              <div class="text-center flex justify-between">
                <h6 class="text-blueGray-700 text-xl font-bold">Setting</h6>
              </div>
            </div>
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form id="setting-form" @submit.prevent="submitForm">
                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  User Information
                </h6>
                <div class="flex flex-wrap">
                  <InputField name="Username" placeholder="New Username" v-model="username" />
                  <InputField name="Email Address" placeholder="New Email Address" v-model="email" />
                </div>
                <hr class="mt-6 border-b-1 border-blueGray-300" />

                <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Application Settings
                </h6>
                <div class="flex flex-wrap">
                  <InputField name="N (%)" placeholder="Needs" v-model="needs" class-extend="flex-1" />
                  <InputField name="W (%)" placeholder="Wants" v-model="wants" class-extend="flex-1" />
                  <InputField name="S (%)" placeholder="Savings" v-model="savings" class-extend="flex-1" />
                  <div class="w-full px-4 lg:w-6/12 flex-2">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password">Allocate From</label>
                      <select v-model="allocationFrom"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
                        <option value="1" disabled>All Monthly Income</option>
                        <option value="2">Fixed Salary</option>
                      </select>
                    </div>
                  </div>
                  <InputField name="Currency" placeholder="Currency Symbol" v-model="currency" />
                  <div class="w-full px-4 lg:w-6/12">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password">Monthly Salary</label>
                      <input v-model="monthlySalary"
                        class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Enter Monthly Salary">
                    </div>
                  </div>
                  <InputField name="Credit Card Limit" placeholder="Credit Card Limit" v-model="ccLimit" />
                  <div class="w-full px-4 lg:w-6/12 flex-2">
                    <div class="relative w-full mb-3">
                      <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlfor="grid-password">Marketplace</label>
                        <input type="checkbox" v-model="lazada" id="lazada"> <label for="lazada">Lazada</label> <br>
                        <input type="checkbox" v-model="shopee" id="shopee"> <label for="shopee">Shopee</label> <br>
                        <input type="checkbox" v-model="lelong" id="lelong"> <label for="lelong">Lelong</label> <br>
                        <input type="checkbox" v-model="carousell" id="carousell"> <label for="carousell">Carousell</label> <br>
                        <input type="checkbox" v-model="mudah" id="mudah"> <label for="mudah">Mudah</label> <br>
                        
                    </div>
                  </div>
                </div>
                <hr class="my-6 border-b-1 border-blueGray-300" />
                <div class="flex justify-center">
                  <button
                    class="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit">
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
import InputField from "../components/InputField.vue";
import Toast from "../components/Toast.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const username = ref("");
const email = ref("");
const needs = ref("");
const wants = ref("");
const savings = ref("");
const currency = ref("");
const allocationFrom = ref("");
const monthlySalary = ref("");
const ccLimit = ref("");
const alert_msg = ref("");
const alert_modal = ref(false);
const alert_type = ref("");
const lazada = ref(false);
const shopee = ref(false);
const lelong = ref(false);
const carousell = ref(false);
const mudah = ref(false);

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

      if (u_username != undefined) {
        username.value = u_username.value;
      }
      if (u_email != undefined) {
        email.value = u_email.value;
      }

      if (u_needs != undefined) {
        needs.value = u_needs.value;
      }
      if (u_wants != undefined) {
        wants.value = u_wants.value;
      }
      if (u_savings != undefined) {
        savings.value = u_savings.value;
      }
      if (u_currency != undefined) {
        currency.value = u_currency.value;
      }
      if (u_allocationFrom != undefined) {
        allocationFrom.value = u_allocationFrom.value;
      }

      if (u_marketplace != undefined){
        // 1,2,3,4,5
        const marketplaces = u_marketplace.value.split(',');
        marketplaces.forEach((item: any) => {
          switch (item) {
            case "1":
              lazada.value = true;
              break;
            case "2":
              shopee.value = true;
              break;
            case "3":
              lelong.value = true;
              break;
            case "4":
              carousell.value = true;
              break;
            case "5":
              mudah.value = true;
              break;
            default:
              break;
          }
        });
      }
 
      if (u_monthlySalary != undefined) {
        monthlySalary.value = u_monthlySalary.value;
      }
      if (u_ccLimit != undefined) {
        ccLimit.value = u_ccLimit.value;
      }
    default:
      break;
  }
});

const submitForm = () => {
  axios.post('/api/settings', {
    username: username.value,
    email: email.value,
    needs: needs.value,
    wants: wants.value,
    savings: savings.value,
    currency: currency.value,
    allocationFrom: allocationFrom.value,
    monthlySalary: monthlySalary.value,
    ccLimit: ccLimit.value,
    marketplace: `${lazada.value ? 1 : 0},${shopee.value ? 2 : 0},${lelong.value ? 3 : 0},${carousell.value ? 4 : 0},${mudah.value ? 5 : 0}`
  })
    .then((response) => {
      if (response.status == 200) {
        alert_modal.value = true;
        alert_msg.value = "Settings saved successfully";
        alert_type.value = "success";
        setTimeout(() => {
          alert_modal.value = false;
        }, 3000);
      }
      else {
        alert_modal.value = true;
        alert_msg.value = "Something went wrong";
        alert_type.value = "error";
        setTimeout(() => {
          alert_modal.value = false;
        }, 3000);
      }
    })
}



</script>
