<template>
    <Main>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-8 mx-auto">
                        <div class="card card-primary">
                            <div class="card-header">
                                <h3 class="card-title">New Contact</h3>
                            </div>
                            <form @submit.prevent="submitForm">
                                <div class="card-body">
                                    <div class="text-center mb-4">
                                        <img class="profile-user-img img-fluid img-circle"
                                            src="@/assets/dist/img/user4-128x128.jpg" alt="User profile picture">
                                    </div>
                                    <div class="form-group">
                                        <label>First Name</label>
                                        <input type="text"
                                            :class="`form-control ${error.first_name != null ? 'is-invalid' : ''}`"
                                            v-model="first_name">
                                        <span class="text-danger m-1" v-if="error.first_name != null">{{ error.first_name
                                        }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Last Name</label>
                                        <input type="text"
                                            :class="`form-control ${error.last_name != null ? 'is-invalid' : ''}`"
                                            v-model="last_name">
                                        <span class="text-danger m-1" v-if="error.last_name != null">{{ error.last_name
                                        }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Company</label>
                                        <input type="text"
                                            :class="`form-control ${error.company != null ? 'is-invalid' : ''}`"
                                            v-model="company">
                                        <span class="text-danger m-1" v-if="error.company != null">{{ error.company
                                        }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Job Title</label>
                                        <input type="text"
                                            :class="`form-control ${error.job_title != null ? 'is-invalid' : ''}`"
                                            v-model="job_title">
                                        <span class="text-danger m-1" v-if="error.job_title != null">{{ error.job_title
                                        }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <input type="text"
                                            :class="`form-control ${error.email != null ? 'is-invalid' : ''}`"
                                            v-model="email">
                                        <span class="text-danger m-1" v-if="error.email != null">{{ error.email }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Phone</label>
                                        <input type="text"
                                            :class="`form-control ${error.phone != null ? 'is-invalid' : ''}`"
                                            v-model="phone">
                                        <span class="text-danger m-1" v-if="error.phone != null">{{ error.phone }}</span>
                                    </div>
                                    <div class="form-group">
                                        <label>Remark</label>
                                        <textarea :class="`form-control ${error.remark != null ? 'is-invalid' : ''}`"
                                            v-model="remark"></textarea>
                                        <span class="text-danger m-1" v-if="error.remark != null">{{ error.remark
                                        }}</span>
                                    </div>
                                </div>

                                <div class="card-footer">
                                    <div class="float-right">
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Main>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router"
import { ref, computed, onMounted, watch } from 'vue';
import type { Ref } from 'vue';
import Main from '@/views/layouts/Main.vue';
import { setError } from "@/helpers"
import { useContactListStore } from '@/stores/contact_list';
import { v4 as uuidv4 } from 'uuid';

const route = useRoute();
const router = useRouter();

const id = ref("");
const first_name = ref("");
const last_name = ref("");
const company = ref("");
const job_title = ref("");
const email = ref("");
const phone = ref("");
const remark = ref("");
const error: Ref<{ [key: string]: string }> = ref({});
const contactListStore = useContactListStore();
// const first_name = computed({
//     get() {
//         return contactFormStore.first_name;
//     }, 
//     set(val) {
//         contactFormStore.setValue("first_name",val);
//     }
// });
// const last_name = computed({
//     get() {
//         return contactFormStore.last_name;
//     }, 
//     set(val) {
//         contactFormStore.setValue("last_name",val);
//     }
// });

const submitForm = () => {
    error.value = validation();

    if (Object.getOwnPropertyNames(error.value).length > 0) {
        return;
    }

    if (id.value != "") {
        contactListStore.update({
            id: id.value,
            first_name: first_name.value,
            last_name: last_name.value,
            company: company.value,
            job_title: job_title.value,
            email: email.value,
            phone: phone.value,
            remark: remark.value
        });
    } else {
        // store
        contactListStore.store({
            id: uuidv4(),
            first_name: first_name.value,
            last_name: last_name.value,
            company: company.value,
            job_title: job_title.value,
            email: email.value,
            phone: phone.value,
            remark: remark.value
        });
    }

    router.push({ name: "contact-list" });
}

const validation = () => {
    let err: { [key: string]: string } = {};

    if (first_name.value.trim().length < 1) {
        err = setError(err, "first_name", "This field is required");
    }

    if (last_name.value.trim().length < 1) {
        err = setError(err, "last_name", "This field is required");
    }

    if (company.value.trim().length < 1) {
        err = setError(err, "company", "This field is required");
    }

    if (job_title.value.trim().length < 1) {
        err = setError(err, "job_title", "This field is required");
    }

    if (email.value.trim().length < 1) {
        err = setError(err, "email", "This field is required");
    }

    if (phone.value.trim().length < 1) {
        err = setError(err, "phone", "This field is required");
    }
    return err;
}

watch(() => route.params, (val) => {
    const { contactId } = route.params;

    if (contactId != null) {
        const contact = contactListStore.contacts.filter((contact) => contact.id == contactId);

        if (contact.length > 0) {
            id.value = contact[0].id;
            first_name.value = contact[0].first_name
            last_name.value = contact[0].last_name
            company.value = contact[0].company
            job_title.value = contact[0].job_title
            email.value = contact[0].email
            phone.value = contact[0].phone
            remark.value = contact[0].remark || "";
        }else{
            console.log("No data found!");
            router.push({name:"contact-list"});
        }
    } else {
        id.value = "";
        first_name.value = ""
        last_name.value = ""
        company.value = ""
        job_title.value = ""
        email.value = ""
        phone.value = ""
        remark.value = "";
    }

}, { deep: true, immediate: true })

</script>

<style scoped></style>