<script setup>
import Header from '../components/Header.vue';
</script>
<template>
    <Header title="設定" hasBackButton></Header>
    <v-list>
        <v-list-subheader>データ管理</v-list-subheader>
        <v-list-item prepend-icon="mdi-database-export" @click="">
            <v-list-item-title>バックアップ</v-list-item-title>
        </v-list-item>
        
        <v-list-item prepend-icon="mdi-delete-sweep" @click="">
            <v-list-item-title>OPSTIDをリセット</v-list-item-title>
        </v-list-item>
    </v-list>
</template>