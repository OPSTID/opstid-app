<template>
    <v-text-field clearable placeholder="プロフィールを検索..." variant="underlined" color="blue">
        <template v-slot:append>
            <v-btn icon flat color="blue" size="small">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </template>
    </v-text-field>
</template>
<script>
import { nextTick } from 'vue';
export default {
    setup(){
        document.getElementById("app-title").textContent = "検索"
        nextTick(() => {
            document.querySelector("input").focus();
        })
    }
}
</script>