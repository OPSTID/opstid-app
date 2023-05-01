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
    <v-list-item style="height:56px;padding-left:0;padding-right:0">
        <template v-slot:prepend>
            <v-btn icon flat class="mr-1" @click="$router.back()">
                <v-icon>mdi-arrow-left</v-icon>
                <v-tooltip activator="parent" location="bottom">戻る</v-tooltip>
            </v-btn>
        </template>
        <v-list-item-title>
            <v-text-field v-model="state.searchQuery" placeholder="検索..." autofocus clearable
                variant="underlined" class="ml-2 mt-1 pt-1"></v-text-field>
        </v-list-item-title>
    </v-list-item>
    <v-list lines="two">
        <v-list-subheader>検索結果</v-list-subheader>
        <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="icon.svg" to="/p"></Profile>
    </v-list>
</template>