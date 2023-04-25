<script setup>
import Header from "../components/Header.vue"
import Profile from "../components/Profile.vue"

</script>
<template>
    <v-list-item style="height:56px;padding-left:0;apadding-right:0;">
        <v-list-item-title class="text-h6 font-weight-bold">ホーム</v-list-item-title>
        <template v-slot:append>
            <v-btn icon elevation="0" to="/search">
                <v-icon>mdi-magnify</v-icon>
                <v-tooltip activator="parent" location="bottom">
                    プロフィールを検索
                </v-tooltip>
            </v-btn>
            <v-btn icon elevation="0">
                <v-icon>mdi-plus</v-icon>
                <v-tooltip activator="parent" location="bottom">
                    プロフィールを作成
                </v-tooltip>
            </v-btn>
            <v-btn icon elevation="0" to="/settings">
                <v-icon>mdi-cog-outline</v-icon>
                <v-tooltip activator="parent" location="bottom">
                    設定
                </v-tooltip>
            </v-btn>
        </template>
    </v-list-item>
    <v-list lines="two">
        <v-list-subheader>自分のプロフィール</v-list-subheader>
        <Profile avatarPath="icon.svg" name="OPSTID" opstidId="d1fd17c6b612" to="/p"></Profile>
    </v-list>
</template>