<script setup>
import { ref, watchEffect } from "vue"
import Header from '../components/Header.vue';
import Profile from '../components/Profile.vue';
import generateProfileAvatarPath from "../functions/generateProfileAvatarPath";

const selectedProfile = ref("d1fd17c6b612")

watchEffect(() => {
    console.log(selectedProfile.value)
})
</script>
<template>
    <Header title="メインプロフィールの変更" hasBackButton></Header>
    <v-main>
        <v-radio-group v-model="selectedProfile" class="mt-2" color="blue">
            <v-radio value="d1fd17c6b612">
                <template v-slot:label>
                    <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="/icon.svg"></Profile>
                </template>
            </v-radio>
            <v-radio value="ace97b838b9d">
                <template v-slot:label>
                    <Profile name="ace97b838b9d" opstidId="ace97b838b9d"
                        :avatarPath="generateProfileAvatarPath('ace97b838b9d')">
                    </Profile>
                </template>
            </v-radio>
            <v-radio value="ca972cbe7116">
                <template v-slot:label>
                    <Profile name="ca972cbe7116" opstidId="ca972cbe7116"
                        :avatarPath="generateProfileAvatarPath('ca972cbe7116')">
                    </Profile>
                </template>
            </v-radio>
            <v-radio value="8554bbc654b8">
                <template v-slot:label>
                    <Profile name="8554bbc654b8" opstidId="8554bbc654b8"
                        :avatarPath="generateProfileAvatarPath('8554bbc654b8')">
                    </Profile>
                </template>
            </v-radio>
        </v-radio-group>
        <p class="text-body-2 text-grey">メインプロフィールに設定されたプロフィールはホーム画面の「おすすめ」に表示され、すぐに表示・シェアできます</p>
    </v-main>
</template>
<style>
.v-label {
    opacity: 1 !important;
}</style>