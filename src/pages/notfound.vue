<script setup>
import { reactive } from 'vue';
import Header from '../components/Header.vue';

const state = reactive({
    currentEmoji: ""
})
// emoji Roulette
const emojis = ["😀", "😁", "😂", "🤣", "😃", "😄", "😅"]

const changeEmoji = () => {
    const index = parseInt(Math.random() * (emojis.length - 1));
    state.currentEmoji = emojis[index]
    setTimeout(changeEmoji, parseInt(Math.random() * 1800))
}


changeEmoji()
</script>
<template>
    <Header hasHomeButton></Header>
    <v-main>
        <p class="text-h2 text-center">{{ state.currentEmoji }}</p>
        <p class="text-h6 font-weight-bold mt-4">Not Found</p>
        <p class="text-body-2 mt-1 text-grey">存在しないページです。URLにミスがないか確認してください。</p>
    </v-main>
</template>