<script setup>
import Header from '../components/Header.vue';
</script>
<template>
    <Header title="設定" hasBackButton></Header>
    <v-list lines="2">
        <v-list-subheader>プロフィール管理</v-list-subheader>
        <v-list-item prepend-icon="mdi-cancel" title="ブロックしたプロフィール" subtitle="ブロックしているプロフィールを管理します。" to="/settings/blocked-profiles"></v-list-item>
        <v-list-subheader>データ管理</v-list-subheader>
        <v-list-item prepend-icon="mdi-database-export" title="バックアップ" subtitle="OPSTIDのローカルデータベースのバックアップを行います。データ消失に備えるため、定期的に行ってください。" @click="">
        </v-list-item>
        
        <v-list-item prepend-icon="mdi-delete-sweep" title="リセット" subtitle="OPSTIDのローカルデータベースおよびダウンロードされたアップデートの削除を行います" @click="">
        </v-list-item>
    </v-list>
</template>