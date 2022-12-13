<template>
    <div>
        <v-list>
            <v-list-item to="/my" class="pt-3 pb-3"
                prepend-avatar="https://random.imagecdn.app/v1/image?width=512&height=512&format=png">
                <v-list-item-title class="text-h6 font-weight-bold">サトケイ</v-list-item-title>
                <v-list-item-subtitle>#aaaa</v-list-item-subtitle>
            </v-list-item>
        </v-list>
        <p class="mt-3 font-weight-bold text-h6">最近のアクティビティ</p>
        <v-list>
            <v-list-subheader>今日</v-list-subheader>
            <v-list-item class="pt-3 pb-3"
                prepend-avatar="https://pbs.twimg.com/profile_images/1182051179582251009/c9OguLXD_400x400.jpg"
                to="/favorite/abcd-efgh-ijkl-mnop">
                <v-list-item-title>河野太郎</v-list-item-title>
                <v-list-item-subtitle>お気に入りに追加しました</v-list-item-subtitle>
            </v-list-item>
            <v-list-item class="pt-3 pb-3"
                prepend-avatar="https://pbs.twimg.com/profile_images/1547582068661440512/kWVUOKKY_400x400.jpg"
                to="/recent/abcd-efgh-ijkl-mnop">
                <v-list-item-title>岸田文雄</v-list-item-title>
                <v-list-item-subtitle>このプロフィールを閲覧しました</v-list-item-subtitle>
            </v-list-item>
        </v-list>
    </div>
</template>
<script>
export default {
    setup() {
        document.getElementById("app-title").textContent = "ホーム"
    }
}
</script>