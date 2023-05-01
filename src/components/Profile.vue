<template>
    <v-list-item :to="to">
        <template v-slot:prepend v-if="!!avatarPath">
            <v-avatar rounded="0">
                <v-img :src="avatarPath"></v-img>
            </v-avatar>
        </template>
        <v-list-item-title class="font-weight-bold">{{ name }}</v-list-item-title>
        <v-list-item-subtitle>
            @{{ opstidId }}<br>
            <span class="mt-1 d-inline-block" v-if="!!note">{{ note }}</span>
        </v-list-item-subtitle>
        <template v-slot:append v-if="hasEditButton && hasShareButton">
            <v-btn icon size="small" flat v-if="hasEditButton" :to="`/edit/${opstidId}`">
                <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon size="small" flat v-if="hasShareButton" :to="`/share/${opstidId}`">
                <v-icon>mdi-share-variant</v-icon>
            </v-btn>
        </template>
    </v-list-item>
</template>
<script>
export default {
    props:{
        avatarPath: String,
        name: String,
        opstidId: String,
        note: String,
        to:String,
        hasEditButton: Boolean,
        hasShareButton: Boolean
    }
}
</script>