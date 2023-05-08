<script setup>
import Header from '../components/Header.vue';
</script>
<template>
    <Header title="このアプリについて" hasBackButton></Header>
    <v-main>
        <v-list lines="two">
            <v-list-item prepend-avatar="/icon.svg">
                <v-list-item-title class="font-weight-bold">OPSTID</v-list-item-title>
                <v-list-item-subtitle>つながりをみつけよう。</v-list-item-subtitle>
            </v-list-item>
        </v-list>
        <v-list>
            <v-list-subheader>アプリ情報</v-list-subheader>
            <v-list-item title="アプリ" subtitle="1.0.0 (web-client)" prepend-icon="mdi-information"></v-list-item>
            <v-list-item>
                <template v-slot:prepend>
                    <v-icon>
                        <v-progress-circular indeterminate color="blue" size="small"></v-progress-circular>
                    </v-icon>
                </template>
                <v-list-item-title>サービスリスト</v-list-item-title>
                <v-list-item-subtitle>更新をインストールしています... (92%)</v-list-item-subtitle>
            </v-list-item>
            <v-list-subheader>Contribution</v-list-subheader>
            <v-list-item title="OPSTID on GitHub" subtitle="Let's develop OPSTID with us!" prepend-icon="mdi-github"
                href="https://github.com/opstid/opstid-app" target="_blank"></v-list-item>
        </v-list>
    </v-main>
</template>