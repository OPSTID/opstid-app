<template>
    <v-list-item :prepend-avatar="avatarPath">
        <v-list-item-title class="font-weight-bold">{{ name }}</v-list-item-title>
        <v-list-item-subtitle>@{{ opstidId }}</v-list-item-subtitle>
    </v-list-item>
</template>
<script>
export default {
    props:{
        avatarPath: String,
        name: String,
        opstidId: String
    }
}
</script>