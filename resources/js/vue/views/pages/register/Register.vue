<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-8"
  >
    <div class="inline-flex">
      <a href="#" class="inline-flex flex-row items-center">
        <svg
          class="w-10 h-10 text-indigo-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="leading-10 text-gray-800 text-4xl font-bold ml-1 uppercase"
          >Budget Tracker</span
        >
      </a>
    </div>

    <div class="text-sm sm:text-base text-gray-600 my-4">
      Create new account.
    </div>

    <div
      class="rounded-md bg-white w-full max-w-sm sm:max-w-md border border-gray-200 shadow-md px-4 py-6 sm:p-8"
    >
      <form @submit.prevent="register">
        <div class="flex flex-col mb-4">
          <label
            for="username"
            class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >Username:</label
          >
          <div class="relative">
            <div
              class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>

            <input
              id="username"
              type="text"
              name="username"
              class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
              placeholder="Username"
              v-model="username"
            />
          </div>
          <span class="text-red-500" v-if="error.username != null">{{
            error.username
          }}</span>
        </div>
        <div class="flex flex-col mb-4">
          <label
            for="email"
            class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >E-Mail Address:</label
          >
          <div class="relative">
            <div
              class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>

            <input
              id="email"
              type="email"
              name="email"
              class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
              placeholder="E-Mail Address"
              v-model="email"
            />
          </div>
          <span class="text-red-500" v-if="error.email != null">{{
            error.email
          }}</span>
        </div>
        <div class="flex flex-col mb-4">
          <label
            for="password"
            class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >Password:</label
          >
          <div class="relative">
            <div
              class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
            >
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            </div>

            <input
              id="password"
              type="password"
              name="password"
              class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
              placeholder="Password"
              v-model="password"
            />
          </div>
          <span class="text-red-500" v-if="error.password != null">{{
            error.password
          }}</span>
        </div>
        <div class="flex flex-col mb-4">
          <label
            for="password_confirmation"
            class="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
            >Confirm Password:</label
          >
          <div class="relative">
            <div
              class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
            >
              <span>
                <svg
                  class="h-6 w-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            </div>

            <input
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              class="text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-indigo-400"
              placeholder="Confirm Password"
              v-model="password_confirmation"
            />
          </div>
          <span class="text-red-500" v-if="error.password != null">{{
            error.password
          }}</span>
        </div>

        <div class="flex w-full mt-6">
          <button
            type="submit"
            class="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-indigo-600 hover:bg-indigo-700 rounded py-2 w-full transition duration-150 ease-in"
          >
            <span class="mr-2 uppercase">Register</span>
            <span>
              <svg
                class="h-6 w-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
    <div class="flex justify-center items-center mt-6">
      <RouterLink
        to="/login"
        class="inline-flex items-center font-bold text-indigo-500 hover:text-indigo-700 text-sm text-center"
      >
        <span>
          <svg
            class="h-6 w-6"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
            />
          </svg>
        </span>
        <span class="ml-2">Already have an account?</span>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
import { RouterLink } from "vue-router";
import { setError } from "@/helpers";
import { useUserStore } from "@/stores/users";
import router from "@/router";
import axios from 'axios';

// const body = document.body;
// body.className = `hold-transition register-page`

// onBeforeUnmount(() => {
//     body.className = ""
// })

const userStore = useUserStore();
const username = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
let error: Ref<{ [key: string]: string }> = ref({});
const register = () => {

    axios.post('/api/register', {
        username : username.value,
        email : email.value,
        password : password.value,
        password_confirmation : password_confirmation.value
    }).then(res => {
        error.value = {};
        router.push({ name: "login" });
    }).catch(err => {
        const erro = err.response;
        let errors = {};

        if(erro.data.errors){
            for (const i in erro.data.errors) {
                errors = setError(errors, i, erro.data.errors[i][0])
            }
            error.value = errors;
        }
    })

    //   error.value = validation();

//   if (Object.getOwnPropertyNames(error.value).length > 0) {
//     return;
//   }

//   userStore.store({
//     username: username.value,
//     email: email.value,
//     password: password.value,
//   });

//   router.push({ name: "login" });
};


</script>

<style scoped></style>
