<script setup>
import Header from '../components/Header.vue';
</script>
<template>
    <Header title="404 Error" hasHomeButton></Header>
    <div class="text-center mt-6 pt-6">
        <p class="mb-4"><v-icon size="96">mdi-cloud-question</v-icon></p>
        <p class="text-body-2">存在しないページです。<br>URLにミスがないか確認してください🙇</p>
    </div>
</template>