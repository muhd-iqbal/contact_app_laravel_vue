<template>

    <!-- Navbar -->
    <Navbar />

   <slot name="toast" />
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <!-- <Sidebar /> -->

    <slot name="content" />

    <!-- Main Footer -->
    <Footer />

</template>
<script setup lang="ts">
import Navbar from "@/views/layouts/Navbar.vue";
import Sidebar from "@/views/layouts/Sidebar.vue";
import Footer from "@/views/layouts/Footer.vue";
import { onMounted } from "vue";
import Toast from "../../components/Toast.vue";
</script>
