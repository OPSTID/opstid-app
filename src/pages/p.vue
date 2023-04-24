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
            <v-btn icon flat>
                <v-icon>mdi-share-variant</v-icon>
                <v-tooltip activator="parent" location="bottom">共有</v-tooltip>
            </v-btn>
            <v-btn icon flat>
                <v-icon>mdi-dots-vertical</v-icon>
                <v-menu activator="parent" location="bottom end">
                    <v-list density="compact">
                        <v-list-item @click="">
                            <v-list-item-title><v-icon class="mr-1">mdi-account-cancel</v-icon>このプロフィールをブロック</v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="">
                            <v-list-item-title><v-icon class="mr-1">mdi-text-box-outline</v-icon>利用規約</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-btn>
        </template>
    </v-list-item>
    <!-- account summary -->
    <div class="text-center mt-4">
        <v-avatar size="70">
            <v-img src="icon.svg"></v-img>
        </v-avatar>
        <p class="text-h6 font-weight-bold mt-4">OPSTID</p>
        <p style="margin-top:-6px" class="text-caption text-grey">@d1fd17c6b612</p>
        <p class="mt-2">
            <v-chip size="small" to="/search?q=tag:OPSTID" color="blue" class="mr-1"><v-icon size="xs" class="mr-1">mdi-pound</v-icon> OPSTID</v-chip>
            <v-chip size="small" to="/search?q=tag:マイタグ" color="green" class="mr-1"><v-icon size="xs" class="mr-1">mdi-pound</v-icon> マイタグ</v-chip>
            <v-chip size="small" color="black" @click=""><v-icon size="xs" class="mr-1">mdi-plus</v-icon>タグを追加</v-chip>
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