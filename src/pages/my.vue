<script setup>
import { toSvg } from "jdenticon"

import Header from '../components/Header.vue'
import Profile from '../components/Profile.vue'

const generateProfileIconPath = (seed) => {
    if (!seed) {
        seed = Math.random().toString(16).slice(-12) // generate random seed
    }

    return `data:image/svg+xml;charset=utf8,${encodeURIComponent(toSvg(seed, 256))}`
}
</script>
<template>
    <v-app-bar>
        <v-container class="d-flex align-center">
            <v-btn icon flat class="mr-1" @click="$router.back()">
                <v-icon>mdi-arrow-left</v-icon>
                <v-tooltip activator="parent" location="bottom">戻る</v-tooltip>
            </v-btn>
            <v-app-bar-title class="text-h6 font-weight-bold">自分のプロフィール</v-app-bar-title>
            <v-btn icon="mdi-plus"></v-btn>
        </v-container>
    </v-app-bar>
    <v-main>
        <v-list>
            <v-list-subheader>
                メインプロフィール
            </v-list-subheader>
            <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="/icon.svg" to="/p" lines="two" hasEditButton
                hasShareButton></Profile>
            <div class="text-right">
                <v-btn size="small" variant="text" color="blue" append-icon="mdi-arrow-right" rounded
                    to="/settings/change-main-profile">メインプロフィールを変更</v-btn>
            </div>
        </v-list>

        <v-list lines="two">
            <v-list-subheader>すべてのプロフィール</v-list-subheader>
            <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="/icon.svg" to="/p" hasEditButton hasShareButton>
            </Profile>
            <Profile name="ace97b838b9d" opstidId="ace97b838b9d" :avatarPath="generateProfileIconPath()" to="/p"
                hasEditButton hasShareButton></Profile>
            <Profile name="ca972cbe7116" opstidId="ca972cbe7116" :avatarPath="generateProfileIconPath()" to="/p"
                hasEditButton hasShareButton></Profile>
        <Profile name="8554bbc654b8" opstidId="8554bbc654b8" :avatarPath="generateProfileIconPath()" to="/p"
            hasEditButton hasShareButton></Profile>
    </v-list>
</v-main></template>