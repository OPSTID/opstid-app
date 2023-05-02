<script setup>
import { reactive } from "vue"
import sha256 from "crypto-js/sha256";

import parseProfileData from "../functions/parseProfileData";
import generateProfileAvatarPath from "../functions/generateProfileAvatarPath";
import db from "../db"

const state = reactive({
    // dialogs activation
    isActive: {
        blockProfileDialog: false,
        unblockProfileDialog: false,
        createMyTagDialog: false
    },
    // inputs model
    inputs: {
        createMyTagInput: ""
    },
    // profile model
    profile: {
        loaded: false, // Is profile loaded?
        isOccuredError: false, // Is error occured during parsing?
        isBlocked: false, // Is blocked profile?
        id: "", // profile ID (sha-256 hashed profileData)
        name: "",
        tags: [],
        accounts: []
    }
})

// create new mytag
const createNewMyTag = (tagName) => {
    state.profile.tags.push({
        "name": tagName,
        "type": "my"
    })
    // reset text field
    state.inputs.createMyTagInput = ""
}

const blockProfile = () => {
    if (!!state.profile.id) {
        // add profile id to "blockedProfiles" table
        db.blockedProfiles.add({
            id: state.profile.id,
            name: state.profile.name
        })

        // enable blocked screen
        state.profile.isBlocked = true
        state.isActive.blockProfileDialog = false
    }
}

const unblockProfile = () => {
    if (!!state.profile.id) {
        // remove profile id from "blockedProfiles" table
        db.blockedProfiles.delete(state.profile.id)

        // disable blocked screen
        state.profile.isBlocked = false
        state.isActive.unblockProfileDialog = false
    }
}

const generateProfileData = async () => {
    // get & parse profile data
    let query = new URL(location.href).search
    // if url has query, parse it
    if (query.length > 0) {
        // remove initial "?"
        query = query.substring(1)

        // generate profile id
        state.profile.id = sha256(query).toString().substring(0, 12)

        // if blocked profile
        if (!!await db.blockedProfiles.get(state.profile.id)) {
            state.profile.isBlocked = true
        }

        // parse query as profileData
        const profileData = parseProfileData(query)
        console.log(profileData)

        state.profile.name = profileData.name;
        state.profile.tags = profileData.tags.map(tag => {
            return {
                type: "owner",
                name: tag
            }
        });
        state.profile.accounts = profileData.accounts

        // end loading phase
        state.profile.isLoaded = true
    }
    else {
        // error
        state.profile.isOccuredError = true
    }
}

// wait for 500ms to load
setTimeout(generateProfileData, 500)


</script>
<template>
    <v-list-item style="height:56px;padding-left:0;padding-right:0;">
        <template v-slot:prepend>
            <v-btn icon flat @click="$router.back">
                <v-icon>mdi-arrow-left</v-icon>
                <v-tooltip activator="parent" location="bottom">戻る</v-tooltip>
            </v-btn>
        </template>
        <v-list-item-title>
            <v-btn icon flat to="/" class="mr-1">
                <v-avatar size="small">
                    <v-img src="/icon.svg"></v-img>
                </v-avatar>
                <v-tooltip activator="parent" location="bottom">ホームに戻る</v-tooltip>
            </v-btn>
        </v-list-item-title>
        <template v-slot:append v-if="state.profile.isLoaded">
            <v-btn icon flat to="/share/d1fd17c6b612">
                <v-icon>mdi-share-variant</v-icon>
                <v-tooltip activator="parent" location="bottom">共有</v-tooltip>
            </v-btn>
            <v-btn icon flat>
                <v-icon>mdi-dots-vertical</v-icon>
                <v-menu activator="parent" location="bottom right" close-on-back>
                    <v-list density="compact">
                        <v-list-item title="このプロフィールをブロック" @click="state.isActive.blockProfileDialog = true"
                            v-if="!state.profile.isBlocked"></v-list-item>
                        <v-list-item title="このプロフィールのブロックを解除" @click="state.isActive.unblockProfileDialog = true"
                            v-else></v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
        </template>
    </v-list-item>
    <!-- block profile dialog -->
    <v-dialog v-model="state.isActive.blockProfileDialog" max-width="400" close-on-back>
        <v-container>
            <v-card elevation="5">
                <v-card-title class="font-weight-bold mt-2">ブロック</v-card-title>
                <v-card-text>このプロフィール（@{{ state.profile.id }}）をブロックしてもよろしいですか？<br>ブロックすると、フォローが解除されます</v-card-text>
                <v-card-actions class="text-right d-block">
                    <v-btn variant="text" @click="state.isActive.blockProfileDialog = false">キャンセル</v-btn>
                    <v-btn variant="text" color="red" class="font-weight-bold" @click="blockProfile">ブロック</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-dialog>
    <!-- unblock profile dialog -->
    <v-dialog v-model="state.isActive.unblockProfileDialog" max-width="400" close-on-back>
        <v-container>
            <v-card elevation="5">
                <v-card-title class="font-weight-bold mt-2">ブロック解除</v-card-title>
                <v-card-text>このプロフィール（@{{ state.profile.id
                }}）のブロックを解除してもよろしいですか？<br>このプロフィールにはあなたが不快に思う内容が含まれる可能性があります</v-card-text>
                <v-card-actions class="text-right d-block">
                    <v-btn variant="text" @click="state.isActive.unblockProfileDialog = false">キャンセル</v-btn>
                    <v-btn variant="text" color="red" class="font-weight-bold" @click="unblockProfile">ブロック解除</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-dialog>
    <!-- create mytag dialog -->
    <v-dialog v-model="state.isActive.createMyTagDialog" max-width="400" close-on-back>
        <v-container>
            <v-card elevation="5">
                <v-card-title class="font-weight-bold mt-2">
                    Myタグを追加
                    <v-btn icon flat size="xs">
                        <v-icon size="small">mdi-information</v-icon>
                        <v-tooltip activator="parent" location="bottom" max-width="300">
                            <span
                                class="text-body-2">「Myタグ」とは？<br>自分もしくは他の人のプロフィールに自分だけのタグを付けて管理することができる機能です。なお自分のプロフィールにMyタグを追加しても他の人には表示されません。他の人にも表示される「オーナータグ」は編集画面から追加できます。</span>
                        </v-tooltip>
                    </v-btn></v-card-title>
                <v-card-text>
                    <v-text-field variant="underlined" autofocus label="タグ名を入力"
                        :rules="[state.profile.tags.filter(tag => tag.name === state.inputs.createMyTagInput).length === 0 ? true : 'すでに追加済みのタグは追加できません']"
                        v-model="state.inputs.createMyTagInput"></v-text-field>
                </v-card-text>
                <v-card-actions class="text-right d-block pr-4">
                    <v-btn variant="text"
                        @click="state.isActive.createMyTagDialog = false; state.inputs.createMyTagInput = ''">キャンセル</v-btn>
                    <v-btn variant="text" color="green" class="font-weight-bold"
                        @click=" createNewMyTag(state.inputs.createMyTagInput); state.isActive.createMyTagDialog = false "
                        :disabled=" state.profile.tags.filter(tag => tag.name === state.inputs.createMyTagInput).length !== 0 ">追加</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-dialog>

    <!-- error screen -->
    <div v-if=" state.profile.isOccuredError " class="mt-6 text-grey text-body-2">
        <p class="pl-5 pr-5">
            An Error Occured. Check your URL don't have errors.
        </p>
    </div>
    <!-- profile loading screen -->
    <div v-else-if=" !state.profile.isLoaded " class="text-center mt-6">
        <v-progress-circular indeterminate color="blue" size="32"></v-progress-circular>
    </div>
    <!-- profile screen-->
    <div v-else class="pl-5 pr-5">
        <!-- profile summary -->
        <div class="text-center mt-4">
            <v-avatar size="70" rounded="0">
                <v-img :src=" generateProfileAvatarPath(state.profile.id) "></v-img>
            </v-avatar>
            <p class="text-h6 font-weight-bold mt-1">{{ state.profile.name }}</p>
            <p style="margin-top:-6px" class="text-caption text-grey">@{{ state.profile.id }}</p>

            <p class="mt-3">
                <v-btn v-if=" state.profile.isBlocked " color="red" rounded flat
                    @click=" state.isActive.unblockProfileDialog = true ">ブロック中</v-btn>
                <v-btn v-else color="green" rounded flat>フォロー中</v-btn>
            </p>
            <p class="mt-4" v-if=" !state.profile.isBlocked ">
                <v-chip class="mr-1 mt-1" v-for="    tag     in     state.profile.tags    "
                    :color=" tag.type === 'owner' ? 'blue' : 'green' " :to=" `/search?q=tag:${tag.name}` " size="small">
                    <v-icon size="xs" class="mr-1">mdi-pound</v-icon>{{ tag.name }}
                </v-chip>
                <v-chip class="mr-1 mt-1" variant="outlined" color="green" size="small"
                    @click=" state.isActive.createMyTagDialog = true ">
                    <v-icon size="small">mdi-plus</v-icon>
                    <v-tooltip activator="parent" location="bottom" size="small">
                        Myタグを追加
                    </v-tooltip>
                </v-chip>
            </p>
        </div>
        <!-- account list -->
        <v-list lines="two" class="mt-5" v-if=" !state.profile.isBlocked ">
            <v-list-item v-for="account in state.profile.accounts   ">
                <v-list-item-title>{{ account.service }}</v-list-item-title>
                <v-list-item-subtitle>{{ account.account }}</v-list-item-subtitle>
            </v-list-item>
        </v-list>
        <!-- account blocked message -->
        <div v-else class="mt-6">
            <p class="text-h6 font-weight-bold text-center">@{{ state.profile.id }} はブロックされています</p>
            <p class="text-body-2 text-grey mt-2">あなたは以前、このプロフィールをブロックしました。<br>「ブロック中」ボタンをクリックしてブロックを解除すると、内容を確認できます。</p>
    </div>
</div></template>