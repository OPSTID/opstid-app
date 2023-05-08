<script setup>
import { reactive, watchEffect } from "vue";
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

// update url query "q" on searchQuery updated
watchEffect(() => {
    history.replaceState(null, null, `?q=${encodeURIComponent(state.searchQuery)}`)
});
</script>
<template>
    <Header title="検索" hasBackButton></Header>
    <v-main>
        <v-text-field v-model="state.searchQuery" placeholder="検索..." autofocus clearable color="blue" variant="solo"
            density="compact" prepend-inner-icon="mdi-magnify"></v-text-field>
        <v-list lines="two">
            <v-list-subheader>検索結果</v-list-subheader>
            <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="icon.svg" to="/p"></Profile>
        </v-list>
    </v-main>
</template>