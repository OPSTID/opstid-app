<template>
    <div>
        <v-list>
            <v-list-item class="pt-3 pb-3"
                prepend-avatar="https://pbs.twimg.com/profile_images/1182051179582251009/c9OguLXD_400x400.jpg"
                to="/following/abcd-efgh-ijkl-mnop">
                <v-list-item-title>河野太郎 さん</v-list-item-title>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
export default {
    setup() {
        document.getElementById("app-title").textContent = "お気に入り"
    }
}
</script>