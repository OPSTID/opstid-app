<script setup>
import { reactive } from "vue"
import Profile from "../components/Profile.vue";
const state = reactive({
    isActive: {
        profileBlockDialog: false,
        createMyTagDialog: false
    }
})
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
        <template v-slot:append>
            <v-btn icon flat to="/share/d1fd17c6b612">
                <v-icon>mdi-share-variant</v-icon>
                <v-tooltip activator="parent" location="bottom">共有</v-tooltip>
            </v-btn>
            <v-btn icon flat @click="state.isActive.profileBlockDialog = true">
                <v-icon>mdi-cancel</v-icon>
                <v-tooltip activator="parent" location="bottom">ブロック</v-tooltip>
            </v-btn>
        </template>
    </v-list-item>
    <!-- block profile dialog -->
    <v-dialog v-model="state.isActive.profileBlockDialog" close-on-back>
        <v-container style="max-width:400px;">
            <v-card elevation="5">
                <v-card-title class="font-weight-bold mt-2">ブロック</v-card-title>
                <v-card-text>このプロフィール（@d1fd17c6b612）をブロックしてもよろしいですか？</v-card-text>
                <v-card-actions class="text-right d-block">
                    <v-btn variant="text" @click="state.isActive.profileBlockDialog = false">キャンセル</v-btn>
                    <v-btn variant="text" color="red" class="font-weight-bold">ブロック</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-dialog>
    <!-- create mytag dialog -->
    <v-dialog v-model="state.isActive.createMyTagDialog" close-on-back>
        <v-container style="max-width:400px">
            <v-card elevation="5">
                <v-card-title class="font-weight-bold mt-2">Myタグを追加</v-card-title>
                <v-card-text>
                    <v-text-field variant="underlined" autofocus label="タグ名を入力" color="green"></v-text-field>
                    <p class="text-body-2 text-grey">作成するMyタグ名を入力して、「追加」をクリックしてください</p>
                </v-card-text>
                <v-card-actions class="text-right d-block pr-4">
                    <v-btn variant="text" @click="state.isActive.createMyTagDialog = false">キャンセル</v-btn>
                    <v-btn variant="text" color="green" class="font-weight-bold">追加</v-btn>
                </v-card-actions>
            </v-card>
        </v-container>
    </v-dialog>
    <!-- profile summary -->
    <div class="text-center mt-4">
        <v-avatar size="70">
            <v-img src="icon.svg"></v-img>
        </v-avatar>
        <p class="text-h6 font-weight-bold mt-1">OPSTID</p>
        <p style="margin-top:-6px" class="text-caption text-grey">@d1fd17c6b612</p>
        <p class="mt-3">
            <v-chip size="small" to="/search?q=tag:OPSTID" color="blue" class="mr-1"><v-icon size="xs"
                    class="mr-1">mdi-pound</v-icon> OPSTID</v-chip>
            <v-chip size="small" to="/search?q=tag:Myタグ" color="green" class="mr-1"><v-icon size="xs"
                    class="mr-1">mdi-pound</v-icon> Myタグ</v-chip>
            <v-chip size="small" color="green" variant="outlined" @click="state.isActive.createMyTagDialog = true"><v-icon size="xs"
                    class="mr-1">mdi-plus</v-icon>Myタグを追加</v-chip>
        </p>
        <p class="mt-3">
            <v-btn variant="flat" rounded class="mt-1" @click="" color="black">
                <v-icon class="mr-2">mdi-pencil</v-icon> 編集する
            </v-btn>
        </p>
    </div>
    <!-- account list -->
    <v-list lines="two">
        <v-list-item href="https://twitter.com/twitter" target="_blank">
            <v-list-item-title class="font-weight-bold" style="color:#1DA1F2">Twitter</v-list-item-title>
            <v-list-item-subtitle>@twitter</v-list-item-subtitle>
        </v-list-item>
        <v-list-item @click="">
            <v-list-item-title class="font-weight-bold" style="color:#e13467">Instagram</v-list-item-title>
            <v-list-item-subtitle>opstid-official</v-list-item-subtitle>
        </v-list-item>
    </v-list>
</template>