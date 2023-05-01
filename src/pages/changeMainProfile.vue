<script setup>
import { ref } from "vue"
import { toSvg } from "jdenticon"
import Header from '../components/Header.vue';
import Profile from '../components/Profile.vue';

const generateProfileIconPath = (seed) => {
    if (!seed) {
        seed = Math.random().toString(16).slice(-12) // generate random seed
    }

    return `data:image/svg+xml;charset=utf8,${encodeURIComponent(toSvg(seed, 256))}`
}

const selectedProfile = ref("d1fd17c6b612")
</script>
<template>
    <Header title="メインプロフィールの変更" hasBackButton></Header>

    <v-radio-group v-model="selectedProfile">
        <v-radio value="d1fd17c6b612">
            <template v-slot:label>
                <Profile name="OPSTID" opstidId="d1fd17c6b612" avatarPath="/icon.svg"></Profile>
            </template>
        </v-radio>
        <v-radio value="ace97b838b9d">
            <template v-slot:label>
                <Profile name="ace97b838b9d" opstidId="ace97b838b9d" :avatarPath="generateProfileIconPath('ace97b838b9d')">
                </Profile>
            </template>
        </v-radio>
        <v-radio value="ca972cbe7116">
            <template v-slot:label>
                <Profile name="ca972cbe7116" opstidId="ca972cbe7116" :avatarPath="generateProfileIconPath('ca972cbe7116')">
                </Profile>
            </template>
        </v-radio>
        <v-radio value="8554bbc654b8">
            <template v-slot:label>
                <Profile name="8554bbc654b8" opstidId="8554bbc654b8" :avatarPath="generateProfileIconPath('8554bbc654b8')">
                </Profile>
            </template>
        </v-radio>
    </v-radio-group>
    <p class="text-caption">メインプロフィールに設定されたプロフィールはホーム画面に表示され、すぐに表示・シェアできます</p>
</template>
<style>
.v-label {
    opacity: 1 !important;
}</style>