<template>
    <v-list-item :prepend-avatar="avatarPath" :to="to">
        <v-list-item-title class="font-weight-bold">{{ name }}</v-list-item-title>
        <v-list-item-subtitle>@{{ opstidId }}</v-list-item-subtitle>
    </v-list-item>
</template>
<script>
export default {
    props:{
        avatarPath: String,
        name: String,
        opstidId: String,
        to:String
    }
}
</script>