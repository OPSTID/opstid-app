<template>
    <v-list-item style="height:56px;padding-left:0;padding-right:0">
        <template v-slot:prepend>
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
        </template>
        <v-list-item-title class="text-h6 font-weight-bold">{{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
    </v-list-item>
</template>
<script>
export default {
    props:{
        title: String,
        subtitle: String,
        hasHomeButton: Boolean,
        hasBackButton: Boolean
    }
}
</script>