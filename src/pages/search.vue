<script setup>
import { reactive } from "vue";
import { useRoute } from "vue-router"
import Header from "../components/Header.vue";
import Profile from "../components/Profile.vue"
const route = useRoute()
const state = reactive({
    searchQuery: ""
});
if (!!route.query["q"]) {
    state.searchQuery = route.query["q"];
}
</script>
<template>
    <Header title="検索" hasBackButton></Header>
    <v-text-field v-model="state.searchQuery" placeholder="検索キーワードを入力..." autofocus clearable color="blue" variant="solo" class="ml-2 mt-1 pt-1" prepend-inner-icon="mdi-magnify"></v-text-field>
    <v-list lines="two">
        <v-list-subheader>検索結果</v-list-subheader>
        <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="icon.svg" to="/p"></Profile>
    </v-list>
</template>