<script setup>
import { reactive } from "vue"

import Header from '../components/Header.vue';
import Profile from '../components/Profile.vue';

import generateProfileAvatarPath from "../functions/generateProfileAvatarPath";
import db from '../db';

const state = reactive({
    isActive: {
        unblockProfileDialog: false
    },
    unblockProfileDialog: {
        targetProfileId: ""
    },
    blockedProfiles: [],
    isLoadingBlockedProfiles: true
})

const loadBlockedProfiles = () => {
    state.isLoadingBlockedProfiles = true
    // wait for 500ms
    setTimeout(() => {

        // load blocked profiles
        db.blockedProfiles.toArray(profiles => {
            state.blockedProfiles = profiles
            state.isLoadingBlockedProfiles = false;
        });
    }, 500)
}

const unblockProfile = () => {
    if (!!state.unblockProfileDialog.targetProfileId) {
        // remove profile id from "blockedProfiles" table
        db.blockedProfiles.delete(state.unblockProfileDialog.targetProfileId)

        state.isActive.unblockProfileDialog = false
        loadBlockedProfiles()
    }
}

// load blocked profiles
loadBlockedProfiles()
</script>
<template>
    <Header title="ブロックしたプロフィール" hasBackButton></Header>
    <v-main>
        <div v-if="state.isLoadingBlockedProfiles" class="text-center mt-3">
            <v-progress-circular indeterminate color="blue" size="32"></v-progress-circular>
        </div>
        <div v-else class="pl-5 pr-5">
            <v-list v-if="state.blockedProfiles.length > 0">
                <p class="text-grey text-caption mb-4">あなたがブロックしたプロフィールの一覧です。それぞれのプロフィールをクリックするとブロックを解除できます。</p>
                <Profile v-for="profile in  state.blockedProfiles     " :name="profile.name" :opstidId="profile.id"
                    :avatarPath="generateProfileAvatarPath(profile.id)"
                    @click="state.unblockProfileDialog.targetProfileId = profile.id; state.isActive.unblockProfileDialog = true">
                </Profile>
            </v-list>
            <div v-else>
                <p class="text-h6 font-weight-bold">ブロックしているプロフィールはありません</p>
                <p class="text-body-2 text-grey mt-2">問題のあるプロフィールを見つけたときは、プロフィールページ右上のメニューからプロフィールをブロックして内容を非表示にできます。</p>
            </div>
        </div>
    </v-main>

    <v-dialog v-model=" state.isActive.unblockProfileDialog " max-width="400" close-on-back>
        <v-container>
            <v-card elevation="5">
                <v-card-title class="font-weight-bold mt-2">ブロック解除</v-card-title>
                <v-card-text>このプロフィール（@{{ state.unblockProfileDialog.targetProfileId
                    }}）のブロックを解除してもよろしいですか？<br>このプロフィールにはあなたが不快に思う内容が含まれる可能性があります</v-card-text>
                <v-card-actions class="text-right d-block">
                    <v-btn variant="text" @click=" state.isActive.unblockProfileDialog = false ">キャンセル</v-btn>
                    <v-btn variant="text" color="red" class="font-weight-bold" @click=" unblockProfile ">ブロック解除</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-dialog>
</template>