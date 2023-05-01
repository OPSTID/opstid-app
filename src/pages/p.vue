<script setup>
import { reactive } from "vue"
import Profile from "../components/Profile.vue";
const state = reactive({
    isActive: {
        profileBlockDialog: false,
        createMyTagDialog: false
    },
    inputs:{
        createMyTagInput:""
    },
    profile:{
        tags:[
            {
                "name":"OPSTID",
                "type":"author"
            },
            {
                "name":"My Tag",
                "type":"my"
            }
        ]
    }
})
const addNewMyTag = (tagName) => {
    state.profile.tags.push({
        "name": tagName,
        "type":"my"
    })
    // reset text field
    state.inputs.createMyTagInput = ""
}
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
            <v-btn icon flat>
                <v-icon>mdi-dots-vertical</v-icon>
                <v-menu activator="parent" location="bottom right" close-on-back>
                    <v-list density="compact">
                        <v-list-item title="このプロフィールをブロック" @click="state.isActive.profileBlockDialog = true"></v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
        </template>
    </v-list-item>
    <!-- block profile dialog -->
    <v-dialog v-model="state.isActive.profileBlockDialog" max-width="400" close-on-back>
        <v-container>
            <v-card elevation="5">
                <v-card-title class="font-weight-bold mt-2">ブロック</v-card-title>
                <v-card-text>このプロフィール（@d1fd17c6b612）をブロックしてもよろしいですか？<br>ブロックすると、フォローが解除されます</v-card-text>
                <v-card-actions class="text-right d-block">
                    <v-btn variant="text" @click="state.isActive.profileBlockDialog = false">キャンセル</v-btn>
                    <v-btn variant="text" color="red" class="font-weight-bold">ブロック</v-btn>
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
                            <span class="text-body-2">「Myタグ」とは？<br>自分もしくは他の人のプロフィールに自分だけのタグを付けて管理することができる機能です。なお自分のプロフィールにMyタグを追加しても他の人には表示されません。他の人にも表示される「オーナータグ」は編集画面から追加できます。</span>
                        </v-tooltip>
                    </v-btn></v-card-title>
                <v-card-text>
                    <v-text-field variant="underlined" autofocus label="タグ名を入力" :rules="[state.profile.tags.filter(tag => tag.name === state.inputs.createMyTagInput).length === 0 ? true : 'すでに追加済みのタグは追加できません']"  v-model="state.inputs.createMyTagInput"></v-text-field>
                </v-card-text>
                <v-card-actions class="text-right d-block pr-4">
                    <v-btn variant="text" @click="state.isActive.createMyTagDialog = false;state.inputs.createMyTagInput=''">キャンセル</v-btn>
                    <v-btn variant="text" color="green" class="font-weight-bold" @click="addNewMyTag(state.inputs.createMyTagInput);state.isActive.createMyTagDialog = false" :disabled="state.profile.tags.filter(tag => tag.name === state.inputs.createMyTagInput).length !== 0">追加</v-btn>
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
            <v-btn color="green" rounded flat>フォロー中</v-btn>
        </p>
        <p class="mt-4">
            <v-chip class="mr-1 mt-1" v-for="tag in state.profile.tags" :color="tag.type === 'author' ? 'blue' : 'green'" :to="`/search?q=tag:${tag.name}`" size="small">
                <v-icon size="xs" class="mr-1">mdi-pound</v-icon>{{ tag.name }}
            </v-chip>
            <v-chip class="mr-1 mt-1" variant="outlined" color="green" size="small" @click="state.isActive.createMyTagDialog = true">
                <v-icon size="small">mdi-plus</v-icon>
                <v-tooltip activator="parent" location="bottom" size="small">
                    Myタグを追加
                </v-tooltip>
            </v-chip>
        </p>
    </div>
    <!-- account list -->
    <v-list lines="two" class="mt-5">
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