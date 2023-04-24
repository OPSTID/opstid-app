<script setup>
import Header from '../components/Header.vue';
</script>
<template>
    <Header title="設定" hasBackButton></Header>
    <v-list lines="two">
        <v-list-item prepend-icon="mdi-text-box-outline" @click="">
            <v-list-item-title>利用規約</v-list-item-title>
            <v-list-item-subtitle>OPSTIDの利用を続行すると、利用規約に同意したとみなされます。</v-list-item-subtitle>
        </v-list-item>
    </v-list>
</template>