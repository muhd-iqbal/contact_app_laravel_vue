<template>
    <div class="hold-transition register-page">
        <div class="register-box">
            <div class="card card-outline card-primary">
                <div class="card-header text-center">
                    <a href="../../index2.html" class="h1"><b>Admin</b>LTE</a>
                </div>
                <div class="card-body">
                    <p class="login-box-msg">Register a new membership</p>
                    <form @submit.prevent="register">
                        <div class="mb-3">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Full name" v-model="full_name">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-user"></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-danger" v-if="error.full_name != null">{{ error.full_name }}</span>
                        </div>
                        <div class="mb-3">
                            <div class="input-group ">
                                <input type="email" class="form-control" placeholder="Email" v-model="email">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-danger" v-if="error.email != null">{{ error.email }}</span>
                        </div>
                        <div class="mb-3">
                            <div class="input-group ">
                                <input type="password" class="form-control" placeholder="Password" v-model="password">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <span class="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <span class="text-danger" v-if="error.password != null">{{ error.password }}</span>
                        </div>
                        <div class="input-group mb-3">
                            <input type="password" class="form-control" placeholder="Retype password"
                                v-model="password_confirmation">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary btn-block">Register</button>
                            </div>
                            <div class="col-12">
                                <RouterLink to="/login" class="text-center w-100">I already have a membership</RouterLink>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';
import { RouterLink } from 'vue-router'
import { setError } from "@/helpers"
import { useUserStore } from '@/stores/users';
import router from '@/router';

// const body = document.body;
// body.className = `hold-transition register-page`

// onBeforeUnmount(() => {
//     body.className = ""
// })

const userStore = useUserStore()
const full_name = ref("");
const email = ref("");
const password = ref("");
const password_confirmation = ref("");
let error: Ref<{ [key: string]: string }> = ref({});
const register = () => {
    error.value = validation();

    if (Object.getOwnPropertyNames(error.value).length > 0) {
        return;
    }

    userStore.store({
        username: full_name.value,
        email: email.value,
        password: password.value
    });

    router.push({ name: "login" })
}

const validation = () => {
    let err: { [key: string]: string } = {};

    if (full_name.value.trim().length < 1) {
        err = setError(err, "full_name", "This field is required");
    }

    if (email.value.trim().length < 1) {
        err = setError(err, "email", "This field is required");
    }

    if (password.value.trim().length < 1) {
        err = setError(err, "password", "This field is required");
        err.password = "this field is reuquired";
    }

    if (password_confirmation.value.trim().length < 1) {
        err = setError(err, "password_confirmation", "This field is required");
        err.password_confirmation = "this field is reuquired";
    }


    return err;
}



</script>

<style scoped></style>