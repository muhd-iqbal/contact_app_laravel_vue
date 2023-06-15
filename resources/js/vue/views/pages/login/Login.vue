<template>
    <div class="hold-transition login-page">
        <div class="login-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Sign in to start your session</p>
                    <form @submit.prevent="submitForm">
                        <InputGroup type="text" placeholder="Email" v-model="email">
                            <template #icon>
                                <span class="fas fa-envelope"></span>
                            </template>
                            <template #error>
                                <span class="text-danger" v-if="error.email != null">{{ error.email }}</span>
                            </template>
                        </InputGroup>
                        <InputGroup type="password" placeholder="Password" v-model="password">
                            <template #icon>
                                <span class="fas fa-lock"></span>
                            </template>
                            <template #error>
                                <span class="text-danger" v-if="error.password != null">{{ error.password }}</span>
                            </template>
                        </InputGroup>
                        <div class="row">
                            <div class="col-8">
                                <div class="icheck-primary">
                                    <input type="checkbox" id="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>

                            <div class="col-4">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>

                        </div>
                    </form>
                    <p class="mb-0">
                        <RouterLink to="/register" class="text-center">Register a new membership</RouterLink>
                    </p>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import InputGroup from '@/components/InputGroup.vue'
import { ref } from 'vue';
import type { Ref } from 'vue';
import { RouterLink } from "vue-router"
import { setError } from "@/helpers"
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const { login,user } = useAuthStore();
const email = ref("");
const password = ref("");
let error: Ref<{ [key: string]: string }> = ref({});
const submitForm = () => {
    console.log(user);
    
    error.value = validation();
    
    if (Object.getOwnPropertyNames(error.value).length > 0) {
        return;
    }
    
    if(!login(email.value,password.value)){
        return alert("failed to login");
    }
    
    router.push({name:"home"});
}

const validation = () => {
    let err: { [key: string]: string } = {};

    if (email.value.trim().length < 1) {
        err = setError(err, "email", "This field is required");
    }

    if (password.value.trim().length < 1) {
        err = setError(err, "password", "This field is required");
    }
    return err;
}
</script>

<style scoped></style>