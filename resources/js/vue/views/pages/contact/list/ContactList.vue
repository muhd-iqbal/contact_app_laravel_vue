<template>
    <Main>
        <div class="row">
            <div class="col-md-9 mx-auto">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Contact List</h3>
                    </div>

                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Company</th>
                                        <th>Job Title</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="contacts.length > 0">
                                        <tr v-for="contact in contacts">
                                            <td>{{ contact.first_name }}</td>
                                            <td>{{ contact.last_name }}</td>
                                            <td>{{ contact.company }}</td>
                                            <td>{{ contact.job_title }}</td>
                                            <td>{{ contact.email }}</td>
                                            <td>{{ contact.phone }}</td>
                                            <td>
                                                <RouterLink :to="`/edit-contact/${contact.id}`">
                                                    <i class="fas fa-edit text-warning" style="cursor: pointer;"></i>
                                                </RouterLink>
                                                <a href="javascript:void(0)" @click.prevent="deleteContact(contact.id)">
                                                    <i class="fas fa-trash text-danger ml-2"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </template>
                                    <template v-else>
                                        <tr>
                                            <td class="text-center" colspan="7"> No data found</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <!-- <div class="card-footer clearfix">
                        <ul class="pagination pagination-sm m-0 float-right">
                            <li class="page-item"><a class="page-link" href="#">«</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">»</a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
    </Main>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import Main from '@/views/layouts/Main.vue';
import { useContactListStore } from '@/stores/contact_list';
const { deleteContact, contacts } = useContactListStore();
</script>

<style scoped></style>