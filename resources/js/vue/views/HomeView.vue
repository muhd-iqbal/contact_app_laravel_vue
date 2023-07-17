<template>
  <Main>
    <template #content>
      <div
        class="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3 mx-5 lg:mx-40 xl:mx-72">
        <div
          class="background relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out">
          <div class="absolute inset-0 bg-pink-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
          <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
            <div>
              <h3 class="text-center text-white text-lg">Current Cash</h3>
              <h3 class="text-center text-white text-3xl mt-2 font-bold">
                RM 27,580
              </h3>
              <div class="flex space-x-4 mt-4">
                <button
                  class="block uppercase mx-auto shadow bg-purple-800 text-indigo-600 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-4 rounded font-bold">
                  Transfer
                </button>
                <button
                  class="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-4 rounded font-bold">
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
        <SummaryCard title="Needs Remaining" :value="`${currency}100`"
          :secondaryText="`out of ${currency + needs_allocation} (${needs}%)`" backgroundColor="bg-red-600"
          icon='file-invoice-dollar' color="text-red-600" secondaryColor="text-red-200" />
        <SummaryCard title="Wants Remaining" :value="`${currency}100`"
          :secondaryText="`out of ${currency + wants_allocation} (${wants}%)`" backgroundColor="bg-yellow-600"
          icon='shopping-cart' color="text-yellow-600" secondaryColor="text-yellow-200" />
        <SummaryCard title="Savings Remaining" :value="`${currency}100`"
          :secondaryText="`out of ${currency + savings_allocation} (${savings}%)`" backgroundColor="bg-green-600"
          icon='piggy-bank' color="text-green-600" secondaryColor="text-green-200" />
        <SummaryCard title="Debt" :value="`${currency}100`" :secondaryText="`credit limit of ${currency + cc_limit}`"
          backgroundColor="bg-blue-600" icon='credit-card' color="text-blue-600" secondaryColor="text-blue-200" />
        <RouterLink to="/shopping-list">
          <SummaryCard title="Shopping List" :value="`72 items`" :secondaryText="`out of 100 items`"
            backgroundColor="bg-pink-600" icon='shopping-bag' color="text-pink-600" secondaryColor="text-pink-200"
            redirect="/shopping-list" />
        </RouterLink>
      </div>
    </template>
  </Main>
</template>

<script setup lang="ts">
import Main from "@/views/layouts/Main.vue";
import SummaryCard from "@/components/SummaryCard.vue";
import { onMounted, ref } from "vue";
import axios from "axios";

const currency = ref('');
const needs = ref('');
const wants = ref('');
const savings = ref('');
const cc_limit = ref('');
const needs_allocation = ref('');
const wants_allocation = ref('');
const savings_allocation = ref('');

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

      if (u_currency.value != undefined) {
        currency.value = u_currency.value;
      }
      if (u_needs.value != undefined) {
        needs.value = number_format(u_needs.value);
      }
      if (u_wants.value != undefined) {
        wants.value = number_format(u_wants.value);
      }
      if (u_savings.value != undefined) {
        savings.value = number_format(u_savings.value);
      }
      if (u_ccLimit.value != undefined) {
        cc_limit.value = number_format(u_ccLimit.value);
      }
      if (u_allocationFrom.value != undefined) {
        switch (u_allocationFrom.value) {// all income
          case '1':
            needs_allocation.value = number_format(u_monthlySalary.value * (u_needs.value / 100));
            wants_allocation.value = number_format(u_monthlySalary.value * (u_wants.value / 100));
            savings_allocation.value = number_format(u_monthlySalary.value * (u_savings.value / 100));
            break;
          case '2':// salary only
            needs_allocation.value = number_format(u_monthlySalary.value * (u_needs.value / 100));
            wants_allocation.value = number_format(u_monthlySalary.value * (u_wants.value / 100));
            savings_allocation.value = number_format(u_monthlySalary.value * (u_savings.value / 100));
            break;
        }
      }
      break;
    case 401:
      console.log(response.data);
      break;
    default:
      console.log(response.data);
      break;
  }
});

const number_format = (number: number) => {
  return Intl.NumberFormat('en-US').format(number);
}

</script>

<style scoped>
.background {
  background-image: url('@/assets/dist/img/bg-card-dashboard.jpg')
}
</style>
