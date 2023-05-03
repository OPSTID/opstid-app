<script setup>
import {toSvg} from "jdenticon"

import Header from '../components/Header.vue'
import Profile from '../components/Profile.vue'

const generateProfileIconPath = (seed) => {
    if(!seed){
        seed = Math.random().toString(16).slice(-12) // generate random seed
    }

    return `data:image/svg+xml;charset=utf8,${encodeURIComponent(toSvg(seed, 256))}`
}
</script>
<template>
    <Header title="自分のプロフィール一覧" hasBackButton></Header>
    <v-list>
        <v-list-subheader>
            メインプロフィール
        </v-list-subheader>
        <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="/icon.svg" to="/p" lines="two" hasEditButton hasShareButton></Profile>
        <div class="text-right">
            <v-btn size="small" variant="text" color="blue" append-icon="mdi-arrow-right" rounded to="/my/change-main-profile">メインプロフィールを変更</v-btn>
        </div>
    </v-list>
    
    <v-list lines="two">
        <v-list-subheader>すべてのプロフィール</v-list-subheader>
        <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="/icon.svg" to="/p" hasEditButton hasShareButton></Profile>
        <Profile name="ace97b838b9d" opstidId="ace97b838b9d" :avatarPath="generateProfileIconPath()" to="/p" hasEditButton hasShareButton></Profile>
        <Profile name="ca972cbe7116" opstidId="ca972cbe7116" :avatarPath="generateProfileIconPath()" to="/p" hasEditButton hasShareButton></Profile>
        <Profile name="8554bbc654b8" opstidId="8554bbc654b8" :avatarPath="generateProfileIconPath()" to="/p" hasEditButton hasShareButton></Profile>
    </v-list>
</template>