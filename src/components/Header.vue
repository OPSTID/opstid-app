<template>
    <v-app-bar>
        <v-container class="d-flex align-center">
            <v-btn icon flat class="mr-1" @click="$router.back()" v-if="hasBackButton">
                <v-icon>mdi-arrow-left</v-icon>
                <v-tooltip activator="parent" location="bottom">戻る</v-tooltip>
            </v-btn>
            <v-btn icon flat class="mr-1" to="/" v-if="hasHomeButton">
                <v-avatar>
                    <v-img src="/icon.svg" size="small"></v-img>
                </v-avatar>
                <v-tooltip activator="parent" location="bottom">ホームに戻る</v-tooltip>
            </v-btn>
            <v-app-bar-title class="text-h6 font-weight-bold">{{ title }}
            </v-app-bar-title>
        </v-container>
    </v-app-bar>
</template>
<script>
export default {
    props: {
        title: String,
        hasHomeButton: Boolean,
        hasBackButton: Boolean
    }
}
</script>