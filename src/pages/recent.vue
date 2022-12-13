<template>
    <div>
        <v-list>
            <v-list-subheader>今日</v-list-subheader>
            <v-list-item class="pt-3 pb-3"
                prepend-avatar="https://pbs.twimg.com/profile_images/1547582068661440512/kWVUOKKY_400x400.jpg"
                to="/recent/abcd-efgh-ijkl-mnop">
                <v-list-item-title>岸田文雄</v-list-item-title>
                <v-list-item-subtitle>今日 13:56 に閲覧</v-list-item-subtitle>
            </v-list-item>
        </v-list>

        <v-alert class="mt-6 text-caption">
            <p>OPSTID
                では、あなたが閲覧した他のユーザーのプロフィールはすべて一時的にこの端末内に保存されます。必要に応じてお気に入りに追加してください。お気に入りに追加されなかったプロフィールは、最後に閲覧してから30日後以降にOPSTIDにアクセスした際に端末から削除されます。
            </p>
        </v-alert>
    </div>
</template>
<script lang="js">
export default {
    setup() {
        document.getElementById("app-title").textContent = "最近の履歴"
    }
}
</script>